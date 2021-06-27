import React from "react";
import "./HeroHomeScreen.scss";
import HeroHomeHeader from "../../components/HeroHomeHeader";
const HeroHomeScreen = () => {
  return (
    <>
      <HeroHomeHeader></HeroHomeHeader>
      <section className="hr-section-27">
        <h4>Classroom</h4>
        <div className="container">
          <div className="hero-card">
            <img src="images/card-hero.png" alt="" />
            <div className="appointment-hero-mentor">
              <div className="hero-appointment-control-container flex-column">
                <h4>Lorem ipsum dolor sit amet, consetetur</h4>
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
                        Join live <span></span>
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
              </div>
              <div className="mentor-img">
                <div className="title-img">by mr. mentor x</div>
                <img src="images/upload-picture.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="hero-card">
            <img src="images/card-hero.png" alt="" />
            <div className="appointment-hero-mentor">
              <div className="hero-appointment-control-container flex-column">
                <h4>Lorem ipsum dolor sit amet, consetetur</h4>

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
              </div>
              <div className="mentor-img">
                <div className="title-img">by mr. mentor x</div>
                <img src="images/upload-picture.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeScreen;
