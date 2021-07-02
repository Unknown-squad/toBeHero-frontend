import React from "react";
import heroBack from "../../images/hero-back.svg";
import { Link } from "react-router-dom";
import "./HeroHomeHeader.scss";
import LogoutButton from "../LogoutButton";
import arrowBack from "../../images/arrow-back.svg";
const HeroHomeHeader = () => {
  return (
    <header className="header-signIn-hero">
      <Link to="/hero/home" className="arrow">
        {" "}
        <img src={arrowBack} alt="" />
      </Link>
      <div className="container">
        <nav className="nav-signIn-hero">
          <div className="logo ">
            <Link to="/hero/home">
              <h1>TO BE</h1>
            </Link>
          </div>
        </nav>
      </div>
      <LogoutButton user="hero" className="arrow-back">
        {/* <a href="" className="arrow-back"> */}
        <img src={heroBack} alt="" />
      </LogoutButton>
      {/* </a> */}
    </header>
  );
};

export default HeroHomeHeader;
