import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../../images/hero1.png";
import Footer from "../../../components/Footer";
import LoginRegHeader from "../../../components/LoginRegHeader";
import "../LoginScreen.scss";
import LoginForm from "../../../components/LoginForm";

const GuardianLoginScreen = () => {
  return (
    <>
      <LoginRegHeader></LoginRegHeader>
      {/* <!-- start sextion-7 --> */}
      <section className="hr-section-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 mb-3">
              <h1>Welcome back</h1>
              <img src={hero1} alt="hero-1" />
            </div>
            <div className="col-lg-offset-1 col-lg-6 col-md-7 col-12 ">
              <ul className="nav-form">
                <li>
                  <div className="overlay-form active">
                    <Link to="/login/guardian">Guardian</Link>
                  </div>
                </li>
                <li>
                  <div className="overlay-form">
                    <Link to="/login/mentor">Mentor</Link>
                  </div>
                </li>
                <li>
                  <div className="overlay-form">
                    <Link to="/login/hero">Hero</Link>
                  </div>
                </li>
              </ul>
              <div className="form-container flex-column just-cont">
                <div className="sign-in-form">
                  <div className="form-inputs">
                    <LoginForm></LoginForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- start sextion-8 --> */}
      <Footer></Footer>
    </>
  );
};

export default GuardianLoginScreen;
