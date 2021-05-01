import React from "react";
import { Link } from "react-router-dom";

const HeaderHeroLogin = () => {
  return (
    <header className="header-signIn-hero">
      <Link to="/login" className="arrow">
        <img rc="images/arrow-back.svg" alt=""></img>
      </Link>
      <div className="container">
        <nav className="nav-signIn-hero">
          <div class="logo">
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
