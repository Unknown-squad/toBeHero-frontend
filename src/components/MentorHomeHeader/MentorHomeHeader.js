import React from "react";
import { Link, NavLink } from "react-router-dom";
import useToggleNavbar from "../../hooks";
import LogoutButton from "../../components/LogoutButton";

// import "./MentorHomeHeader.scss";
const MentorHomeHeader = () => {
  const [showMobileMenu, onClick] = useToggleNavbar();

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/mentor/home">
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
              <ul className="navbar nav-mentor show" id="navbar">
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/home"
                    exact
                  >
                    home
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/dashboard/basicinfo"
                    exact
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/explore"
                    exact
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="active">
                  <LogoutButton user="mentor" />
                </li>
              </ul>
            ) : (
              <ul className="navbar nav-mentor" id="navbar">
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/home"
                    exact
                  >
                    home
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/dashboard/basicinfo"
                    exact
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="active">
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    to="/mentor/explore"
                    exact
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="active">
                  <LogoutButton user="mentor" />
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MentorHomeHeader;
