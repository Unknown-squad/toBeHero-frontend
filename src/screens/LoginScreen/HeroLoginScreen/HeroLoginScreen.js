import React, { useEffect, useState } from "react";
import arrowGo from "../../../images/arrow-go.svg";
import "./HeroLoginScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeroHeader from "../../../components/HeroHeader";
import { heroLoginActions } from "../../../actions/heroLoginActions";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import Meta from "../../../components/Meta";

const HeroLoginScreen = ({ location, history }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const heroLogin = useSelector((state) => state.heroLogin);
  const { loading, error, heroInfo } = heroLogin;
  const dispatch = useDispatch();
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/hero/home";
  useEffect(() => {
    if (heroInfo) {
      history.push(redirect);
    }
  }, [history, heroInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(heroLoginActions(userName, password));
  };
  return (
    <>
      <Meta title="ToBeHero | Hero Login"></Meta>
      <HeroHeader></HeroHeader>
      <div className="container-sign">
        <section className="hr-section-9">
          <div className="container">
            <h1>Welcome back Hero</h1>
            <div className="row">
              <div className="col-md-6 col-12 pr-3 mb-3">
                <div className="hero-signIn"></div>
              </div>
              <div className="col-md-6 col-12 ">
                <div className="form-container flex-column just-cont">
                  <div className="sign-in-form">
                    <div className="form-inputs">
                      {loading && <Loader></Loader>}
                      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
                      <form onSubmit={submitHandler}>
                        <div className="input-field">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={userName}
                            placeholder="Enter your username"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                        <div className="input-field">
                          <label htmlFor="password">Password</label>
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

                        <div className="form-btns flex-column just-cont-cntr alin-itms-cntr">
                          <button className="btn btn-sign" type="submit">
                            GO!
                            <img src={arrowGo} alt=""></img>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroLoginScreen;
