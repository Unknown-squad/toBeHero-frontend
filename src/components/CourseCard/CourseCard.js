import React from "react";
import { Link } from "react-router-dom";
import courseStar from "../../images/course-star.svg";

const CourseCard = ({ course }) => {
  const {
    mentorId,
    picture,
    price,
    title,
    description,
    rate,
    reviewCounter,
    _id,
  } = course;
  return (
    <>
      <div className="course-card">
        <div className="card-content">
          <div className="course-img">
            <img src={`http://localhost:5000${picture}`} alt="" />
          </div>
          <div className="mentor-name-price flex-row">
            <div className="mentor-name flex-row">
              <div className="mentor-img">
                <img src={`http://localhost:5000${mentorId.picture}`} alt="" />
              </div>
              <div className="mentor-info">
                <Link to={`/explore/profile/${mentorId._id}`}>
                  <h2>{mentorId.fullName}</h2>
                </Link>
                <p>{mentorId.isAvailable ? "available" : "not available"}</p>
              </div>
              <div
                className={`mentor-status ${
                  mentorId.isAvailable ? "status-on" : "status-off"
                } `}
              ></div>
            </div>
            <div className="price">
              <p>{Number(price)} EGP</p>
            </div>
          </div>
          <div className="course-info">
            <Link to={`/explore/course/${_id}`}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
          <div className="course-rate flex-row">
            <img src={courseStar} alt="" />
            <p>
              {Number(rate)} ({Number(reviewCounter)})
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
