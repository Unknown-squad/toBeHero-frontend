import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./styles.css";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
const PaymentForm = ({ courseId, childId, price }) => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setErrorMessage(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/guardian/checkout`,
          {
            method: "Guardian.checkout",
            params: {
              id,
              amount: price * 100,
              childId: childId,
              courseId: courseId,
            },
          },
          { withCredentials: true }
        );
        if (data.success) {
          // setErrorMessage(null);
          setProcessing(false);
          setSuccess(true);
          console.log("Successful payment");
        }
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          setErrorMessage(error.response.data.error.message);
        }
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}

      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button id="submit" disabled={processing || disabled || success}>
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {errorMessage && (
          <div className="card-error" role="alert" style={{ color: "#FA755A" }}>
            {errorMessage}
          </div>
        )}
        <div
          className={success ? "result-message" : "result-message hidden"}
          style={{ marginTop: "1rem" }}
        >
          {success && (
            <SuccessMessage>
              You successfully subscripe to this course.
            </SuccessMessage>
          )}
        </div>
      </form>
    </>
  );
};
export default PaymentForm;
