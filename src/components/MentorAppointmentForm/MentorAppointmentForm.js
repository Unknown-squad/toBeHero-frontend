import { promises } from "fs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mentorAddNewAppointmentActions } from "../../actions/mentorAddNewAppointmentActions";
import { mentorGetControlCourseDetailsActions } from "../../actions/mentorGetControlCourseDetailsActions";
import { MENTOR_ADD_NEW_APPOINTMENT_RESET } from "../../constants/mentorAddNewAppointmentConstants";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";

const MentorAppointmentForm = ({ match }) => {
  const subscriptionId = match.params.id;
  // console.log(subscriptionId);

  const [alert, setAlert] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");

  const mentorAddNewAppointment = useSelector(
    (state) => state.mentorAddNewAppointment
  );
  const { loading, error, data, success } = mentorAddNewAppointment;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      Promise.all([
        dispatch({ type: MENTOR_ADD_NEW_APPOINTMENT_RESET }),
        dispatch(mentorGetControlCourseDetailsActions(subscriptionId)),
      ]);
    }
  }, [dispatch, success, subscriptionId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      mentorAddNewAppointmentActions({ subscriptionId, date, time, title })
    );

    setAlert(true);
  };
  return (
    <form onSubmit={submitHandler}>
      {loading ? (
        <Loader></Loader>
      ) : (
        error && <ErrorMessage>{error}</ErrorMessage>
      )}
      {alert && !error && (
        <SuccessMessage>Appointment added successfully.</SuccessMessage>
      )}
      <div className="new-appointment-date">
        <label htmlFor="new-appointment-date">Date*</label>
        <input
          type="date"
          name="new-appointment-date"
          id="new-appointment-date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="new-appointment-time">
        <label htmlFor="new-appointment-time">Time*</label>
        <input
          type="time"
          name="new-appointment-time"
          id="new-appointment-time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="new-appointment-title">
        <label htmlFor="Title">Title</label>
        <textarea
          name="Title"
          id="Title"
          cols="10"
          rows="3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>
      <div className="add-new-appointment-button">
        <input type="submit" value="add new" className="add-new-button" />
      </div>
    </form>
  );
};

export default MentorAppointmentForm;
