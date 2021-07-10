import React from "react";
import { Link } from "react-router-dom";
import useToggleNavbar from "../../hooks";
import "./LoginRegHeader.scss";
const LoginRegHeader = ({ status }) => {
  const [showMobileMenu, onClick] = useToggleNavbar();
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
            <button className="hamburger" id="hamburger" onClick={onClick}>
              <i className="fas fa-bars"></i>
            </button>
            {showMobileMenu ? (
              <ul className="navbar show" id="navbar">
                <li>
                  <Link to="/explore">explore</Link>
                </li>
                <li>
                  {status === "login" ? (
                    <Link to="/register" className="bg-purple-400">
                      register
                    </Link>
                  ) : (
                    <Link to="/login" className="bg-purple-400">
                      login
                    </Link>
                  )}
                </li>
                <li>
                  <Link to="/login/hero" className="hero bg-purple-400">
                    HERO
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar" id="navbar">
                <li>
                  <Link to="/explore">explore</Link>
                </li>
                <li>
                  {status === "login" ? (
                    <Link to="/register" className="bg-purple-400">
                      register
                    </Link>
                  ) : (
                    <Link to="/login" className="bg-purple-400">
                      login
                    </Link>
                  )}
                </li>
                <li>
                  <Link to="/login/hero" className="hero bg-purple-400">
                    HERO
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LoginRegHeader;
