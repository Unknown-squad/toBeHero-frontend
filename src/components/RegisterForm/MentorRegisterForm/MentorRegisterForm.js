import React from "react";
import { Link } from "react-router-dom";

const MentorRegisterForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
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
          placeholder="Enter your email"
          required
        ></input>
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
        ></input>
      </div>
      <div className="input-field">
        <label htmlFor="password">re-Password*</label>
        <br />
        <input
          type="password"
          id="confirmPassword"
          name="password"
          placeholder="Re-enter your password"
          required
        ></input>
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
          ></input>
        </div>
      </div>
      <div className="form-note just-cont-cntr">
        <p className="text-center">*required</p>
      </div>
      <div className="form-btns sign-up-btns flex-column just-cont-cntr alin-itms-cntr">
        <Link to="/register/mentor/continue">
          <input
            type="submit"
            className="btn btn-sign"
            name="Continue"
            value="Continue"
          ></input>
        </Link>
        <Link to="/login/mentor">already registered?</Link>
      </div>
    </form>
  );
};

export default MentorRegisterForm;
