import React from "react";
import { Link } from "react-router-dom";

const GuardianRegisterForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        <label htmlFor="name">Full name*</label>
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
          id="passwordConfirm"
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
  );
};

export default GuardianRegisterForm;
