import React from "react";
import { Route } from "react-router-dom";

import CoursesMentor from "../../components/CoursesMentor/CoursesMentor";
import Footer from "../../components/Footer";

import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import "./CoursesMentorDashboardScreen.scss";
const CoursesMentorDashboardScreen = () => {
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-21">
        <div className="container">
          <div className="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div className="dashboard-course">
              <Route
                path="/mentor/dashboard/courses"
                component={CoursesMentor}
              ></Route>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default CoursesMentorDashboardScreen;
