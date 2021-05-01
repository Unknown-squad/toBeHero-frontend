import React from "react";
import { Link } from "react-router-dom";
const HeaderLogin = () => {
  return (
    <header>
      <div class="container">
        <nav>
          <div class="logo">
            <Link to="/">
              {" "}
              <h1>TO BE</h1>
              <span>HERO</span>
            </Link>
          </div>
          <div class="navbar-ham">
            <button class="hamburger" id="hamburger">
              <i class="fas fa-bars"></i>
            </button>
            <ul class="navbar" id="navbar">
              <li>
                <Link to="/explore">explore</Link>
              </li>
              <li>
                <Link to="/login" class="bg-purple-400">
                  login
                </Link>
              </li>
              <li>
                <Link to="/login/hero" class="hero bg-purple-400">
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
