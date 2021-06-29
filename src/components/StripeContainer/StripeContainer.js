import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "../../components/PaymentForm";
import "./StripeContainer.scss";
const PUBLIC_KEY =
  "pk_test_51InwK8DlMEFhQMv2dZ2ccm6uTXM16lwUhMA6w7klu6ymp0Cu4JO1FE6DiADhLng0aqmcCcy9TBzfjop6bXVkl3nk00hqa1SYPf";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ childId, courseId, price }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        childId={childId}
        courseId={courseId}
        price={price}
      ></PaymentForm>
    </Elements>
  );
}
