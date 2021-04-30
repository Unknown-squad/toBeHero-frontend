import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="">
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
                <Link to="">explore</Link>
              </li>
              <li>
                <Link to="">login</Link>
              </li>
              <li>
                <Link to="" className="hero">
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

export default Header;
