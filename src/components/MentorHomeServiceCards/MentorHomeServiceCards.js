import React from "react";
import { Link } from "react-router-dom";

const MentorHomeServiceCards = ({ service }) => {
  return (
    <div className="available-course">
      <div className="part-student">
        <h4>
          {service.appointments.map((title) => title.title)}{" "}
          <span>{service.courseId.genre}</span>
        </h4>
        <p>student: {service.childId.fullName}</p>
        <p>guardian: {service.guardianId.fullName}</p>
      </div>
      <div className="part-appointments">
        <h4>Appointments</h4>
        <p>
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleDateString()
          )}{" "}
          {/* {service.appointments.map((date) =>
            new Date(date.date).toUTCString()
          )}
          {service.appointments.map((date) =>
            new Date(date.date).getUTCHours()
          )}
          :
          {service.appointments.map((date) =>
            new Date(date.date).getUTCMinutes()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toDateString()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleTimeString()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleString()
          )} */}
        </p>
        <p>
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleDateString()
          )}{" "}
          {/* {service.appointments.map((date) =>
            new Date(date.date).toUTCString()
          )}
          {service.appointments.map((date) =>
            new Date(date.date).getUTCHours()
          )}
          :
          {service.appointments.map((date) =>
            new Date(date.date).getUTCMinutes()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toDateString()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleTimeString()
          )}{" "}
          {service.appointments.map((date) =>
            new Date(date.date).toLocaleString()
          )} */}
        </p>
      </div>
      <div className="part-contact">
        <div className="service-course">
          <Link to="">
            <button className="btn btn-purple-500">Open course</button>
          </Link>
        </div>
        <div>
          <p>or</p>
        </div>
        <div className="service-contact">
          <Link to={false}>
            {service.guardianId.countryCode} {service.guardianId.phone}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorHomeServiceCards;