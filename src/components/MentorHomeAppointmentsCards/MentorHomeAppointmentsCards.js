import React from "react";
import { Link } from "react-router-dom";

const MentorHomeAppointmentsCards = () => {
  return (
    <div className="col-lg-6 col-12">
      <div className="available-course">
        <div className="part-student">
          <h4>
            Lorem ipsum dolor sit amet <span>programming</span>
          </h4>
          <p>student: Youssef gohar</p>
          <p>guardian: islam gohar</p>
        </div>

        <div className="part-contact">
          <div className="service-course">
            <button className="btn btn-purple-500">Open course</button>
          </div>
          <div>
            <p>or</p>
          </div>
          <div className="service-contact">
            <Link to="">contact the Guardian</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorHomeAppointmentsCards;
