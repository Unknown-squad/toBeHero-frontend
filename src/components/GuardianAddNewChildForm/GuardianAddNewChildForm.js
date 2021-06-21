import { some } from "async";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addPicture from "../../images/add-picture.svg";
import uploadPicture from "../../images/upload-picture.svg";
import someoneChild from "../../images/someone-child.svg";
import { useDispatch, useSelector } from "react-redux";

const GuardianAddNewChildForm = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="basic-info-form add-new-form" onSubmit={handleSubmit}>
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
              <label htmlFor="email">Child userbname</label>
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
              <label htmlFor="password">Password</label>
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
            ADD Child
          </button>
        </div>
      </form>
      <div className="add-someone">
        <img src={someoneChild} alt="" />
      </div>
    </>
  );
};

export default GuardianAddNewChildForm;
