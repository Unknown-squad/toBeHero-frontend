import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsForChildHomeActions } from "../../actions/getSubscriptionsForChildHomeActions";
import cardHero from "../../images/card-hero.png";
import uploadPicture from "../../images/upload-picture.svg";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import Loader from "../Loader";
import { Link } from "react-router-dom";
const HeroClassroom = ({ match }) => {
  const getSubscriptionsForChildHome = useSelector(
    (state) => state.getSubscriptionsForChildHome
  );
  const { loading, error, data } = getSubscriptionsForChildHome;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionsForChildHomeActions());
  }, [dispatch]);
  //   console.log(data.items.appointments);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div className="container">
          {data &&
            data.items &&
            data.items.map((course) => (
              <div className="hero-card" key={course && course._id}>
                <img
                  src={course && course.courseId && course.courseId.picture}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = cardHero;
                  }}
                />
                <div className="appointment-hero-mentor">
                  <div className="hero-appointment-control-container flex-column">
                    <h4>
                      {course && course.courseId && course.courseId.title}
                    </h4>
                    {course &&
                    course.appointments &&
                    course.appointments.length > 0 ? (
                      <>
                        {" "}
                        {course &&
                          course.appointments &&
                          course.appointments.map((appointment, i) => (
                            <div
                              className="appointment-control-item live-active"
                              key={i}
                            >
                              {/* <!-- add className live-active to toggle item border and button --> */}
                              <div className="appointment-sub-item appointment-date">
                                <p>
                                  <span>
                                    {new Date(
                                      appointment && appointment.date
                                    ).toLocaleDateString()}
                                  </span>
                                </p>
                              </div>
                              <div className="appointment-sub-item appointment-time">
                                <p>
                                  {new Date(
                                    appointment && appointment.date
                                  ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                              <div className="appointment-sub-item appointment-title">
                                <p>{appointment && appointment.title}</p>
                              </div>
                              {Date.now() >
                              Date.parse(appointment.date) ? null : (
                                <div className="appointment-sub-item appointment-button active">
                                  <Link
                                    to={`/hero/live/${course._id}/${appointment._id}/${appointment.title}`}
                                  >
                                    <div className="guardian-live-btn ">
                                      <button>
                                        Join live <span></span>
                                      </button>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                      </>
                    ) : (
                      <div className="appointment-control-item">
                        <SuccessMessage
                          style={{
                            color: "#004085",
                            backgroundColor: "#cce5ff",
                            borderColor: "#b8daff",
                            width: "80%",
                            padding: "-0.25rem 1.25rem",
                            border: "1px solid transparent",
                            borderRadius: "0.25rem",
                            width: "100%",
                          }}
                        >
                          No appointments yet
                        </SuccessMessage>
                      </div>
                    )}
                  </div>
                  <div className="mentor-img">
                    <div className="title-img">
                      by {course.mentorId.gender}.{" "}
                      {course.mentorId.fullName.split(" ")[0]}{" "}
                      {course.mentorId &&
                        course.mentorId.fullName &&
                        course.mentorId.fullName.split(" ") &&
                        course.mentorId.fullName.split(" ")[1][0]}
                    </div>
                    <img
                      src={uploadPicture}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.icons8.com/ultraviolet/40/000000/user.png";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default HeroClassroom;
