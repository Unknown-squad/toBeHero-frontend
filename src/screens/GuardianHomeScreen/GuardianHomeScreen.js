import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./GuardianHomeScreen.scss";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";

import someOne from "../../images/someone.svg";
import addSomeOne from "../../images/add-someone.svg";
import courseImgPlaceHolder from "../../images/course-img-placeholder.svg";
import someOneChild from "../../images/someone-child.svg";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";
import GuardianGetBasicInfoForHeroForm from "../../components/GuardianGetBasicInfoForHeroForm";
import EnrolledCoursesForChild from "../../components/EnrolledCoursesForChild";

const GuardianHomeScreen = ({ match }) => {
  // const childId = match.params.id;

  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>

      <section className="hr-section-23">
        <div className="container">
          <h3>Children</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <div className="basic-info-child">
              <p
                style={{
                  color: "#8c61ff",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Please select a child or add one.
              </p>
              {/* <GuardianGetBasicInfoForHeroForm
                match={match}
              ></GuardianGetBasicInfoForHeroForm> */}
              {/* <h4>enrolled courses</h4> */}
              {/* <EnrolledCoursesForChild></EnrolledCoursesForChild> */}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default GuardianHomeScreen;
