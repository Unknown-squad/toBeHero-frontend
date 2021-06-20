import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../images/arrow-back.svg";
import inbox from "../../images/inbox.svg";
import Footer from "../../components/Footer";

const VerifyEmailScreen = () => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="flex-row just-cont-cntr">
        <Link to="/" className="arrow">
          <img src={arrowBack} alt=""></img>
        </Link>
        <div className="container">
          <nav>
            <div className="logo ">
              <Link to="/">
                {" "}
                <h1>TO BE</h1>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main style={{ display: "grid", placeItems: "center", height: "70%" }}>
        <h2 style={{ textAlign: "center", color: "#220099" }}>
          check your Email for verification code
        </h2>
        <img src={inbox} alt="email figure" style={{ width: "19em" }} />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="verify"
            style={{ fontSize: "20px", textAlign: "center" }}
          >
            Verification code:{" "}
          </label>
          <input
            type="text"
            name="verify"
            id="verify"
            placeholder="Enter the code"
            style={{
              fontSize: "18px",
              backgroundImage: "none",
              textAlign: "center",
              margin: "8px 0",
            }}
          />
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
            Submit
          </button>
        </form>
      </main>
      <footer style={{ marginTop: "auto", padding: "0" }}>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default VerifyEmailScreen;
