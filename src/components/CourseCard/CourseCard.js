import React from "react";
// import courseImg from "../../images/course-img-placeholder.svg";
// import mentorImg from "../../images/mentor-img-placeholder.svg";
import courseStar from "../../images/course-star.svg";

const CourseCard = ({ course }) => {
  //   const {
  //     mentorId,
  //     picture,
  //     price,
  //     title,
  //     description,
  //     rate,
  //     reviewCounter,
  //   } = course;
  return (
    <>
      <div className="course-card">
        <div className="card-content">
          <div className="course-img">
            <img src={`http://localhost:5000${course.picture}`} alt="" />
          </div>
          <div className="mentor-name-price flex-row">
            <div className="mentor-name flex-row">
              <div className="mentor-img">
                <img
                  src={`http://localhost:5000${course.mentorId.picture}`}
                  alt=""
                />
              </div>
              <div className="mentor-info">
                <h2>{course.mentorId.fullName}</h2>
                <p>
                  {course.mentorId.isAvailable ? "available" : "not available"}
                </p>
              </div>
              <div
                className={`mentor-status ${
                  course.mentorId.isAvailable ? "status-on" : "status-off"
                } `}
              >
                {/* <!-- change className from status-on to status-off for offline status indicator color --> */}
              </div>
            </div>
            <div className="price">
              <p>{course.price} EGP</p>
            </div>
          </div>
          <div className="course-info">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
          <div className="course-rate flex-row">
            <img src={courseStar} alt="" />
            <p>
              {course.rate} ({course.reviewCounter})
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
