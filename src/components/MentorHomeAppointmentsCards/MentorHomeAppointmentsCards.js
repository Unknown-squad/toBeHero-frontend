import React from "react";
import { Link } from "react-router-dom";

const MentorHomeAppointmentsCards = ({ service }) => {
  return (
    <div className="col-lg-6 col-12">
      <div className="available-course">
        <div className="part-student">
          <h4>
            {service.courseId.title} <span>{service.courseId.genre}</span>
          </h4>
          <p>student: {service.childId.fullName}</p>
          <p>guardian: {service.guardianId.fullName}</p>
        </div>

        <div className="part-contact">
          <div className="service-course">
            <Link to="/mentor/home/course/:id">
              <button className="btn btn-purple-500">Open course</button>
            </Link>
          </div>
          <div>
            <p>or</p>
          </div>
          <div className="service-contact">
            <Link to="">
              {service.guardianId.countryCode} {service.guardianId.phone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorHomeAppointmentsCards;
