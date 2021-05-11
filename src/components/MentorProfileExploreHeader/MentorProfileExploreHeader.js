import React from "react";
import { Link } from "react-router-dom";

const MentorProfileExploreHeader = () => {
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
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/register" className="bg-purple-400">
                  Sign up
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

export default MentorProfileExploreHeader;
