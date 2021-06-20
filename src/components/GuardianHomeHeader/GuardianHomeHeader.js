import React from "react";
import { Link, NavLink } from "react-router-dom";
import useToggleNavbar from "../../hooks";
import LogoutButton from "../../components/LogoutButton";

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
                    activeStyle={{ borderBottom: "1px solid #343090" }}
                    to="/guardian/home"
                    exact
                  >
                    home
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ borderBottom: "1px solid #343090" }}
                    to="/guardian/explore"
                    exact
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ borderBottom: "1px solid #343090" }}
                    to="/guardian/settings"
                    exact
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="active">
                  <LogoutButton user="guardian" />
                </li>
              </ul>
            ) : (
              <ul className="navbar nav-guardian" id="navbar">
                <li className="active">
                  <NavLink
                    to="/guardian/home"
                    activeStyle={{ borderBottom: "1px solid #343090" }}
                    exact
                  >
                    home
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    to="/guardian/explore"
                    activeStyle={{ borderBottom: "1px solid #343090" }}
                    exact
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    to="/guardian/settings"
                    activeStyle={{ borderBottom: "1px solid #343090" }}
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
