import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmEmailHeader.scss";
const ConfirmEmailHeader = ({ user }) => {
  return (
    <header className="header-signIn-hero">
      <div className="container">
        <nav className="nav-signIn-hero">
          <div className="logo">
            <Link to={`/${user}/email-confirm`}>
              <h1>TO BE</h1>
              <span>HERO</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ConfirmEmailHeader;
