import React from "react";
import "./GuardianChildSubscriptionCourseScreen.scss";

const GuardianChildSubscriptionCourseScreen = () => {
  return (
    <>
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
                <a to="">
                  <p>Click to view phone number</p>
                </a>
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

            <div className="appointment-control-item">
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
              {/* <!-- add className active to show button (appointment-sub-item appointment-button) --> */}
              <div className="appointment-sub-item appointment-button">
                <div className="guardian-live-btn">
                  <button>
                    live now <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="appointment-control-item">
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
              <div className="appointment-sub-item appointment-button">
                <div className="guardian-live-btn">
                  <button>
                    live now <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="appointment-control-item">
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
              <div className="appointment-sub-item appointment-button">
                <div className="guardian-live-btn">
                  <button>
                    live now <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="appointment-control-item">
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
              <div className="appointment-sub-item appointment-button">
                <div className="guardian-live-btn">
                  <button>
                    live now <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="report">
              <button className="btn report-problem">Report a problem</button>
            </div>
            <div className="rating-box">
              <form action="" className="rating-write-reviwe">
                <div className="form-rating-reviwe">
                  <div className="input-field write-reviwe">
                    <label for="write-reviwe">Write Reviwe</label>
                    <br />
                    <textarea
                      name=""
                      id="write-reviwe"
                      cols="70"
                      rows="7"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="input-field">
                    <p>Rating</p>
                    <div className="rating">
                      <input
                        type="radio"
                        id="rat5"
                        name="radio-group"
                        checked
                      />
                      <label for="rat5">
                        5 <img src="images/star-rating.svg" alt="" />
                      </label>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        id="rat4"
                        name="radio-group"
                        checked
                      />
                      <label for="rat4">
                        4 <img src="images/star-rating.svg" alt="" />
                      </label>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        id="rat3"
                        name="radio-group"
                        checked
                      />
                      <label for="rat3">
                        3 <img src="images/star-rating.svg" alt="" />
                      </label>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        id="rat2"
                        name="radio-group"
                        checked
                      />
                      <label for="rat2">
                        2 <img src="images/star-rating.svg" alt="" />
                      </label>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        id="rat1"
                        name="radio-group"
                        checked
                      />
                      <label for="rat1" className="rat-1">
                        1 <img src="images/star-rating.svg" alt="" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <button className="btn btn-purple-400">Write Reviwe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuardianChildSubscriptionCourseScreen;
