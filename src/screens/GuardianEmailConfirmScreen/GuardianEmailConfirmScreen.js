import React from "react";

import Footer from "../../components/Footer";
import ConfirmEmailForm from "../../components/ConfirmEmailForm";
import ConfirmEmailHeader from "../../components/ConfirmEmailHeader";
import inbox from "../../images/inbox.svg";
import Meta from "../../components/Meta";

const GuardianEmailConfirmScreen = ({ location, history }) => {
  return (
    <>
      <Meta title="Guardian - Please Verify Your Email"></Meta>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <ConfirmEmailHeader user="guardian"></ConfirmEmailHeader>
        <main style={{ display: "grid", placeItems: "center", height: "70%" }}>
          <h2 style={{ textAlign: "center", color: "#220099" }}>
            Welcome{" "}
            {localStorage.getItem("guardianDraft")
              ? JSON.parse(localStorage.getItem("guardianDraft")).fullName
              : ""}
          </h2>
          <h3 style={{ textAlign: "center", color: "#220099" }}>
            Verification Code sent to your email:{" "}
            {localStorage.getItem("guardianDraft")
              ? JSON.parse(localStorage.getItem("guardianDraft")).email
              : ""}
          </h3>
          <img src={inbox} alt="email figure" style={{ width: "19em" }} />
          <ConfirmEmailForm
            user="guardian"
            history={history}
          ></ConfirmEmailForm>
        </main>
        <footer style={{ marginTop: "auto", padding: "0" }}>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default GuardianEmailConfirmScreen;
