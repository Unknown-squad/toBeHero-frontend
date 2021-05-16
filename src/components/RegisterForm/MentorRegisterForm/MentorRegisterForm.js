import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../../ErrorMessage";
import Loader from "../../Loader";
import { Link } from "react-router-dom";
import { mentorRegisterActions } from "../../../actions/mentorRegisterActions";

const MentorRegisterForm = ({ location, history }) => {
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const mentorRegister = useSelector((state) => state.mentorRegister);
  const { loading, error, mentorInfo } = mentorRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/explore";

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // dispatch(
      //   mentorRegisterActions(
      //     gender,
      //     fullName,
      //     email,
      //     password,
      //     countryCode,
      //     phone
      //   )
      // );
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
          <div className="flex-row w-100">
            <select
              name="mr"
              id="mr"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
            </select>
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              placeholder="Enter your name"
              required
              onChange={(e) => setFullName(e.target.value)}
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
            value={email}
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
            name="password"
            value={password}
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
              placeholder="Enter your phone"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="form-note just-cont-cntr">
          <p className="text-center">*required</p>
        </div>
        <div className="form-btns sign-up-btns flex-column just-cont-cntr alin-itms-cntr">
          <Link
            to={
              redirect
                ? `/register/mentor/continue?redirect=${redirect}`
                : "/register/mentor/continue"
            }
          >
            <input
              type="submit"
              className="btn btn-sign"
              name="Continue"
              value="Continue"
            ></input>
          </Link>
          <Link
            to={
              redirect ? `/login/mentor?redirect=${redirect}` : "/login/mentor"
            }
          >
            already registered?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MentorRegisterForm;
