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
import { mentorRegisterActions } from "../../../../actions/mentorRegisterActions";
import Meta from "../../../../components/Meta";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const ContinueMentorRegister = ({ history, location }) => {
  const [birthDate, setBirthDate] = useState("");
  const [languages, setLanguages] = useState([]);
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [picture, setPicture] = useState(null);

  const dispatch = useDispatch();
  const mentorRegister = useSelector((state) => state.mentorRegister);
  const { loading, error, mentorInfo } = mentorRegister;
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/mentor/home";

  useEffect(() => {
    if (mentorInfo) {
      history.push(redirect);
    }
    console.log(JSON.parse(localStorage.getItem("mentorDraft")));
  }, [history, mentorInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    const mentorDraft = JSON.parse(localStorage.getItem("mentorDraft"));
    const dataArray = new FormData();
    dataArray.append("occupation", occupation);
    dataArray.append("countryCode", mentorDraft.countryCode);
    dataArray.append("phone", mentorDraft.phone);
    dataArray.append("email", mentorDraft.email);
    dataArray.append("fullName", mentorDraft.fullName);
    dataArray.append("gender", mentorDraft.gender);
    dataArray.append("password", mentorDraft.password);
    dataArray.append("birthDate", birthDate);
    dataArray.append("languages", languages);
    dataArray.append("description", description);
    dataArray.append("certificates", certificates);
    dataArray.append("img", picture);
    if (mentorDraft) {
      dispatch(mentorRegisterActions(dataArray));
    } else {
      history.push("/register/mentor");
    }
    history.replace("/mentor/email-confirm");
    console.log(dataArray);
  };

  return (
    <>
      <Meta title="ToBeHero | Mentor Signup"></Meta>
      <ContinueMentorHeader></ContinueMentorHeader>
      <div className="container-sign">
        <section className="hr-section-10">
          <div className="container">
            <h3>
              Welcome{" "}
              {localStorage.getItem("mentorDraft")
                ? JSON.parse(localStorage.getItem("mentorDraft")).gender
                : ""}{" "}
              {localStorage.getItem("mentorDraft")
                ? JSON.parse(localStorage.getItem("mentorDraft")).fullName
                : ""}{" "}
              Enter the following data to Continue
            </h3>
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
                      {loading && <Loader></Loader>}
                      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
                      <form onSubmit={submitHandler}>
                        <div className="row">
                          <div className="col-lg-5 col-md-6 col-12">
                            <div className="input-field">
                              <label htmlFor="Birthdate">Birthdate*</label>
                              <br />
                              <input
                                type="date"
                                id="Birthdate"
                                name="name"
                                value={birthDate}
                                className="Birthdate-mentor"
                                placeholder="Enter your Birthdate"
                                required
                                onChange={(e) => setBirthDate(e.target.value)}
                              ></input>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Languages-mentor">
                                Languages*
                              </label>
                              <br />
                              <ReactTagInput
                                tags={languages}
                                placeholder="Type and press enter"
                                maxTags={10}
                                editable={true}
                                readOnly={false}
                                removeOnBackspace={true}
                                onChange={(newTags) => setLanguages(newTags)}
                              />
                              {/* <input
                                type="text"
                                id="Languages-mentor"
                                name="Languages-mentor"
                                className="Languages-mentor"
                                value={languages}
                                placeholder="Enter your email"
                                required
                                onChange={(e) => setLanguages(e.target.value)}
                              ></input> */}
                            </div>
                            <div className="input-field">
                              <label htmlFor="Description">Description*</label>
                              <br />
                              <textarea
                                name=""
                                id="Description"
                                cols="30"
                                rows="7"
                                value={description}
                                placeholder="Enter a short bio about yourself …."
                                onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 col-12">
                            <div className="input-field">
                              <label htmlFor="Occupation">Occupation*</label>
                              <br />
                              {/* <input
                                type="text"
                                id="Occupation"
                                name="Occupation"
                                value={occupation}
                                className="Occupation-mentor"
                                placeholder="Enter at least one"
                                required
                                onChange={(e) => setOccupation(e.target.value)}
                              ></input> */}
                              <ReactTagInput
                                tags={occupation}
                                placeholder="Type and press enter"
                                maxTags={10}
                                editable={true}
                                readOnly={false}
                                removeOnBackspace={true}
                                onChange={(newTags) => setOccupation(newTags)}
                              />
                            </div>
                            <div className="input-field">
                              <label htmlFor="Certificates">Certificates</label>
                              <br />
                              {/* <input
                                type="text"
                                id="Certificates"
                                name="Certificates"
                                value={certificates}
                                className="Certificates-mentor"
                                placeholder=""
                                onChange={(e) =>
                                  setCertificates(e.target.value)
                                }
                              ></input> */}
                              <ReactTagInput
                                tags={certificates}
                                placeholder="Type and press enter"
                                maxTags={10}
                                editable={true}
                                readOnly={false}
                                removeOnBackspace={true}
                                onChange={(newTags) => setCertificates(newTags)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-2 col-12">
                            <label
                              htmlFor="img"
                              className="btn"
                              style={{
                                color: "#fff",
                                backgroundColor: "#8c61ff",
                                padding: "5px 20px",
                                borderRadius: "12px",
                              }}
                            >
                              Upload Image
                            </label>
                            <input
                              style={{
                                marginTop: "1rem",
                                border: "none",
                                cursor: "pointer",
                                borderRadius: "0",
                                background: "none",
                                padding: "0",
                              }}
                              id="img"
                              name="img"
                              type="file"
                              onChange={(e) => setPicture(e.target.files[0])}
                            />
                          </div>
                        </div>
                        <div className="form-note just-cont-cntr">
                          <p className="text-center">*required</p>
                        </div>
                        <div className="form-btns sign-up-btns flex-column just-cont-cntr alin-itms-cntr">
                          <button type="submit" className="btn btn-sign">
                            Continue
                          </button>
                          <Link
                            to={
                              redirect
                                ? `/login/mentor?redirect=${redirect}`
                                : "/login/mentor"
                            }
                          >
                            already registered?
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
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContinueMentorRegister;
