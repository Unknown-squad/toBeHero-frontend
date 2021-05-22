import React from "react";
import { Route } from "react-router";
import BalanceMentor from "../../components/BalanceMentor";
import Footer from "../../components/Footer";
import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import "./BalanceMentorDashboardScreen.scss";
const BalanceMentorDashboardScreen = () => {
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>
      <section class="hr-section-21">
        <div class="container">
          <div class="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div class="dashboard-balance">
              <Route
                path="/mentor/dashboard/balance"
                component={BalanceMentor}
              ></Route>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default BalanceMentorDashboardScreen;
