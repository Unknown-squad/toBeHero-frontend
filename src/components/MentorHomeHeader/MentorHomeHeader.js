import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useToggleNavbar from "../../hooks";
const MentorHomeHeader = () => {
  const [showMobileMenu, onClick] = useToggleNavbar();
  const [clicked, setClicked] = useState(false);
  const onClickHandle = () => {
    setClicked(true);
  };
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
              <ul className="navbar nav-mentor show" id="navbar">
                <li
                  className={`${clicked ? "active" : ""}`}
                  onClick={onClickHandle}
                >
                  {/* <NavLink exact={true} activeclassName='is-active' to='/'>Home</NavLink>
        <NavLink activeclassName='is-active' to='/about'>About</NavLink> */}
                  <Link to="/mentor/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar nav-mentor" id="navbar">
                <li
                  //   className={`${clicked ? "active" : ""}`}
                  //   onClick={onClickHandle}
                  className="active"
                >
                  <NavLink activeClassName="active" to="/mentor/home">
                    home
                  </NavLink>
                </li>
                <li
                  //   className={`${clicked ? "" : "active"}`}
                  //   onClick={onClickHandle}
                  className="active"
                >
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
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
