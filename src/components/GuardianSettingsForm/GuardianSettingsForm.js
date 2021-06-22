import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardianGetBasicInfoActions } from "../../actions/guardianGetBasicInfoActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";

const GuardianSettingsForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const guardianGetBasicInfo = useSelector(
    (state) => state.guardianGetBasicInfo
  );
  const { loading, error, guardian } = guardianGetBasicInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!guardian?.fullName) {
      dispatch(guardianGetBasicInfoActions());
    } else {
      setFullName(guardian.fullName);
      setEmail(guardian.email);
      setPhone(guardian.phone);
      setCountryCode(guardian.countryCode);
    }
  }, [dispatch, guardian]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }
    // else {
    //   dispatch(register(name, email, password));
    // }
  };
  return (
    <>
      {message && <ErrorMessage>{message}</ErrorMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader></Loader>}

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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone</label>
              <br />
              <div className="flex-row w-100">
                <select
                  name="phone-code"
                  id="phone-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+20">+20</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
    </>
  );
};

export default GuardianSettingsForm;
