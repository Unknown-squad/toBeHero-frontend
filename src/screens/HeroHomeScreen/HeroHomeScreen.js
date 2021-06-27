import React from "react";

const HeroHomeScreen = () => {
  return (
    <section class="hr-section-27">
      <h4>Classroom</h4>
      <div class="container">
        <div class="hero-card">
          <img src="images/card-hero.png" alt="" />
          <div class="appointment-hero-mentor">
            <div class="hero-appointment-control-container flex-column">
              <h4>Lorem ipsum dolor sit amet, consetetur</h4>
              <div class="appointment-control-item live-active">
                {/* <!-- add class live-active to toggle item border and button --> */}
                <div class="appointment-sub-item appointment-date">
                  <p>
                    <span>Wed</span> <span>22 Mar</span>
                  </p>
                </div>
                <div class="appointment-sub-item appointment-time">
                  <p>03 PM</p>
                </div>
                <div class="appointment-sub-item appointment-title">
                  <p>Appointment Title</p>
                </div>
                <div class="appointment-sub-item appointment-button active">
                  <div class="guardian-live-btn ">
                    <button>
                      Join live <span></span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="appointment-control-item">
                {/* <!-- add class live-active to toggle item border and button --> */}
                <div class="appointment-sub-item appointment-date">
                  <p>
                    <span>Wed</span> <span>22 Mar</span>
                  </p>
                </div>
                <div class="appointment-sub-item appointment-time">
                  <p>03 PM</p>
                </div>
                <div class="appointment-sub-item appointment-title">
                  <p>Appointment Title</p>
                </div>
                {/* <!-- add class active to show button (appointment-sub-item appointment-button) --> */}
                <div class="appointment-sub-item appointment-button">
                  <div class="guardian-live-btn">
                    <button>
                      live now <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="appointment-control-item">
                {/* <!-- add class live-active to toggle item border and button --> */}
                <div class="appointment-sub-item appointment-date">
                  <p>
                    <span>Wed</span> <span>22 Mar</span>
                  </p>
                </div>
                <div class="appointment-sub-item appointment-time">
                  <p>03 PM</p>
                </div>
                <div class="appointment-sub-item appointment-title">
                  <p>Appointment Title</p>
                </div>
                <div class="appointment-sub-item appointment-button">
                  <div class="guardian-live-btn">
                    <button>
                      live now <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mentor-img">
              <div class="title-img">by mr. mentor x</div>
              <img src="images/upload-picture.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="hero-card">
          <img src="images/card-hero.png" alt="" />
          <div class="appointment-hero-mentor">
            <div class="hero-appointment-control-container flex-column">
              <h4>Lorem ipsum dolor sit amet, consetetur</h4>

              <div class="appointment-control-item">
                {/* <!-- add class live-active to toggle item border and button --> */}
                <div class="appointment-sub-item appointment-date">
                  <p>
                    <span>Wed</span> <span>22 Mar</span>
                  </p>
                </div>
                <div class="appointment-sub-item appointment-time">
                  <p>03 PM</p>
                </div>
                <div class="appointment-sub-item appointment-title">
                  <p>Appointment Title</p>
                </div>
                {/* <!-- add class active to show button (appointment-sub-item appointment-button) --> */}
                <div class="appointment-sub-item appointment-button">
                  <div class="guardian-live-btn">
                    <button>
                      live now <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="appointment-control-item">
                {/* <!-- add class live-active to toggle item border and button --> */}
                <div class="appointment-sub-item appointment-date">
                  <p>
                    <span>Wed</span> <span>22 Mar</span>
                  </p>
                </div>
                <div class="appointment-sub-item appointment-time">
                  <p>03 PM</p>
                </div>
                <div class="appointment-sub-item appointment-title">
                  <p>Appointment Title</p>
                </div>
                <div class="appointment-sub-item appointment-button">
                  <div class="guardian-live-btn">
                    <button>
                      live now <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mentor-img">
              <div class="title-img">by mr. mentor x</div>
              <img src="images/upload-picture.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeScreen;
