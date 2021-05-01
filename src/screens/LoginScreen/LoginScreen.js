import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../images/hero1.png";
import Footer from "../../components/Footer";
import HeaderLogin from "../../components/HeaderLogin";
import "./LoginScreen.scss";
const LoginScreen = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeaderLogin></HeaderLogin>
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
                    <form onSubmit={submitHandler}>
                      <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                          type="email"
                          id="sign-in-email"
                          name="sign-in-email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                        <br />
                      </div>
                      <div className="form-note just-cont-cntr text-center">
                        <Link to="/confirm">forgot your password?</Link>
                      </div>
                      <div className="form-btns flex-column just-cont-cntr alin-itms-cntr">
                        <input
                          type="submit"
                          className="btn btn-sign"
                          name="sign-in"
                          value="SIGN IN"
                        ></input>
                        <p>
                          or <Link to="/register">join us now</Link>
                        </p>
                      </div>
                    </form>
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

export default LoginScreen;
