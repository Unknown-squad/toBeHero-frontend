import React from "react";
import { Link, Route } from "react-router-dom";

const GuardianChildSubscriptionHeader = ({ match }) => {
  const childId = match.params.childId;
  const courseId = match.params.courseId;

  return (
    <header className="header-signIn-hero">
      <Route path={`/guardian/home/child/${childId}`} className="arrow">
        {" "}
        <img src="images/arrow-back.svg" alt="" />
      </Route>
      <div className="container">
        <nav className="nav-signIn-hero">
          <div className="logo ">
            <Route
              path={`/guardian/home/child/${childId}/course-subscription/${courseId}`}
            >
              {" "}
              <h1>TO BE</h1>
            </Route>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GuardianChildSubscriptionHeader;
