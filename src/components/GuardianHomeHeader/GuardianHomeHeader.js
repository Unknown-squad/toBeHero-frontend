import React from "react";
import { Link, NavLink } from "react-router-dom";
import useToggleNavbar from "../../hooks";
import LogoutButton from "../../components/LogoutButton";
import "./GuardianHomeHeader.scss";
const GuardianHomeHeader = () => {
  const [showMobileMenu, onClick] = useToggleNavbar();
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/guardian/home">
              <h1>TO BE</h1>
              <span>HERO</span>
            </Link>
          </div>
          <div className="navbar-ham">
            <button className="hamburger" id="hamburger" onClick={onClick}>
              <i className="fas fa-bars"></i>
            </button>
            {showMobileMenu ? (
              <ul className="navbar nav-guardian show" id="navbar">
                <li className="active">
                  <NavLink
                    to="/guardian/home"
                    exact
                    activeStyle={{ fontWeight: "bold" }}
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/guardian/explore"
                    activeStyle={{ fontWeight: "bold" }}
                    exact
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/guardian/settings"
                    activeStyle={{ fontWeight: "bold" }}
                    exact
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar nav-guardian" id="navbar">
                <li className="active">
                  <NavLink
                    to="/guardian/home"
                    activeStyle={{ fontWeight: "bold" }}
                    exact
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/explore"
                    activeStyle={{ fontWeight: "bold" }}
                    exact
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guardian/settings"
                    activeStyle={{ fontWeight: "bold" }}
                    exact
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="active">
                  <LogoutButton user="guardian" />
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GuardianHomeHeader;
