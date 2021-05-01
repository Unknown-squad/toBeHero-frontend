import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogin.scss";
const HeaderLogin = () => {
  return (
    <header>
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
            <button className="hamburger" id="hamburger">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="navbar" id="navbar">
              <li>
                <Link to="/explore">explore</Link>
              </li>
              <li>
                <Link to="/login" className="bg-purple-400">
                  login
                </Link>
              </li>
              <li>
                <Link to="/login/hero" className="hero bg-purple-400">
                  HERO
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLogin;
