import React from "react";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader/MentorControlCourseHeader";
import "./MentorCourseControlScreen.scss";
import { Link } from "react-router-dom";
import MentorAppointmentForm from "../../components/MentorAppointmentForm";
const MentorCourseControlScreen = () => {
  return (
    <>
      <MentorControlCourseHeader></MentorControlCourseHeader>
      <section className="hr-section-22">
        <h4>Lorem ipsum dolor sit amet, consetetur</h4>
        <div className="container">
          <div className="name-plate">
            <div className="guardian-name-plate">
              <div className="plate-title">
                <p>Guardian</p>
              </div>
              <div className="inner-name-plate">
                <p>Islam gohar</p>
              </div>
              <div className="guardian-plate-phone-number">
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
          <div className="row">
            <div className="col-xl-8 col-lg-9 col-12">
              <div className="mentor-appointment-control-container flex-column">
                <h4>Appointments</h4>
                <div className="appointment-control-item live-active">
                  <div className="appointment-sub-item appointment-date">
                    <p>Wed 22 Mar</p>
                  </div>
                  <div className="appointment-sub-item appointment-time">
                    <p>03 PM</p>
                  </div>
                  <div className="appointment-sub-item appointment-title">
                    <p>Appointment Title</p>
                  </div>
                  <div className="appointment-sub-item appointment-button">
                    <div className="mentor-control-btn">
                      <button>Control</button>
                    </div>
                    <div className="mentor-live-btn">
                      <button>go live</button>
                    </div>
                  </div>
                </div>

                <div className="appointment-control-item">
                  <div className="appointment-sub-item appointment-date">
                    <p>Wed 22 Mar</p>
                  </div>
                  <div className="appointment-sub-item appointment-time">
                    <p>03 PM</p>
                  </div>
                  <div className="appointment-sub-item appointment-title">
                    <p>Appointment Title</p>
                  </div>
                  <div className="appointment-sub-item appointment-button">
                    <div className="mentor-control-btn">
                      <button>Control</button>
                    </div>
                    <div className="mentor-live-btn">
                      <button>go live</button>
                    </div>
                  </div>
                </div>
                <div className="appointment-control-item">
                  <div className="appointment-sub-item appointment-date">
                    <p>Wed 22 Mar</p>
                  </div>
                  <div className="appointment-sub-item appointment-time">
                    <p>03 PM</p>
                  </div>
                  <div className="appointment-sub-item appointment-title">
                    <p>Appointment Title</p>
                  </div>
                  <div className="appointment-sub-item appointment-button">
                    <div className="mentor-control-btn">
                      <button>Control</button>
                    </div>
                    <div className="mentor-live-btn">
                      <button>go live</button>
                    </div>
                  </div>
                </div>
                <div className="appointment-control-item">
                  <div className="appointment-sub-item appointment-date">
                    <p>Wed 22 Mar</p>
                  </div>
                  <div className="appointment-sub-item appointment-time">
                    <p>03 PM</p>
                  </div>
                  <div className="appointment-sub-item appointment-title">
                    <p>Appointment Title</p>
                  </div>
                  <div className="appointment-sub-item appointment-button">
                    <div className="mentor-control-btn">
                      <button>Control</button>
                    </div>
                    <div className="mentor-live-btn">
                      <button>go live</button>
                    </div>
                  </div>
                </div>
                <div className="appointment-control-item">
                  <div className="appointment-sub-item appointment-date">
                    <p>Wed 22 Mar</p>
                  </div>
                  <div className="appointment-sub-item appointment-time">
                    <p>03 PM</p>
                  </div>
                  <div className="appointment-sub-item appointment-title">
                    <p>Appointment Title</p>
                  </div>
                  <div className="appointment-sub-item appointment-button">
                    <div className="mentor-control-btn">
                      <button>Control</button>
                    </div>
                    <div className="mentor-live-btn">
                      <button>go live</button>
                    </div>
                  </div>
                </div>
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
