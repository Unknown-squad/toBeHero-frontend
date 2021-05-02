import React from "react";
import heroSignIn from "../../../images/hero-signIn.png";
import arrowGo from "../../../images/arrow-go.svg";
import "./HeroLoginScreen.scss";
import { Link } from "react-router-dom";
import HeroHeader from "../../../components/HeroHeader";

const HeroLoginScreen = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeroHeader></HeroHeader>
      <section className="hr-section-9">
        <div className="container">
          <h1>Welcome back Hero</h1>
          <div className="row">
            <div className="col-md-6 col-12 pr-3 mb-3">
              <img src={heroSignIn} className="hero-signIn" alt="hero-signIn" />
            </div>
            <div className="col-md-6 col-12 ">
              <div className="form-container flex-column just-cont">
                <div className="sign-in-form">
                  <div className="form-inputs">
                    <form onSubmit={submitHandler}>
                      <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter your username"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                        <br />
                      </div>

                      <div className="form-btns flex-column just-cont-cntr alin-itms-cntr">
                        <Link to="">
                          <button className="btn btn-sign" type="submit">
                            GO!
                            <img src={arrowGo} alt=""></img>
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroLoginScreen;
