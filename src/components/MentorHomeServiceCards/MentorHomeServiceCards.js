import React from "react";
import { Link } from "react-router-dom";

const MentorHomeServiceCards = () => {
  return (
    <div className="available-course">
      <div className="part-student">
        <h4>
          Lorem ipsum dolor sit amet <span>programming</span>
        </h4>
        <p>student: Youssef gohar</p>
        <p>guardian: islam gohar</p>
      </div>
      <div className="part-appointments">
        <h4>Appointments</h4>
        <p>
          Monday: 20-1-2020 <span>3pm</span>
        </p>
        <p>
          Friday: 24-1-2020 <span>9pm</span>
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
          <Link to="">contact the Guardian</Link>
        </div>
      </div>
    </div>
  );
};

export default MentorHomeServiceCards;
