import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import cardHero from "../../images/card-hero.png";
import uploadPicture from "../../images/upload-picture.svg";
import { Link } from "react-router-dom";
import SuccessMessage from "../SuccessMessage";
import { useHistory } from "react-router";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_SERVER_DOMAIN}`);

const HeroClassroomSubscriptionCard = ({ course, subscriptionId }) => {
  let history = useHistory();
  const [active, setActive] = useState(false);

  useEffect(() => {
    // console.log(subscriptionId);

    socket.on(`child-in${subscriptionId}`, (data) => {
      setActive(true);
    });
  }, [subscriptionId]);

  return (
    <div className="hero-card">
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>{course && course.courseId && course.courseId.title}</h4>
          </div>
          {course && course.appointments && course.appointments.length > 0 ? (
            <>
              {" "}
              {course &&
                course.appointments &&
                course.appointments.map((appointment, i) => (
                  <React.Fragment key={i}>
                    {(new Date().toLocaleDateString() ===
                      new Date(appointment.date).toLocaleDateString() &&
                      active) ||
                    appointment.active ? (
                      <>
                        <div className="appointment-control-item live-active">
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

                          <div className="appointment-sub-item appointment-button active">
                            {/* <Link
                              to={`/hero/live/${course._id}/${appointment._id}/${appointment.title}`}
                            > */}
                            <div className="guardian-live-btn active">
                              <button
                                onClick={() =>
                                  (document.location.href = `/hero/live/${course._id}/${appointment._id}/${appointment.title}`)
                                }
                              >
                                Join live <span></span>
                              </button>
                            </div>
                            {/* </Link> */}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="appointment-control-item">
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
                          {/* 
                          <div className="appointment-sub-item appointment-button active">
                            <Link
                              to={`/hero/live/${course._id}/${appointment._id}/${appointment.title}`}
                            >
                              <div className="guardian-live-btn active ">
                                <button>
                                  Join live <span></span>
                                </button>
                              </div>
                            </Link>
                          </div> */}
                        </div>
                      </>
                    )}
                  </React.Fragment>
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
  );
};

export default HeroClassroomSubscriptionCard;
