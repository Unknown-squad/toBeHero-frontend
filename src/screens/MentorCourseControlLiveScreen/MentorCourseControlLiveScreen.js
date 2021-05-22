import React from "react";
import { Link } from "react-router-dom";
import MentorControlCourseHeader from "../../components/MentorControlCourseHeader";
import iconLoading from "../../images/icon-loading.svg";
import "./MentorCourseControlLiveScreen.scss";
const MentorCourseControlLiveScreen = () => {
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
                <p>Click to view phone number</p>
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

                  <button className="btn btn-cancel">
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
