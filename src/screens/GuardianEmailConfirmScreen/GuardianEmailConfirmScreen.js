import React from "react";

import Footer from "../../components/Footer";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";
import ConfirmEmailHeader from "../../components/ConfirmEmailHeader";

const GuardianEmailConfirmScreen = ({ location, history }) => {
  return (
    <>
      <ConfirmEmailHeader user="guardian"></ConfirmEmailHeader>
      <h1>
        Welcome{" "}
        {localStorage.getItem("guardainDraft")
          ? JSON.parse(localStorage.getItem("guardainDraft")).fullName
          : ""}
      </h1>
      <p>
        Your verfication Code is sent to your email:
        {localStorage.getItem("guardainDraft")
          ? JSON.parse(localStorage.getItem("guardainDraft")).email
          : ""}
      </p>
      <ConfirmEmailForm user="guardian" history={history}></ConfirmEmailForm>
      <Footer></Footer>
    </>
  );
};

export default GuardianEmailConfirmScreen;
