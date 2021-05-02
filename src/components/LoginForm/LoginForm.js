import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="sign-in-email"
          name="sign-in-email"
          placeholder="Enter your email"
          required
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
        />
        <br />
      </div>
      <div className="form-note just-cont-cntr text-center">
        <Link to="/confirm">forgot your password?</Link>
      </div>
      <div className="form-btns flex-column just-cont-cntr alin-itms-cntr">
        <input
          type="submit"
          className="btn btn-sign"
          name="sign-in"
          value="SIGN IN"
        ></input>
        <p>
          or <Link to="/register">join us now</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
