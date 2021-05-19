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
const ContinueMentorRegister = ({ history, location }) => {
  const [birthDate, setBirthDate] = useState("12/05/1990");
  const [languages, setLanguages] = useState(["english"]);
  const [description, setDescription] = useState("gggg");
  const [occupation, setOccupation] = useState(["hhhhhhh"]);
  const [certificates, setCertificates] = useState(["nnnnnnnn"]);
  // const [picture, setPicture] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const mentorRegister = useSelector((state) => state.mentorRegister);
  const { loading, error, mentorInfo } = mentorRegister;
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/mentor/home";
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)
  //   setUploading(true)

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }

  //     const { data } = await axios.post('/api/upload', formData, config)

  //     setImage(data)
  //     setUploading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setUploading(false)
  //   }
  // }
  useEffect(() => {
    if (mentorInfo) {
      history.push(redirect);
    }
  }, [history, mentorInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    const mentorDraft = JSON.parse(localStorage.getItem("mentorDraft"));

    if (mentorDraft) {
      dispatch(
        mentorRegisterActions({
          ...mentorDraft,
          birthDate,
          languages,
          description,
          occupation,
          certificates,
          picture,
        })
      );
    } else {
      history.push("/register/mentor");
    }
  };
  const [picture, setPicture] = useState(null);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <ContinueMentorHeader></ContinueMentorHeader>
      <div className="container-sign">
        <section className="hr-section-10">
          <div className="container">
            <h3>
              Welcome {JSON.parse(localStorage.getItem("mentorDraft")).gender}{" "}
              {JSON.parse(localStorage.getItem("mentorDraft")).fullName} Enter
              the following data to Continue
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
                                type="text"
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

                              <input
                                type="text"
                                id="Languages-mentor"
                                name="Languages-mentor"
                                className="Languages-mentor"
                                value={languages}
                                placeholder="Enter your email"
                                required
                                onChange={(e) => setLanguages(e.target.value)}
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
                              <input
                                type="text"
                                id="Occupation"
                                name="Occupation"
                                value={occupation}
                                className="Occupation-mentor"
                                placeholder="Enter at least one"
                                required
                                onChange={(e) => setOccupation(e.target.value)}
                              ></input>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Certificates">Certificates</label>
                              <br />
                              <input
                                type="text"
                                id="Certificates"
                                name="Certificates"
                                value={certificates}
                                className="Certificates-mentor"
                                placeholder=""
                                onChange={(e) =>
                                  setCertificates(e.target.value)
                                }
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
                            <label
                              htmlFor="files"
                              className="btn"
                              style={{ color: "black" }}
                            >
                              upload your picture
                            </label>
                            <input
                              id="files"
                              type="file"
                              onChange={onChangePicture}
                              style={{ visibility: "hidden" }}
                            />
                            <div
                              className="img-back"
                              style={{
                                display: "inline-block",
                                position: "relative",
                                width: "100px",
                                height: "100px",
                                overflow: "hidden",
                                borderRadius: "50%",
                              }}
                            >
                              <img className="img-up" src={upload} alt="" />
                              <img
                                className="icon-up"
                                // src={cameraIcon}
                                alt=""
                                src={picture && picture}
                                style={{
                                  // width: "100%",
                                  // width: "auto",
                                  height: "auto",
                                  // marginLeft: "-10px",
                                }}
                              />
                            </div>
                            <p>upload your picture</p>
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
