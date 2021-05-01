import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../images/arrow-back.svg";
import "./HeaderHeroLogin.scss";
const HeaderHeroLogin = () => {
  return (
    <header className="header-signIn-hero">
      <Link to="/login" className="arrow">
        <img src={arrowBack} alt=""></img>
      </Link>
      <div className="container">
        <nav className="nav-signIn-hero">
          <div className="logo">
            <Link to="/">
              <h1>TO BE</h1>
              <span>HERO</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default HeaderHeroLogin;
