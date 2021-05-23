import React from "react";
import { Route } from "react-router";
import BalanceMentor from "../../components/BalanceMentor";
import Footer from "../../components/Footer";
import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import "./BalanceMentorDashboardScreen.scss";
import { useDispatch, useSelector } from "react-redux";
const BalanceMentorDashboardScreen = () => {
  const mentorBalance = useSelector((state) => state.mentorBalance);
  const { loading, error, data } = mentorBalance;
  const dispatch = useDispatch();
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>
      <section className="hr-section-21">
        <div className="container">
          <div className="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div className="dashboard-balance">
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
