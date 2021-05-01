import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../images/hero1.png";
import "./GuardianRegisterScreen.scss";
import HeaderLogin from "../../components/HeaderLogin";
import Footer from "../../components/Footer";

const GuardianRegisterScreen = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderLogin></HeaderLogin>
      <section class="hr-section-8">
        <div classNameName="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12 pr-3 mb-3">
              <h1>Join now and Help your child to achieve dreams</h1>
              <img src={hero1} alt="hero-1" />
            </div>

            <div className="col-lg-offset-1 col-lg-6 col-md-7 col-12 ">
              <ul className="nav-form">
                <li>
                  <Link to="/register/guardian">
                    <div className="overlay-form active">Guardian</div>
                  </Link>
                </li>
                <li>
                  <Link to="/register/mentor">
                    <div className="overlay-form">Mentor</div>
                  </Link>
                </li>
              </ul>
              <div className="form-register-container flex-column just-cont">
                <div className="register-form">
                  <div className="form-inputs"></div>
                  <form onSubmit={submitHandler}>
                    <div className="input-field">
                      <label for="name">Full name*</label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label for="email">Email*</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        name="register-email"
                        placeholder="Enter your email"
                        required
                      ></input>
                    </div>
                    <div className="input-field">
                      <label for="password">Password*</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      ></input>
                    </div>
                    <div className="input-field">
                      <label for="password">re-Password*</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Re-enter your password"
                        required
                      ></input>
                    </div>
                    <div className="input-field">
                      <label for="phone">Phone</label>
                      <br />
                      <div className="flex-row w-100">
                        <select name="phone-code" id="phone-code">
                          <option value="+20">+20</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter
                          your phone"
                        ></input>
                      </div>
                    </div>

                    <div className="form-note just-cont-cntr">
                      <p className="text-center">*required</p>
                    </div>

                    <div className="form-btns sign-up-btns flex-column just-cont-cntr alin-itms-cntr">
                      <input
                        type="submit"
                        className="btn btn-sign"
                        name="register"
                        value="Register"
                      ></input>
                      <Link to="/login/guardian">already registered?</Link>
                    </div>
                  </form>
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

export default GuardianRegisterScreen;
