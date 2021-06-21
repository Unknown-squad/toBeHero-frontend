import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addPicture from "../../images/add-picture.svg";
import someoneChild from "../../images/someone-child.svg";
import uploadPicture from "../../images/upload-picture.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBasicInfoForChildActions } from "../../actions/getBasicInfoForChildActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";

const GuardianGetBasicInfoForHeroForm = ({ childId }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  const getBasicInfoForChild = useSelector(
    (state) => state.getBasicInfoForChild
  );
  const { loading, error, data } = getBasicInfoForChild;

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getBasicInfoForChildActions(childId));
    } else {
      setFullName(data.fullName);
      setUserName(data.userName);
      setBirthdate(data.birthDate);
      setPicture(data.picture);
    }
  }, [dispatch, childId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* {loadingUpdate && <Loader></Loader>} */}
      {/* {errorUpdate && <ErrorMessage>{errorUpdate}</ErrorMessage>} */}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <form className="basic-info-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="input-field">
                  <label htmlFor="name">Child name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="username">Child username</label>
                  <br />

                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password*</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-field">
                  <label htmlFor="Birthdate">Birthdate*</label>
                  <br />
                  <input
                    type="text"
                    id="Birthdate"
                    name="birthdate"
                    className="Birthdate-mentor"
                    placeholder="Enter your Birthdate"
                    required
                    value={birthdate}
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                  />
                </div>
                <div className="upload-picture">
                  <div className="img-back">
                    <img className="img-up" src={uploadPicture} alt="" />
                    <img className="icon-up" src={addPicture} alt="" />
                  </div>
                  <div className="img-content">
                    <Link to="">
                      <i className="fas fa-camera"></i>
                      upload new picture
                    </Link>
                    <button className="btn btn-purple-400">save</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-new">
              <button className="btn btn-purple-400" type="submit">
                Save changes
              </button>
            </div>
          </form>
          <div className="someone-child">
            <img src={someoneChild} alt="" />
          </div>
        </>
      )}
    </>
  );
};

export default GuardianGetBasicInfoForHeroForm;
