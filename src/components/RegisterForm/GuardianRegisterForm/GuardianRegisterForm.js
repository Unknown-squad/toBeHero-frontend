import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { guardianRegisterActions } from "../../../actions/guardianRegisterActions";
import { GUARDIAN_REGISTER_RESET_ERROR } from "../../../constants/guardianRegisterConstants";
import { MENTOR_REGISTER_RESET_ERROR } from "../../../constants/mentorRegisterConstants";
import ErrorMessage from "../../ErrorMessage";
import Loader from "../../Loader";

const GuardianRegisterForm = ({ location, history, match }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const guardianRegister = useSelector((state) => state.guardianRegister);
  const { loading, error, guardianInfo } = guardianRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/explore";

  useEffect(() => {
    if (guardianInfo) {
      history.push(redirect);
    }
    dispatch({ type: MENTOR_REGISTER_RESET_ERROR });
  }, [history, guardianInfo, redirect, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        guardianRegisterActions(fullName, email, password, countryCode, phone)
      );
      history.replace("/guardian/email-confirm");
    }
  };

  return (
    <div className="form-inputs">
      {loading && <Loader></Loader>}
      {message ? (
        <ErrorMessage>{message}</ErrorMessage>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        ""
      )}

      <form onSubmit={submitHandler}>
        <div className="input-field">
          <label htmlFor="name">Full name*</label>
          <br />
          <input
            type="text"
            id="name"
            value={fullName}
            name="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            name="register-email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password*</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">re-Password*</label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="password"
            value={confirmPassword}
            placeholder="Re-enter your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
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
              value={phone}
              name="phone"
              placeholder="Enter
          your phone"
              onChange={(e) => setPhone(e.target.value)}
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
          <Link
            to={
              redirect
                ? `/login/guardian?redirect=${redirect}`
                : "/login/guardian"
            }
          >
            already registered?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default GuardianRegisterForm;
