import React, { useEffect } from "react";
import "./GuardianChildSubscriptionCourseScreen.scss";
import GuardianChildSubscriptionHeader from "../../components/GuardianChildSubscriptionHeader";

import { Link } from "react-router-dom";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import ReportProblem from "../../components/ReportProblem/ReportProblem";
import SubscriptionAppointmentsForChild from "../../components/SubscriptionAppointmentsForChild";
import { useDispatch, useSelector } from "react-redux";

const GuardianChildSubscriptionCourseScreen = ({ match }) => {
  const state = useSelector((state) => state.state);

  const dispatch = useDispatch();
  useEffect(() => {}, []);
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
            <div className="appointment-control-item live-active">
              {/* <!-- add className live-active to toggle item border and button --> */}
              <div className="appointment-sub-item appointment-date">
                <p>
                  <span>Wed</span> <span>22 Mar</span>
                </p>
              </div>
              <div className="appointment-sub-item appointment-time">
                <p>03 PM</p>
              </div>
              <div className="appointment-sub-item appointment-title">
                <p>Appointment Title</p>
              </div>
              <div className="appointment-sub-item appointment-button active">
                <div className="guardian-live-btn ">
                  <button>
                    live now <span></span>
                  </button>
                </div>
              </div>
            </div>
            {/* <SubscriptionAppointmentsForChild></SubscriptionAppointmentsForChild> */}
            <ReportProblem></ReportProblem>
            <ReviewBox></ReviewBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuardianChildSubscriptionCourseScreen;
