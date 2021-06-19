import React, { useEffect } from "react";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader/MentorControlCourseHeader";
import "./MentorCourseControlScreen.scss";
import { Link } from "react-router-dom";
import MentorAppointmentForm from "../../components/MentorAppointmentForm";
import { useSelector, useDispatch } from "react-redux";
import { mentorGetControlCourseDetailsActions } from "../../actions/mentorGetControlCourseDetailsActions";
const MentorCourseControlScreen = ({ match }) => {
  const subscriptionId = match.params.id;
  const mentorGetControlCourse = useSelector(
    (state) => state.mentorGetControlCourse
  );
  const { loading, error, data } = mentorGetControlCourse;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    console.log(data);
  }, [dispatch, subscriptionId]);

  return (
    <>
      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>{data.courseId && data.courseId.title}</h4>
        <div className="container">
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
                {data.appontments &&
                  data.appontments.map((appointement) => (
                    <>
                      <div className="appointment-control-item live-active">
                        <div className="appointment-sub-item appointment-date">
                          <p>
                            {new Date(appointement.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="appointment-sub-item appointment-time">
                          <p>
                            {new Date(appointement.date).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="appointment-sub-item appointment-title">
                          <p>{appointement.title}</p>
                        </div>
                        <div className="appointment-sub-item appointment-button">
                          <div className="mentor-control-btn">
                            <button style={{ backgroundColor: "#C97878" }}>
                              Cancel
                            </button>
                          </div>
                          <div className="mentor-live-btn">
                            <Link to="/mentor/live">
                              <button>go live</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
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
        </div>
      </section>
    </>
  );
};

export default MentorCourseControlScreen;
