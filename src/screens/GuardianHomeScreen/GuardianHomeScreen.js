import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./GuardianHomeScreen.scss";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import GuardianAddHeroForm from "../../components/GuardianAddHeroForm";
import someOne from "../../images/someone.svg";
import addSomeOne from "../../images/add-someone.svg";
import courseImgPlaceHolder from "../../images/course-img-placeholder.svg";
import someOneChild from "../../images/someone-child.svg";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";

const GuardianHomeScreen = () => {
  // const childId = match.params.id;

  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>

      <section className="hr-section-23">
        <div className="container">
          <h3>Reviews</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <div className="basic-info-child">
              <GuardianAddHeroForm></GuardianAddHeroForm>

              <h4>enrolled courses</h4>
              <div className="row">
                <div className="col-lg-4 col-12 ">
                  <div className="child-course-card">
                    <div className="child-course-card-content">
                      <div className="child-course-img">
                        <img src={courseImgPlaceHolder} alt="" />
                      </div>
                      <div className="child-course-info">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitred diam nonumy eirmod.
                        </p>
                      </div>
                      <div className="mentor-appointment">
                        <div className="mentor">
                          Mentor: <span>someone</span>
                        </div>
                        <div className="next-appointment">
                          nextappointment: <span>3-10 at 5 pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="someone-child">
                <img src={someOneChild} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default GuardianHomeScreen;
