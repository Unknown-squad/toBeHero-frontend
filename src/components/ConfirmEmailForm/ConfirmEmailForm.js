import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import HeroHeader from "../HeroHeader";
import Loader from "../Loader";
import SuccessMessage from "../SuccessMessage";

const ConfirmEmailForm = ({ history, user }) => {
  const [message, setMessage] = useState("");
  const [stateLoading, setStateLoading] = useState(false);
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState("");

  const confirmEmail = async (token) => {
    setStateLoading(true);
    try {
      const config = {
        header: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/verify-email`,
        {
          method: "verify-email.post",
          params: {
            token,
          },
        },
        { withCredentials: true },
        config
      );

      setStateLoading(false);

      if (user === "mentor") {
        if (Response.status === 200) {
          setTimeout(() => {
            setAlert(data.message);
          }, 0);
          history.push("/mentor/home");
          localStorage.removeItem("mentorDraft");
        } else if (Response.status === 401) {
          return;
        } else if (Response.status === 400) {
          setMessage(data.error.message);
          return;
        }
      } else if (user === "guardian") {
        if (Response.status === 200) {
          setTimeout(() => {
            setAlert(data.message);
          }, 0);
          history.replace("/guardian/home");
          localStorage.removeItem("guardianDraft");
        } else if (Response.status === 401) {
          return;
        } else if (Response.status === 400) {
          setMessage(data.error.message);
          return;
        }
      }
    } catch (error) {
      setStateLoading(false);
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data.error.message);
        // setTimeout(() => {
        setMessage(error.response.data.error.message);
        // }, 0);
        // setTimeout(() => {
        //   setMessage(null);
        // }, 3000);
        // clearTimeout();
      } else if (error.request) {
        // The request was made but no response was received
        setMessage(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage(error.message);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    confirmEmail(code);
    if (user === "mentor") {
      history.replace(`/home`);
    } else if (user === "guardian") {
      history.replace(`/home`);
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {stateLoading && <Loader></Loader>}
        {alert && <SuccessMessage>{alert}</SuccessMessage>}
        {message ? <ErrorMessage>{message}</ErrorMessage> : null}
        <label htmlFor="code" style={{ fontSize: "20px", textAlign: "center" }}>
          Verification code:
        </label>
        <input
          style={{
            fontSize: "18px",
            backgroundImage: "none",
            textAlign: "center",
            margin: "8px 0",
          }}
          id="code"
          name="code"
          type="text"
          placeholder="Enter code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></input>
        <button
          type="submit"
          style={{
            fontSize: "18px",
            width: "100px",
            border: "none",
            borderRadius: "6px",
            padding: "3px 0",
            color: "#fff",
            backgroundColor: "#343090",
            cursor: "pointer",
          }}
        >
          Verify
        </button>
      </form>
    </>
  );
};

export default ConfirmEmailForm;
