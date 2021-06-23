import React from "react";
import { Link, Route } from "react-router-dom";
import arrowBack from "../../images/arrow-back.svg";
const GuardianChildSubscriptionHeader = ({ match }) => {
  const childId = match.params.childId;
  const courseId = match.params.courseId;

  return (
    <header className="header-signIn-hero">
      <Link to={`/guardian/home/child/${childId}`} className="arrow">
        {" "}
        <img src={arrowBack} alt="" />
      </Link>
      <div className="container">
        <nav className="nav-signIn-hero">
          <div className="logo ">
            <Link
              to={`/guardian/home/child/${childId}/course-subscription/${courseId}`}
            >
              {" "}
              <h1>TO BE</h1>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GuardianChildSubscriptionHeader;
