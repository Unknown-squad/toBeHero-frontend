import React, { useEffect, useState } from "react";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader/MentorControlCourseHeader";
import "./MentorCourseControlScreen.scss";
import { Link } from "react-router-dom";
import MentorAppointmentForm from "../../components/MentorAppointmentForm";
import { useSelector, useDispatch } from "react-redux";
import { mentorGetControlCourseDetailsActions } from "../../actions/mentorGetControlCourseDetailsActions";
import { mentorCancelAppointmentActions } from "../../actions/mentorCancelAppointmentActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage";
import { MENTOR_CANCEL_APPOINTMENT_RESET } from "../../constants/mentorCancelAppointmentConstants";

const MentorCourseControlScreen = ({ match }) => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const subscriptionId = match.params.id;
  const mentorGetControlCourse = useSelector(
    (state) => state.mentorGetControlCourse
  );
  const { loading, error, data } = mentorGetControlCourse;

  const mentorCancelAppointment = useSelector(
    (state) => state.mentorCancelAppointment
  );
  const {
    loading: loadingCancel,
    error: errorCancel,
    data: dataCancel,
    success,
  } = mentorCancelAppointment;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: MENTOR_CANCEL_APPOINTMENT_RESET });
    dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    // console.log(Date.now());
  }, [dispatch, subscriptionId]);

  const handleCancel = (appointmentId) => {
    // console.log(appointmentId);
    dispatch(mentorCancelAppointmentActions(subscriptionId, appointmentId));
  };
  return (
    <>
      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>{data.courseId && data.courseId.title}</h4>
        <div className="container">
          {loading ? (
            <Loader></Loader>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <>
              <div className="name-plate">
                <div className="guardian-name-plate">
                  <div className="plate-title">
                    <p>Guardian</p>
                  </div>
                  <div className="inner-name-plate">
                    <p>{data.guardianId && data.guardianId.fullName}</p>
                  </div>
                  <div className="guardian-plate-phone-number">
                    <Link to="">
                      {/* <p>Click to view phone number</p> */}
                      <p>
                        {data.guardianId && data.guardianId.countryCode}{" "}
                        {data.guardianId && data.guardianId.phone}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="hero-name-plate">
                  <div className="plate-title">
                    <p>Hero</p>
                  </div>
                  <div className="inner-name-plate">
                    <p>{data.childId && data.childId.fullName}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-12">
                  <div className="mentor-appointment-control-container flex-column">
                    <h4>Appointments</h4>
                    {errorCancel ? (
                      <ErrorMessage>{errorCancel}</ErrorMessage>
                    ) : success ? (
                      <SuccessMessage>{dataCancel}</SuccessMessage>
                    ) : (
                      ""
                    )}
                    {data.appontments &&
                      data.appontments.map((appointement) => (
                        <div
                          className="appointment-control-item live-active"
                          key={appointement._id}
                        >
                          <div className="appointment-sub-item appointment-date">
                            <p>
                              {new Date(appointement.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-time">
                            <p>
                              {new Date(appointement.date).toLocaleTimeString(
                                [],
                                {
                                  timeStyle: "short",
                                }
                              )}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-title">
                            <p>{appointement.title}</p>
                          </div>
                          {Date.now() > Date.parse(appointement.date) ? (
                            ""
                          ) : (
                            <div className="appointment-sub-item appointment-button">
                              <div className="mentor-control-btn">
                                <button
                                  style={{ backgroundColor: "#C97878" }}
                                  onClick={(_id) =>
                                    handleCancel(appointement._id)
                                  }
                                >
                                  Cancel
                                </button>
                              </div>
                              <div className="mentor-live-btn">
                                <Link to="/mentor/live">
                                  <button>go live</button>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-12">
                  <div className="new-appointment-container ">
                    <h4>New appointment</h4>
                    <div className="new-appointment-form">
                      <MentorAppointmentForm></MentorAppointmentForm>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MentorCourseControlScreen;
