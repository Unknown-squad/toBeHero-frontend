import React, { useEffect, useState } from "react";
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
import { ADD_NEW_REVIEW_RESET } from "../../constants/addNewReviewConstants";
import SuccessMessage from "../../components/SuccessMessage";
import Meta from "../../components/Meta";
const GuardianChildSubscriptionCourseScreen = ({ match }) => {
  const childId = match.params.childId;
  const courseId = match.params.courseId;
  const [show, setShow] = useState(false);

  const getChildSubscriptionCourseDetails = useSelector(
    (state) => state.getChildSubscriptionCourseDetails
  );
  const { loading, error, data } = getChildSubscriptionCourseDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ADD_NEW_REVIEW_RESET });
    dispatch(getChildSubscriptionCourseDetailsActions({ childId, courseId }));
  }, [dispatch, childId, courseId]);
  console.log(data);
  return (
    <>
      <Meta title="Guardian | Child Subscribtion Course"></Meta>
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
                <p
                  onClick={() => setShow(!show)}
                  style={show ? { display: "none" } : { cursor: "pointer" }}
                >
                  Click to view phone number
                </p>
                {show && (
                  <p
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    {data && data.mentor && data.mentor.countryCode}
                    {data && data.mentor && data.mentor.phone}
                  </p>
                )}
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
                {data && data.appointments && data.appointments.length === 0 ? (
                  <SuccessMessage
                    style={{
                      color: "#004085",
                      backgroundColor: "#cce5ff",
                      borderColor: "#b8daff",
                      width: "80%",
                    }}
                  >
                    There is no appointments yet.
                  </SuccessMessage>
                ) : (
                  <>
                    {data &&
                      data.appointments &&
                      data.appointments.map((appointment) => (
                        <div
                          className={`appointment-control-item ${
                            new Date().toLocaleDateString() ===
                            new Date(appointment.date).toLocaleDateString()
                              ? "live-active"
                              : ""
                          }`}
                          key={appointment._id}
                        >
                          {/* <!-- add className live-active to toggle item border and button --> */}
                          <div className="appointment-sub-item appointment-date">
                            <p>
                              <span>
                                {new Date(
                                  appointment.date
                                ).toLocaleDateString()}
                              </span>
                              {/* <span>22 Mar</span> */}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-time">
                            <p>
                              {new Date(appointment.date).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-title">
                            <p>{appointment.title}</p>
                          </div>
                          {new Date().toLocaleDateString() ===
                          new Date(appointment.date).toLocaleDateString() ? (
                            <div className="appointment-sub-item appointment-button active">
                              <div className="guardian-live-btn ">
                                <button>
                                  live now <span></span>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="appointment-sub-item appointment-button active">
                              <div className="guardian-live-btn ">
                                <button disabled>
                                  Coming Soon <span></span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </>
                )}
              </>
            )}

            {/* <SubscriptionAppointmentsForChild></SubscriptionAppointmentsForChild> */}
            <ReportProblem></ReportProblem>
            <ReviewBox
              courseId={data && data.course && data.course._id}
            ></ReviewBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuardianChildSubscriptionCourseScreen;
