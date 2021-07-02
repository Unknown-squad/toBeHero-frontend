import React, { useState } from "react";
import { Link } from "react-router-dom";

const MentorHomeAppointmentsCards = ({ service }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="col-lg-6 col-12">
      <div className="available-course">
        <div className="part-student">
          <h4>
            {service && service.courseId && service.courseId.title}{" "}
            <span>{service && service.courseId && service.courseId.genre}</span>
          </h4>
          <p>
            student: {service && service.childId && service.childId.fullName}
          </p>
          <p>
            guardian:{" "}
            {service && service.guardianId && service.guardianId.fullName}
          </p>
        </div>

        <div className="part-contact">
          <div className="service-course">
            <Link to={`/mentor/home/course/${service._id}`}>
              <button className="btn btn-purple-500">Open course</button>
            </Link>
          </div>
          <div>
            <p>or</p>
          </div>
          <div className="service-contact">
            <p
              onClick={() => setShow(!show)}
              style={
                show
                  ? {
                      display: "none",
                      textDecoration: "underline",
                      fontSize: "14px",
                      color: "#551A8B",
                    }
                  : {
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "14px",
                      color: "#551A8B",
                    }
              }
            >
              Contact the Guardian
            </p>
            {show && (
              <p
                onClick={() => setShow(!show)}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "14px",
                  color: "#551A8B",
                }}
              >
                {service &&
                  service.guardianId &&
                  service.guardianId.countryCode}
                {service && service.guardianId && service.guardianId.phone}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorHomeAppointmentsCards;
