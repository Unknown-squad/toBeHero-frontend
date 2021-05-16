import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { guardianLoginActions } from "../../actions/guardianLoginActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
const LoginForm = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { loading, error, guardianInfo } = guardianLogin;
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (guardianInfo) {
      history.push(redirect);
    }
  }, [history, guardianInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(guardianLoginActions(email, password));
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        {loading && <Loader></Loader>}
        {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="sign-in-email"
          name="sign-in-email"
          value={email}
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
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
          or{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            join us now
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
