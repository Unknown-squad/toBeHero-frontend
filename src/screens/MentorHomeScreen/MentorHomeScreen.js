import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import MentorHomeAppointmentsCards from "../../components/MentorHomeAppointmentsCards";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import MentorHomeServiceCards from "../../components/MentorHomeServiceCards";
import { useDispatch, useSelector } from "react-redux";
import "./MentorHomeScreen.scss";
import { listServices } from "../../actions/serviceListActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { mentorStatusAvailabilityActions } from "../../actions/mentorStatusAvailabilityActions";
import { mentorStatusUpdateAvailabilityActions } from "../../actions/mentorStatusUpdateAvailabilityActions";

const MentorHomeScreen = () => {
  // const [status, setStatus] = useState(false);

  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, data } = serviceList;
  const mentorStatus = useSelector((state) => state.mentorStatus);
  const {
    loading: loadingStatusAvailable,
    error: errorStatusAvailable,
    data: mentorStatusAvailable,
  } = mentorStatus;

  const mentorStatusUpdate = useSelector((state) => state.mentorStatusUpdate);
  const { success } = mentorStatusUpdate;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(mentorStatusAvailabilityActions()),
      dispatch(listServices()),
    ]);
  }, [dispatch, success]);
  const toggleCheckbox = () => {
    dispatch(mentorStatusUpdateAvailabilityActions());
    // setStatus(!status);
  };
  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-20">
        <div className="container">
          {/* {loadingStatusAvailable ? <Loader></Loader> : ""} */}
          {errorStatusAvailable ? (
            <ErrorMessage>{errorStatusAvailable}</ErrorMessage>
          ) : (
            ""
          )}
          <div className="my-services-title">
            <h3>My services</h3>
            <div className="available-work">
              <p>Available to work</p>
              <input
                className="switch"
                type="checkbox"
                checked={mentorStatusAvailable || ""}
                onChange={toggleCheckbox}
              />
            </div>
          </div>
        </div>
        <div className="available">
          <div className="container">
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <ErrorMessage
                style={{
                  color: "#004085",
                  backgroundColor: "#cce5ff",
                  borderColor: "#b8daff",
                }}
              >
                There is no subscription with appointement yet
              </ErrorMessage>
            ) : (
              data.items.map((service, i) =>
                // Object.keys(service.appointments[0]).length > 0 ?
                service.appointments.length > 0 ? (
                  <MentorHomeServiceCards
                    service={service}
                    key={i}
                  ></MentorHomeServiceCards>
                ) : null
              )
            )}
          </div>
        </div>

        <div className="container">
          <h4 className="service-app">Services to give an appointment</h4>
        </div>
        <div className="available">
          <div className="container container-appointment">
            <div className="row">
              {loading ? (
                <Loader></Loader>
              ) : error ? (
                <ErrorMessage
                  style={{
                    color: "#004085",
                    backgroundColor: "#cce5ff",
                    borderColor: "#b8daff",
                  }}
                >
                  There is no subscription yet
                </ErrorMessage>
              ) : (
                data.items.map((service, i) =>
                  // Object.keys(service.appointments[0]).length === 0
                  service.appointments.length === 0 ? (
                    <MentorHomeAppointmentsCards
                      service={service}
                      key={i}
                    ></MentorHomeAppointmentsCards>
                  ) : null
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MentorHomeScreen;
