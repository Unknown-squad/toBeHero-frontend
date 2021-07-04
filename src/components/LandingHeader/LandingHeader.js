import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useToggleNavbar from "../../hooks";
import "./LandingHeader.scss";
const LandingHeader = (props) => {
  const [showMobileMenu, onClick] = useToggleNavbar();
  let content = {
    English: {
      linkOne: "Explore",
      linkTwo: "Login",
      linkThree: "Hero",
      dir: "ltr",
    },
    Arabic: {
      linkOne: "استكشــاف",
      linkTwo: "تسجيـل الدخـول",
      linkThree: "البطــــل",
      dir: "rtl",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Arabic);

  return (
    <header style={{ direction: "ltr" }}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              {" "}
              <h1>TO BE</h1>
              <span>HERO</span>
            </Link>
          </div>
          <div className="navbar-ham">
            <button className="hamburger" id="hamburger" onClick={onClick}>
              <i className="fas fa-bars"></i>
            </button>

            {showMobileMenu ? (
              <ul className="navbar show" id="navbar">
                <li>
                  <Link to="/explore">{content.linkOne}</Link>
                </li>
                <li>
                  <Link to="/login">{content.linkTwo}</Link>
                </li>
                <li>
                  <Link to="/login/hero" className="hero">
                    {content.linkThree}
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar" id="navbar">
                <li>
                  <Link to="/explore">{content.linkOne}</Link>
                </li>
                <li>
                  <Link to="/login">{content.linkTwo}</Link>
                </li>
                <li>
                  <Link to="/login/hero" className="hero">
                    {content.linkThree}
                  </Link>
                </li>
              </ul>
            )}
            <div style={{ marginLeft: "2rem" }}>
              <select
                className="custom-select"
                value={props.language}
                onChange={(e) => props.handleSetLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
