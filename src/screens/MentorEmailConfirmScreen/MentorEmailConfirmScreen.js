import React from "react";
import Footer from "../../components/Footer";
import HeroHeader from "../../components/HeroHeader";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";

const MentorEmailConfirmScreen = ({ location, history }) => {
  return (
    <>
      <HeroHeader></HeroHeader>
      <h1>
        Welcome{" "}
        {localStorage.getItem("mentorDraft")
          ? JSON.parse(localStorage.getItem("mentorDraft")).fullName
          : ""}
      </h1>
      <p>
        Your verfication Code is sent to your email:
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
