import React from "react";
import { Route } from "react-router";
import Footer from "../../components/Footer";
import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import Meta from "../../components/Meta";

const MentorAnalyticsDashboardScreen = () => {
  return (
    <>
      <Meta title="Mentor | Dashboard Analytics"></Meta>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-21">
        <div className="container">
          <div className="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div className="dashboard-basic-info">
              <Route
                path="/mentor/dashboard/analytics"
                component={() => (
                  <h1 style={{ color: "#8C61FF" }}>Coming Soon 🥳 ...</h1>
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

export default MentorAnalyticsDashboardScreen;
