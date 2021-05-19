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
import axios from "axios";

const MentorHomeScreen = () => {
  const [stateLoading, setStateLoading] = useState(false);
  const [message, setMessage] = useState("");
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, data } = serviceList;
  const dispatch = useDispatch();

  useEffect(() => {
    const checkStatusAvailability = async () => {
      setStateLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/mentor/availability",
          { withCredentials: true }
        );
        const available = data.data.items[0].isAvailable;
        setStateLoading(false);
      } catch (error) {
        setStateLoading(false);
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          setMessage(error.response.data.message);
        }
      }
    };
    checkStatusAvailability();
    dispatch(listServices());
  }, [dispatch]);

  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-20">
        <div className="container">
          <div className="my-services-title">
            <h3>My services</h3>
            {stateLoading ? <Loader></Loader> : ""}
            {message ? <ErrorMessage>{message}</ErrorMessage> : ""}
            <div className="available-work">
              <p>Available to work</p>
              <input
                className="switch"
                type="checkbox"
                defaultChecked={false}
              />
            </div>
          </div>
        </div>
        <div className="available">
          <div className="container">
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : (
              data.items.map((service, i) => (
                <MentorHomeServiceCards
                  service={service}
                  key={i}
                ></MentorHomeServiceCards>
              ))
            )}
          </div>
        </div>

        <div className="container">
          <h4 className="service-app">Services to give an appointment</h4>
        </div>
        <div className="available">
          <div className="container container-appointment">
            <div className="row">
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
