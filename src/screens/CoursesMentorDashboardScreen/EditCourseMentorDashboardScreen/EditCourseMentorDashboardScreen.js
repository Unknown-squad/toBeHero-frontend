import React from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import CreateCourseMentor from "../../../components/CreateCourseMentor";
import EditCourseMentor from "../../../components/EditCourseMentor";
import Footer from "../../../components/Footer";
import MentorDashboardNavLinks from "../../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../../components/MentorHomeHeader";
import Meta from "../../../components/Meta";
import "./EditCourseMentorDashboardScreen.scss";
const EditCourseMentorDashboardScreen = ({ match, history }) => {
  return (
    <>
      <Meta title="Mentor | Dashboard Edit Courses"></Meta>
      <MentorHomeHeader></MentorHomeHeader>
      <section className="hr-section-21">
        <div className="container">
          <div className="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div className="dashboard-course-service">
              <h4>Service Info. and details</h4>
              <Route
                path="/mentor/dashboard/course/create"
                component={() => (
                  <CreateCourseMentor
                    match={match}
                    history={history}
                  ></CreateCourseMentor>
                )}
              ></Route>
              <Route
                path="/mentor/dashboard/course/edit/:id"
                component={() => (
                  <EditCourseMentor match={match}></EditCourseMentor>
                )}
              ></Route>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default EditCourseMentorDashboardScreen;
