import React from "react";
import { Link } from "react-router-dom";
import "./GuardianHomeScreen.scss";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";

const GuardianHomeScreen = () => {
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>

      <section className="hr-section-23">
        <div className="container">
          <h3>Reviews</h3>
          <div className="guardian-home">
            <ul className="nav-guardian-home">
              <li>
                <Link to="" className="active">
                  <img src="images/someone.svg" alt="" />
                  <p>youssef</p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src="images/someone.svg" alt="" />
                  <p>Alaa</p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src="images/someone.svg" alt="" />
                  <p>someone</p>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img
                    src="images/add-someone.svg"
                    alt=""
                    className="add-child"
                  />
                  <p>add new</p>
                </Link>
              </li>
            </ul>

            <div className="basic-info-child">
              _____________
              <h4>enrolled courses</h4>
              <div className="row">
                <div className="col-lg-4 col-12 ">
                  <div className="child-course-card">
                    <div className="child-course-card-content">
                      <div className="child-course-img">
                        <img src="images/course-img-placeholder.svg" alt="" />
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
                <img src="images/someone-child.svg" alt="" />
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
