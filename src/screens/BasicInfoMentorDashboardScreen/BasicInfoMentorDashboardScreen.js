import React from "react";
import Footer from "../../components/Footer";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import { Link } from "react-router-dom";
import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import "./BasicInfoMentorDashboardScreen.scss";
import BasicInfoMentorForm from "../../components/BasicInfoMentorForm";

const BasicInfoMentorDashboardScreen = () => {
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>

      <section class="hr-section-21">
        <div class="container">
          <div class="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div class="dashboard-basic-info">
              <BasicInfoMentorForm></BasicInfoMentorForm>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default BasicInfoMentorDashboardScreen;
