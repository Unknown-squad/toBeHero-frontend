import React from "react";
import courseImg from "../../images/course-img-placeholder.svg";
import mentorImg from "../../images/mentor-img-placeholder.svg";
import courseStar from "../../images/course-star.svg";

const CourseCard = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="course-card">
          <div className="card-content">
            <div className="course-img">
              <img src={courseImg} alt="" />
            </div>
            <div className="mentor-name-price flex-row">
              <div className="mentor-name flex-row">
                <div className="mentor-img">
                  <img src={mentorImg} alt="" />
                </div>
                <div className="mentor-info">
                  <h2>mentor-x</h2>
                  <p>available</p>
                </div>
                <div className="mentor-status status-off">
                  {/* <!-- change className from status-on to status-off for offline status indicator color --> */}
                </div>
              </div>
              <div className="price">
                <p>10 $</p>
              </div>
            </div>
            <div className="course-info">
              <h2>Course Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                nonumy eirmod.
              </p>
            </div>
            <div className="course-rate flex-row">
              <img src={courseStar} alt="" />
              <p>4.8 (231)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
