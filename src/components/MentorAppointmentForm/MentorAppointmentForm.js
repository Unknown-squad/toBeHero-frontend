import React from "react";

const MentorAppointmentForm = () => {
  return (
    <form action="">
      <div className="new-appointment-date">
        <label htmlFor="new-appointment-date">Date*</label>
        <input
          type="date"
          name="new-appointment-date"
          id="new-appointment-date"
          required
        />
      </div>
      <div className="new-appointment-time">
        <label htmlFor="new-appointment-time">Time*</label>
        <input
          type="time"
          name="new-appointment-time"
          id="new-appointment-time"
          required
        />
      </div>
      <div className="new-appointment-title">
        <label htmlFor="Title">Title</label>
        <textarea name="Title" id="Title" cols="10" rows="3"></textarea>
      </div>
      <div className="add-new-appointment-button">
        <input type="submit" value="add new" className="add-new-button" />
      </div>
    </form>
  );
};

export default MentorAppointmentForm;
