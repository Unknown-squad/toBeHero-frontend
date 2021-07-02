import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import MentorHomeAppointmentsCards from "../../components/MentorHomeAppointmentsCards";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import MentorHomeServiceCards from "../../components/MentorHomeServiceCards";
import { useDispatch, useSelector } from "react-redux";

import { listServices } from "../../actions/serviceListActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

const MentorHomeServiceList = () => {
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, data } = serviceList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  return (
    <>
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
            data &&
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
              data &&
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
    </>
  );
};

export default MentorHomeServiceList;
