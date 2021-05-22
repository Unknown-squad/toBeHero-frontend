import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../images/arrow-back.svg";
import "./MentorControlCourseHeader.scss";
const MentorControlCourseHeader = () => {
  return (
    <header className="flex-row just-cont-cntr">
      <Link to="/mentor/home" className="arrow">
        <img src={arrowBack} alt=""></img>
      </Link>
      <div className="container">
        <nav>
          <div className="logo ">
            <Link to="/mentor/home">
              {" "}
              <h1>TO BE</h1>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MentorControlCourseHeader;
