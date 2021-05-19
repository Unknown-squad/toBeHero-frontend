import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { guardianLoginActions } from "../../actions/guardianLoginActions";
import { mentorLoginActions } from "../../actions/mentorLoginActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { GUARDIAN_LOGIN_RESET_ERROR } from "../../constants/guardianLoginConstants";
import { MENTOR_LOGIN_RESET_ERROR } from "../../constants/mentorLoginConstants";
import { HERO_LOGIN_RESET_ERROR } from "../../constants/heroLoginConstants";
const LoginForm = ({ location, history, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { loading, error, guardianInfo } = guardianLogin;

  const mentorLogin = useSelector((state) => state.mentorLogin);
  const {
    loading: mentorLoading,
    error: mentorError,
    mentorInfo,
  } = mentorLogin;

  const dispatch = useDispatch();
  const redirect = location.search
    ? location.search.split("=")[1]
    : `/${user}/home`;

  useEffect(() => {
    if (
      (user === "guardian" && guardianInfo) ||
      (user === "mentor" && mentorInfo)
    ) {
      history.push(redirect);
    }
    dispatch({ type: MENTOR_LOGIN_RESET_ERROR });
    dispatch({ type: GUARDIAN_LOGIN_RESET_ERROR });
    dispatch({ type: HERO_LOGIN_RESET_ERROR });
  }, [history, guardianInfo, redirect, mentorInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (user === "guardian") {
      dispatch(guardianLoginActions(email, password));
    } else if (user === "mentor") {
      dispatch(mentorLoginActions(email, password));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        {loading || mentorLoading ? <Loader></Loader> : ""}
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : mentorError ? (
          <ErrorMessage>{mentorError}</ErrorMessage>
        ) : (
          ""
        )}

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
