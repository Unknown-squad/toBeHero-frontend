import React from "react";
import { Link } from "react-router-dom";
import addPicture from "../../images/add-picture.svg";
import uploadPicture from "../../images/upload-picture.svg";

const GuardianAddHeroForm = () => {
  return (
    <form className="basic-info-form">
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
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Child userbname</label>
            <br />

            <input
              type="email"
              id="email"
              name="register-email"
              placeholder="Enter your email"
              required
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
              name="name"
              className="Birthdate-mentor"
              placeholder="Enter your Birthdate"
              required
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
  );
};

export default GuardianAddHeroForm;
