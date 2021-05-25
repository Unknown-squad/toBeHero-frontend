import React from "react";

import Footer from "../../components/Footer";
import HeroHeader from "../../components/HeroHeader";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";

const GuardianEmailConfirmScreen = ({ location, history }) => {
  return (
    <>
      <HeroHeader></HeroHeader>
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
