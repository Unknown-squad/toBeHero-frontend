import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import MentorHomeAppointmentsCards from "../../components/MentorHomeAppointmentsCards";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import MentorHomeServiceCards from "../../components/MentorHomeServiceCards";
import "./MentorHomeScreen.scss";
const MentorHomeScreen = () => {
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>
      <section className="hr-section-20">
        <div className="container">
          <div className="my-services-title">
            <h3>My services</h3>
            <div className="available-work">
              <p>Available to work</p>
              <input className="switch" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="available">
          <div className="container">
            <MentorHomeServiceCards></MentorHomeServiceCards>
            <MentorHomeServiceCards></MentorHomeServiceCards>
            <MentorHomeServiceCards></MentorHomeServiceCards>
          </div>
        </div>

        <div className="container">
          <h4 className="service-app">Services to give an appointment</h4>
        </div>
        <div className="available">
          <div className="container container-appointment">
            <div className="row">
              <MentorHomeAppointmentsCards></MentorHomeAppointmentsCards>
              <MentorHomeAppointmentsCards></MentorHomeAppointmentsCards>
              <MentorHomeAppointmentsCards></MentorHomeAppointmentsCards>
              <MentorHomeAppointmentsCards></MentorHomeAppointmentsCards>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MentorHomeScreen;
