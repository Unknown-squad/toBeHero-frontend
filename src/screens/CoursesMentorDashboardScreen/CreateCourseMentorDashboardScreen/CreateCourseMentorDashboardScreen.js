import React from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import CreateCourseMentor from "../../../components/CreateCourseMentor";
import Footer from "../../../components/Footer";
import MentorDashboardNavLinks from "../../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../../components/MentorHomeHeader";
import "./CreateCourseMentorDashboardScreen.scss";
const CreateCourseMentorDashboardScreen = () => {
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>
      <section class="hr-section-21">
        <div class="container">
          <div class="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div class="dashboard-course-service">
              <h4>Service Info. and details</h4>
              <Route
                path="/mentor/dashboard/course/create"
                component={CreateCourseMentor}
              ></Route>
              <Route
                path="/mentor/dashboard/course/edit"
                component={CreateCourseMentor}
              ></Route>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default CreateCourseMentorDashboardScreen;
