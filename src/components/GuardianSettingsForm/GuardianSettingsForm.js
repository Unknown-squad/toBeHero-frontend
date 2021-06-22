import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GuardianSettingsForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  useEffect(() => {}, []);
  const submitHandler = () => {};
  return (
    <form className="basic-info-form" onSubmit={submitHandler}>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="input-field">
            <label htmlFor="name">Full name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value="mohammed sobhi"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
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
        </div>
        <div className="col-lg-6 col-12">
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value="zzzzzzzzzzzzzzzzz"
            />
          </div>
          <div className="input-field">
            <label htmlFor="re-password">re-Password</label>
            <br />
            <input
              type="password"
              id="re-password"
              name="password"
              placeholder="Enter your password"
              required
              value="zzzzzzzzzzzzzzzzz"
            />
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

export default GuardianSettingsForm;
