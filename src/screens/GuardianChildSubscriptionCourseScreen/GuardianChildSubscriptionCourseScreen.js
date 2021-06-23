import React from "react";
import "./GuardianChildSubscriptionCourseScreen.scss";
import GuardianChildSubscriptionHeader from "../../components/GuardianChildSubscriptionHeader";

import { Link } from "react-router-dom";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import ReportProblem from "../../components/ReportProblem/ReportProblem";
import SubscriptionAppointmentsForChild from "../../components/SubscriptionAppointmentsForChild";

const GuardianChildSubscriptionCourseScreen = ({ match }) => {
  return (
    <>
      <GuardianChildSubscriptionHeader
        match={match}
      ></GuardianChildSubscriptionHeader>
      <section className="hr-section-24">
        <h4>Lorem ipsum dolor sit amet, consetetur</h4>
        <div className="container">
          <div className="name-plate">
            <div className="mentor-name-plate">
              <div className="plate-title">
                <p>Mentor</p>
              </div>
              <div className="inner-name-plate">
                <p>Islam gohar</p>
              </div>
              <div className="mentor-plate-phone-number">
                <Link to="">
                  <p>Click to view phone number</p>
                </Link>
              </div>
            </div>
            <div className="hero-name-plate">
              <div className="plate-title">
                <p>Hero</p>
              </div>
              <div className="inner-name-plate">
                <p>Youssef Gohar</p>
              </div>
            </div>
          </div>

          <div className="guardian-appointment-control-container flex-column">
            <h4>Appointments</h4>
            <SubscriptionAppointmentsForChild></SubscriptionAppointmentsForChild>
            <ReportProblem></ReportProblem>
            <ReviewBox></ReviewBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuardianChildSubscriptionCourseScreen;
