import React from "react";
import Footer from "../../../components/Footer";
import hero1 from "../../../images/hero1.png";
import { Link } from "react-router-dom";
import { MentorRegisterForm } from "../../../components/RegisterForm";
import LoginRegHeader from "../../../components/LoginRegHeader";
import "../RegisterScreen.scss";

const MentorRegisterScreen = () => {
  return (
    <>
      <LoginRegHeader></LoginRegHeader>
      <section className="hr-section-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 pr-3 mb-3">
              <h1>Join now and Help your child to achieve dreams</h1>
              <img src={hero1} alt="hero-1" />
            </div>
            <div className="col-lg-offset-1 col-lg-6 col-md-7 col-12 ">
              <ul className="nav-form">
                <li>
                  <div className="overlay-form ">
                    <Link to="/register/guardian">Guardian</Link>
                  </div>
                </li>
                <li>
                  <div className="overlay-form active">
                    <Link to="/register/mentor">Mentor</Link>
                  </div>
                </li>
              </ul>
              <div className="form-register-container flex-column just-cont">
                <div className="register-form">
                  <div className="form-inputs">
                    <MentorRegisterForm></MentorRegisterForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MentorRegisterScreen;
