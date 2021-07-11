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
import { mentorDeleteAppointmentActions } from "../../actions/mentorDeleteAppointmentActions";
import { MENTOR_DELETE_APPOINTMENT_RESET } from "../../constants/mentorDeleteAppointmentConstants";
import { completeCourseForMentorActions } from "../../actions/completeCourseForMentorActions";
import Meta from "../../components/Meta";
import MentorCourseControlLiveScreen from "../MentorCourseControlLiveScreen";
import { useRouteMatch } from "react-router";
const MentorCourseControlScreen = () => {
  const match = useRouteMatch("/mentor/home/course/:id");

  const subscriptionId = match.params.id;

  const [show, setShow] = useState(false);

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

  const mentorDeleteAppointment = useSelector(
    (state) => state.mentorDeleteAppointment
  );
  const {
    loading: loadingDelete,
    error: errorDelete,
    data: dataDelete,
    success: successDelete,
  } = mentorDeleteAppointment;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!success || !successDelete) {
      dispatch({ type: MENTOR_CANCEL_APPOINTMENT_RESET });
      dispatch({ type: MENTOR_DELETE_APPOINTMENT_RESET });
      dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    } else {
      dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    }

    // console.log(Date.now());
  }, [dispatch, subscriptionId, success, successDelete]);

  const handleCancel = (appointmentId) => {
    // console.log(appointmentId);
    if (window.confirm("Are you sure?")) {
      dispatch(mentorCancelAppointmentActions(subscriptionId, appointmentId));
    }
  };
  const handleDelete = (appointmentId) => {
    // console.log(appointmentId);
    if (window.confirm("Are you sure?")) {
      dispatch(mentorDeleteAppointmentActions(subscriptionId, appointmentId));
    }
  };
  const onClickFinishCourse = (e) => {
    e.preventDefault();
    dispatch(completeCourseForMentorActions(subscriptionId));
    window.location.href = "/mentor/home";
  };
  return (
    <>
      <Meta title="Mentor | Course Control"></Meta>

      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>{data && data.courseId && data.courseId.title}</h4>
        <div className="container">
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <>
              <div className="name-plate">
                <div className="guardian-name-plate">
                  <div className="plate-title">
                    <p>Guardian</p>
                  </div>
                  <div className="inner-name-plate">
                    <p>{data && data.guardianId && data.guardianId.fullName}</p>
                  </div>
                  <div className="guardian-plate-phone-number">
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
                        {data && data.guardianId && data.guardianId.countryCode}
                        {data && data.guardianId && data.guardianId.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="hero-name-plate">
                  <div className="plate-title">
                    <p>Hero</p>
                  </div>
                  <div className="inner-name-plate">
                    <p>{data && data.childId && data.childId.fullName}</p>
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
                      <SuccessMessage>{dataCancel.message}</SuccessMessage>
                    ) : null}
                    {data &&
                      data.appointments &&
                      data.appointments.length === 0 && (
                        <SuccessMessage
                          style={{
                            color: "#004085",
                            backgroundColor: "#cce5ff",
                            borderColor: "#b8daff",
                          }}
                        >
                          There is no appointments yet
                        </SuccessMessage>
                      )}
                    {loading && <Loader></Loader>}
                    {data &&
                      data.appointments &&
                      data.appointments.map((appointment) => (
                        <div
                          className="appointment-control-item live-active"
                          key={appointment._id}
                        >
                          <div className="appointment-sub-item appointment-date">
                            <p>
                              {new Date(appointment.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-time">
                            <p>
                              {new Date(appointment.date).toLocaleTimeString(
                                [],
                                {
                                  timeStyle: "short",
                                }
                              )}
                            </p>
                          </div>
                          <div className="appointment-sub-item appointment-title">
                            <p>{appointment.title}</p>
                          </div>

                          {new Date().toISOString().split("T")[0] ===
                          new Date(appointment.date)
                            .toISOString()
                            .split("T")[0] ? (
                            <div className="appointment-sub-item appointment-button">
                              <div className="mentor-control-btn">
                                {appointment.cancel ? (
                                  <>
                                    <div
                                      className="mentor-live-btn"
                                      style={{
                                        display: "flex",
                                        gridGap: "0.5rem",
                                        gap: "0.5rem",
                                      }}
                                    >
                                      <p
                                        style={{
                                          fontWeight: "500",
                                          margin: "0.5rem",
                                        }}
                                      >
                                        Canceled
                                      </p>
                                      <button
                                        onClick={() =>
                                          handleDelete(appointment._id)
                                        }
                                      >
                                        delete
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <button
                                    style={{ backgroundColor: "#C97878" }}
                                    onClick={() =>
                                      handleCancel(appointment._id)
                                    }
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                              <div
                                className="mentor-live-btn"
                                style={
                                  appointment.cancel ? { display: "none" } : {}
                                }
                              >
                           
                                  <button  onClick={() =>
                                  (document.location.href = `/mentor/live/${subscriptionId}/${appointment._id}/${appointment.title}`)
                                }>go live</button>
                          
                              </div>
                            </div>
                          ) : Date.now() > Date.parse(appointment.date) ? (
                            <p>Finished</p>
                          ) : (
                            <p>Coming soon</p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-12">
                  <div className="new-appointment-container ">
                    <h4>New appointment</h4>
                    <div className="new-appointment-form">
                      <MentorAppointmentForm
                        match={match}
                      ></MentorAppointmentForm>
                    </div>
                    <div className="add-new-appointment-button">
                      <button
                        type="submit"
                        style={{
                          border: "none",
                          backgroundColor: "rgb(210 96 96)",
                        }}
                        className="add-new-button"
                        onClick={onClickFinishCourse}
                      >
                        Finish Course
                      </button>
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
