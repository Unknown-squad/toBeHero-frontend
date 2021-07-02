import React, { useState } from "react";
import { Link } from "react-router-dom";

const MentorHomeServiceCards = ({ service }) => {
  const [show, setShow] = useState(false);
  let data = [];
  let dataa = [];
  let input;
  data.forEach((el) => {
    if (Date.now() > Date.parse(el) + 86400000) {
      dataa.push(el);
    }
  });
  if (dataa.length === 0) {
    input = `-`;
  }
  return (
    <div className="available-course">
      <div className="part-student">
        <h4>
          {service && service.courseId && service.courseId.title}{" "}
          <span>{service && service.courseId && service.courseId.genre}</span>
        </h4>
        <p>student: {service && service.childId && service.childId.fullName}</p>
        <p>
          guardian:
          {service && service.guardianId && service.guardianId.fullName}
        </p>
      </div>
      <div className="part-appointments">
        <h4>Appointments</h4>
        {service &&
          service.appointments.map((date, i) => (
            <React.Fragment key={i}>
              {Date.now() > Date.parse(date.date) ? null : (
                <p>
                  {new Date(date.date).toLocaleDateString()} -
                  {new Date(date.date).toLocaleTimeString([], {
                    timeStyle: "short",
                  })}
                </p>
              )}
            </React.Fragment>

            //   {service.appointments.map((date) =>
            //     new Date(date.date).toLocaleString()
            //   )}
            // {/* {new Date(date.date).toLocaleDateString()} */}
            //   {/* {service.appointments.map((date) =>
            //     new Date(date.date).toUTCString()
            //   )} */}
            //   {/* {service.appointments.map((date) =>
            //     new Date(date.date).getUTCHours()
            //   )} */}
            //   {/* {service.appointments.map((date) =>
            //   new Date(date.date).getUTCMinutes()
            // )}{" "} */}
            //   {/* {service.appointments.map((date) =>
            //     new Date(date.date).toDateString()
            //   )}{" "} */}
            //   {/* {service.appointments.map((date) =>
            //     new Date(date.date).toLocaleTimeString()
            //   )}{" "} */}
          ))}{" "}
        {/* {service.appointments.map((date) => data.push(date.date))} */}
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
              {service && service.guardianId && service.guardianId.countryCode}
              {service && service.guardianId && service.guardianId.phone}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorHomeServiceCards;
