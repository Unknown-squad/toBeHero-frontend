import React, { useEffect } from "react";
import "./GuardianChildSubscriptionCourseScreen.scss";
import GuardianChildSubscriptionHeader from "../../components/GuardianChildSubscriptionHeader";

import { Link } from "react-router-dom";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import ReportProblem from "../../components/ReportProblem/ReportProblem";
import SubscriptionAppointmentsForChild from "../../components/SubscriptionAppointmentsForChild";
import { useDispatch, useSelector } from "react-redux";
import { getChildSubscriptionCourseDetailsActions } from "../../actions/getChildSubscriptionCourseDetailsActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
const GuardianChildSubscriptionCourseScreen = ({ match }) => {
  const childId = match.params.childId;
  const courseId = match.params.courseId;

  const getChildSubscriptionCourseDetails = useSelector(
    (state) => state.getChildSubscriptionCourseDetails
  );
  const { loading, error, data } = getChildSubscriptionCourseDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChildSubscriptionCourseDetailsActions({ childId, courseId }));
  }, [dispatch, childId, courseId]);
  console.log(data);
  return (
    <>
      <GuardianChildSubscriptionHeader
        match={match}
      ></GuardianChildSubscriptionHeader>
      <section className="hr-section-24">
        <h4>{data && data.course && data.course.title}</h4>
        <div className="container">
          <div className="name-plate">
            <div className="mentor-name-plate">
              <div className="plate-title">
                <p>Mentor</p>
              </div>
              <div className="inner-name-plate">
                <p>{data && data.mentor && data.mentor.fullName}</p>
              </div>
              <div className="mentor-plate-phone-number">
                <Link to="">
                  {/* <p>Click to view phone number</p> */}
                  <p>
                    {data && data.mentor && data.mentor.countryCode}{" "}
                    {data && data.mentor && data.mentor.phone}
                  </p>
                </Link>
              </div>
            </div>
            <div className="hero-name-plate">
              <div className="plate-title">
                <p>Hero</p>
              </div>
              <div className="inner-name-plate">
                <p>{data && data.child && data.child.fullName}</p>
              </div>
            </div>
          </div>

          <div className="guardian-appointment-control-container flex-column">
            <h4>Appointments</h4>
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : (
              <>
                {data &&
                  data.appointments &&
                  data.appointments.map((appointment) => (
                    <div
                      className={`appointment-control-item ${
                        Date.now() > Date.parse(appointment.date)
                          ? ""
                          : "live-active"
                      }`}
                      key={appointment._id}
                    >
                      {/* <!-- add className live-active to toggle item border and button --> */}
                      <div className="appointment-sub-item appointment-date">
                        <p>
                          <span>
                            {new Date(appointment.date).toLocaleDateString()}
                          </span>
                          {/* <span>22 Mar</span> */}
                        </p>
                      </div>
                      <div className="appointment-sub-item appointment-time">
                        <p>
                          {new Date(appointment.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <div className="appointment-sub-item appointment-title">
                        <p>{appointment.title}</p>
                      </div>
                      {Date.now() > Date.parse(appointment.date) ? (
                        <p>Finished</p>
                      ) : (
                        <div className="appointment-sub-item appointment-button active">
                          <div className="guardian-live-btn ">
                            <button>
                              live now <span></span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </>
            )}

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
