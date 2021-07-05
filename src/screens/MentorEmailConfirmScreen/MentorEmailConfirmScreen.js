import React from "react";
import Footer from "../../components/Footer";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";
import ConfirmEmailHeader from "../../components/ConfirmEmailHeader";
import inbox from "../../images/inbox.svg";
import Meta from "../../components/Meta";
import { useHistory } from "react-router";
const MentorEmailConfirmScreen = () => {
  let history = useHistory();
  return (
    <>
      <Meta title="Mentor - Please Verify Your Email"></Meta>

      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <ConfirmEmailHeader user="mentor"></ConfirmEmailHeader>
        <main style={{ display: "grid", placeItems: "center", height: "70%" }}>
          <h2 style={{ textAlign: "center", color: "#220099" }}>
            Welcome{" "}
            {localStorage.getItem("mentorDraft")
              ? JSON.parse(localStorage.getItem("mentorDraft")).fullName
              : ""}
          </h2>
          <h3 style={{ textAlign: "center", color: "#220099" }}>
            Verification Code sent to your email:{" "}
            {localStorage.getItem("mentorDraft")
              ? JSON.parse(localStorage.getItem("mentorDraft")).email
              : ""}
          </h3>
          <img src={inbox} alt="email figure" style={{ width: "19em" }} />
          <ConfirmEmailForm user="mentor" history={history}></ConfirmEmailForm>
        </main>
        <footer style={{ marginTop: "auto", padding: "0" }}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default MentorEmailConfirmScreen;
