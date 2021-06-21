import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import uploadPicture from "../../images/upload-picture.svg";
import addPicture from "../../images/add-picture.svg";
import { useSelector, useDispatch } from "react-redux";
import { getMentorBasicInfoActions } from "../../actions/mentorBasicInfoActions";
import { MENTOR_UPDATE_BASICINFO_RESET } from "../../constants/mentorUpdateBasicInfoConstants";
import { updateMentorBasicInfoActions } from "../../actions/updateMentorBasicInfoActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
const BasicInfoMentorForm = ({ history }) => {
  // let history = useHistory();
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [languages, setLanguages] = useState([]);
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [picture, setPicture] = useState("");
  const [alert, setAlert] = useState(false);
  // const [uploading, setUploading] = useState(false);

  const mentorBasicInfo = useSelector((state) => state.mentorBasicInfo);
  const { loading, error, mentor } = mentorBasicInfo;

  const mentorUpdateBasicInfo = useSelector(
    (state) => state.mentorUpdateBasicInfo
  );
  const {
    mentorInfo,
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = mentorUpdateBasicInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      // history.push("/mentor/dashboard/basicinfo");

      Promise.all([
        dispatch({ type: MENTOR_UPDATE_BASICINFO_RESET }),
        dispatch(getMentorBasicInfoActions()),
      ]);
    } else {
      if (!mentor) {
        dispatch(getMentorBasicInfoActions());
      } else {
        setFullName(mentor.fullName);
        setEmail(mentor.email);
        setGender(mentor.gender);
        setCountryCode(mentor.countryCode);
        setPhone(mentor.phone);
        setLanguages(mentor.languages[0]);
        setBirthDate(new Date(mentor.birthDate).toLocaleDateString());
        setDescription(mentor.description);
        setOccupation(mentor.occupation[0]);
        setCertificates(mentor.certificates[0]);
        setPicture(mentor.picture);
      }
    }
    setAlert(false);
  }, [dispatch, successUpdate, history, mentor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateMentorBasicInfoActions({
        gender,
        fullName,
        email,
        password,
        countryCode,
        phone,
        birthDate,
        languages,
        occupation,
        certificates,
        description,
        picture,
      })
    );
    setTimeout(() => {
      setAlert(true);
    }, 1100);
  };

  return (
    <>
      {loadingUpdate && <Loader></Loader>}
      {errorUpdate && <ErrorMessage>{errorUpdate}</ErrorMessage>}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <form className="basic-info-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="input-field">
                <label htmlFor="name">Full name*</label>
                <br />
                <div className="flex-row w-100">
                  <select
                    name="mr"
                    id="mr"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value="mr">Mr.</option>
                    <option value="mrs">Ms.</option>
                  </select>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fullName}
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="email">Email*</label>
                <br />

                <input
                  type="email"
                  id="email"
                  name="register-email"
                  value={email}
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password*</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone</label>
                <br />
                <div className="flex-row w-100">
                  <select
                    name="phone-code"
                    id="phone-code"
                    onChange={(e) => setCountryCode(e.target.value)}
                    value={countryCode}
                  >
                    <option value="+20">+20</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="Description">Description*</label>
                <br />
                <textarea
                  name=""
                  id="Description"
                  cols="30"
                  rows="8"
                  placeholder="Enter a short bio about yourself …."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-field">
                <label htmlFor="Birthdate">Birthdate*</label>
                <br />
                <input
                  type="text"
                  id="Birthdate"
                  name="name"
                  className="Birthdate-mentor"
                  placeholder="Enter your Birthdate"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="input-field">
                <label htmlFor="Languages-mentor">Languages*</label>
                <br />

                <input
                  type="text"
                  id="Languages-mentor"
                  name="Languages-mentor"
                  className="Languages-mentor"
                  placeholder="Enter your Languages"
                  onChange={(e) => setLanguages(e.target.value)}
                  value={languages}
                  required
                />
              </div>
              <div className="input-field pt-1">
                <label htmlFor="Occupation">
                  Occupation<sup>at least one</sup>
                </label>
                <br />
                <input
                  type="text"
                  id="Occupation"
                  name="Occupation"
                  className="Occupation-mentor"
                  placeholder="Enter at least one"
                  required
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
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
                  value={certificates}
                  onChange={(e) => setCertificates(e.target.value)}
                />
                {/* <input
              type="text"
              id="Certificates"
              name="Certificates"
              className="Certificates-mentor"
              placeholder=""
              value="Lorem ipsum dolor sit amet"
            /> */}
              </div>
              <div className="input-field">
                <button className="btn file-input__label">add new</button>
              </div>

              <div className="upload-picture">
                <div className="img-back">
                  <img className="img-up" src={uploadPicture} alt="" />
                  <img className="icon-up" src={addPicture} alt="" />
                </div>
                <div className="img-content">
                  <Link to="">
                    <i className="fas fa-camera"></i> upload new picture
                  </Link>
                  <button className="btn btn-purple-400">save</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {alert && !error && !errorUpdate ? (
              <SuccessMessage>
                mentor basic information is updated successfully.
              </SuccessMessage>
            ) : null}
          </div>
          <div className="create-new">
            <button className="btn btn-purple-400" type="submit">
              Save changes
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default BasicInfoMentorForm;
