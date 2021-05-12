import React from "react";
import { Link } from "react-router-dom";
import useToggleNavbar from "../../hooks";

const ExploreHeader = () => {
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
            ) : (
              <ul className="navbar" id="navbar">
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
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ExploreHeader;
