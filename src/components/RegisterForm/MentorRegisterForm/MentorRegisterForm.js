import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorMessage from "../../ErrorMessage";
import Loader from "../../Loader";
import { Link } from "react-router-dom";
import axios from "axios";
import { MENTOR_REGISTER_RESET_ERROR } from "../../../constants/mentorRegisterConstants";
import { GUARDIAN_REGISTER_RESET_ERROR } from "../../../constants/guardianRegisterConstants";

const MentorRegisterForm = ({ location, history }) => {
  const [gender, setGender] = useState("mr");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [stateLoading, setStateLoading] = useState(false);

  const mentorRegister = useSelector((state) => state.mentorRegister);
  const { loading, error } = mentorRegister;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/mentor/home";
  const checkUserEmail = async (email) => {
    setStateLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/mentor/email/status/${email}`
      );
      setStateLoading(false);
      localStorage.setItem(
        "mentorDraft",
        JSON.stringify({
          gender,
          fullName,
          email,
          password,
          countryCode,
          phone,
        })
      );
      // console.log(gender, fullName, email, password, countryCode, phone);
      // debugger;
      history.push(
        redirect
          ? `/register/mentor/continue?redirect=${redirect}`
          : "/register/mentor/continue"
      );
    } catch (error) {
      setStateLoading(false);
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        setMessage(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage(error.message);
      }
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GUARDIAN_REGISTER_RESET_ERROR });
    dispatch({ type: MENTOR_REGISTER_RESET_ERROR });
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      checkUserEmail(email);
    }
  };

  return (
    <div className="form-inputs">
      {(loading || stateLoading) && <Loader></Loader>}
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
              <option value="mr">Mr.</option>
              <option value="mrs">Ms.</option>
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
          <input
            type="submit"
            className="btn btn-sign"
            name="Continue"
            value="Continue"
          ></input>
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
