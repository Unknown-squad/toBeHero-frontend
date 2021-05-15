import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContinueMentorHeader from "../../../../components/ContinueMentorHeader";
import Footer from "../../../../components/Footer";
import plusIcon from "../../../../images/plus-icon.svg";
import cameraIcon from "../../../../images/camera-icon.svg";
import upload from "../../../../images/upload.svg";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../../../../components/ErrorMessage";
import Loader from "../../../../components/Loader";
import "./ContinueMentorRegister.scss";
const ContinueMentorRegister = () => {
  const [birthDate, setBirthDate] = useState("");
  const [languages, setLanguages] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ContinueMentorHeader></ContinueMentorHeader>
      <div className="container-sign">
        <section className="hr-section-10">
          <div className="container">
            <h3>Welcome Mr. Mohamed Enter the following data to Continue</h3>
            <div className="row">
              <div className="col-12 ">
                <ul className="nav-form">
                  <li>
                    <Link to="/register/mentor/continue">
                      <div className="overlay-form active">Mentor</div>
                    </Link>
                  </li>
                </ul>
                <div className="form-register-container flex-column just-cont">
                  <div className="register-form">
                    <div className="form-inputs">
                      <form onSubmit={submitHandler}>
                        <div className="row">
                          <div className="col-lg-5 col-md-6 col-12">
                            <div className="input-field">
                              <label for="Birthdate">Birthdate*</label>
                              <br />
                              <input
                                type="text"
                                id="Birthdate"
                                name="name"
                                className="Birthdate-mentor"
                                placeholder="Enter your Birthdate"
                                required
                              ></input>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Languages-mentor">
                                Languages*
                              </label>
                              <br />

                              <input
                                type="text"
                                id="Languages-mentor"
                                name="Languages-mentor"
                                className="Languages-mentor"
                                placeholder="Enter your email"
                                required
                              ></input>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Description">Description*</label>
                              <br />
                              <textarea
                                name=""
                                id="Description"
                                cols="30"
                                rows="7"
                                placeholder="Enter a short bio about yourself …."
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 col-12">
                            <div className="input-field">
                              <label htmlFor="Occupation">Occupation*</label>
                              <br />
                              <input
                                type="text"
                                id="Occupation"
                                name="Occupation"
                                className="Occupation-mentor"
                                placeholder="Enter at least one"
                                required
                              ></input>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Certificates">Certificates</label>
                              <br />
                              <input
                                type="text"
                                id="Certificates"
                                name="Certificates"
                                className="Certificates-mentor"
                                placeholder=""
                              ></input>
                            </div>
                            <div className="input-field">
                              <button className="btn file-input__label">
                                <img src={plusIcon} alt="" />
                                <span>add new</span>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-2 col-12">
                            <div className="img-back">
                              <img className="img-up" src={upload} alt="" />
                              <img
                                className="icon-up"
                                src={cameraIcon}
                                alt=""
                              />
                            </div>
                            <p>upload your picture </p>
                          </div>
                        </div>
                        <div className="form-note just-cont-cntr">
                          <p className="text-center">*required</p>
                        </div>
                        <div className="form-btns sign-up-btns flex-column just-cont-cntr alin-itms-cntr">
                          <input
                            type="submit"
                            className="btn btn-sign"
                            name="Continue"
                            value="Continue"
                          ></input>
                          <Link to="/login/mentor">already registered?</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContinueMentorRegister;
