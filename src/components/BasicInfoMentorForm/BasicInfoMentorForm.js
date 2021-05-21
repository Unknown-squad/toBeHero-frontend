import React from "react";
import { Link } from "react-router-dom";
import uploadPicture from "../../images/upload-picture.svg";
import addPicture from "../../images/add-picture.svg";
const BasicInfoMentorForm = () => {
  return (
    <form action="" class="basic-info-form">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="input-field">
            <label htmlFor="name">Full name*</label>
            <br />
            <div className="flex-row w-100">
              <select name="mr" id="mr">
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value="mohammed sobhi"
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email*</label>
            <br />

            <input
              type="email"
              id="email"
              name="register-email"
              placeholder="Enter your email"
              required
              value="m.mohammed.sobhi.98@gmail.com"
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
              value="zzzzzzzzzzzzzzzzzzz"
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone</label>
            <br />
            <div className="flex-row w-100">
              <select name="phone-code" id="phone-code">
                <option value="+20">+20</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                value="01115790092"
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
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              deserunt et provident ad alias minus recusandae ut odit accusamus
              eaque eligendi, facere doloribus officiis dolorum illum animi
              minima quam repellat! Fuga labore beatae saepe animi iusto
              officiis eius optio impedit?
            </textarea>
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
              value="28 - 9 - 1998"
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
              value="Lorem ipsum dolor sit amet"
            />
            <input
              type="text"
              id="Certificates"
              name="Certificates"
              className="Certificates-mentor"
              placeholder=""
              value="Lorem ipsum dolor sit amet"
            />
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
      <div className="create-new">
        <button className="btn btn-purple-400">Save changes</button>
      </div>
    </form>
  );
};

export default BasicInfoMentorForm;
