import React from "react";
import heroBack from "../../images/hero-back.svg";
import { Link } from "react-router-dom";
import "./HeroHomeHeader.scss";
import LogoutButton from "../LogoutButton";
const HeroHomeHeader = () => {
  return (
    <header className="header-signIn-hero">
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
