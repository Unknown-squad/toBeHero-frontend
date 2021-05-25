import React from "react";
import Footer from "../../components/Footer";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";
import ConfirmEmailHeader from "../../components/ConfirmEmailHeader";

const MentorEmailConfirmScreen = ({ location, history }) => {
  return (
    <>
      <ConfirmEmailHeader user="mentor"></ConfirmEmailHeader>
      <h1>
        Welcome{" "}
        {localStorage.getItem("mentorDraft")
          ? JSON.parse(localStorage.getItem("mentorDraft")).fullName
          : ""}
      </h1>
      <p>
        Your verfication Code is sent to your email:{" "}
        {localStorage.getItem("mentorDraft")
          ? JSON.parse(localStorage.getItem("mentorDraft")).email
          : ""}
      </p>
      <ConfirmEmailForm user="mentor" history={history}></ConfirmEmailForm>
      <Footer></Footer>
    </>
  );
};

export default MentorEmailConfirmScreen;
