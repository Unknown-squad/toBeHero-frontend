import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mentorCancelAppointmentActions } from "../../actions/mentorCancelAppointmentActions";
import { mentorGetControlCourseDetailsActions } from "../../actions/mentorGetControlCourseDetailsActions";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader";
import Meta from "../../components/Meta";
import iconLoading from "../../images/icon-loading.svg";
import "./MentorCourseControlLiveScreen.scss";
const MentorCourseControlLiveScreen = ({ match, history }) => {
  const [show, setShow] = useState(false);
  const appointmentId = match.params.appointmentId;
  const subscriptionId = match.params.subscriptionId;
  const appointmentTitle = match.params.appointmentTitle;

  const mentorGetControlCourse = useSelector(
    (state) => state.mentorGetControlCourse
  );
  const { loading, error, data } = mentorGetControlCourse;
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !data ||
      !data.guardianId ||
      !data.guardianId.fullName ||
      (!data && !data.appointments._id !== appointmentId) ||
      (!data && !data._id !== subscriptionId)
    ) {
      dispatch(mentorGetControlCourseDetailsActions(subscriptionId));
    }
  }, [dispatch, subscriptionId, data, appointmentId]);

  const handleCancel = (appointmentId) => {
    // console.log(appointmentId);
    if (window.confirm("Are you sure?")) {
      dispatch(mentorCancelAppointmentActions(subscriptionId, appointmentId));
      history.goBack();
    }
  };
  return (
    <>
      <Meta title="Mentor | Live Share"></Meta>

      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>{appointmentTitle}</h4>
        <div className="container">
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
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="mentor-control-live">
                <div className="load-live">
                  <img src={iconLoading} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="notes-container">
                <div className="notes-form">
                  <form action="">
                    <div className="notes-title">
                      <label htmlFor="Title">Notes</label>
                      <textarea
                        name="Title"
                        id="Title"
                        cols="5"
                        rows="11"
                        placeholder="write your notes here …..."
                      ></textarea>
                    </div>
                    <div className="button-send-notes">
                      <input
                        type="submit"
                        value="send notes"
                        className="notes-button"
                      />
                    </div>
                  </form>
                </div>
                <div className="start-cancel-session">
                  <button className="btn btn-purple-400 btn-start">
                    Start Live session <span></span>
                  </button>

                  <button
                    className="btn btn-cancel"
                    onClick={() => handleCancel(appointmentId)}
                  >
                    cancel appointement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorCourseControlLiveScreen;
