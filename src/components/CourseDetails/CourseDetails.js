import React from "react";
import courseStar from "../../images/course-star.svg";
import mentorImgPlaceholder from "../../images/mentor-img-placeholder.svg";

const CourseDetails = () => {
  return (
    <div className="col-lg-6 col-12 p-service">
      <div className="service-category">
        <p>programming</p>
      </div>
      <div className="mentor-rate">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div>
          <img src={courseStar} alt="" />
          <p>4.8 (231)</p>
        </div>
      </div>
      <div className="visit-profile">
        <div className="mentor-service-info">
          <div className="mentor-img">
            <img src={mentorImgPlaceholder} alt="" />
          </div>
          <div className="mentor-info">
            <h2>mentor-x</h2>
            <p>available</p>
          </div>
          <div className="mentor-status status-on">
            {/* <!-- change className from status-on to status-off for offline status indicator color --> */}
          </div>
        </div>
        <div>
          <button className="btn btn-visit-profile">
            visit mentor profile
          </button>
        </div>
      </div>
      <p className="lead-profile">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy
      </p>
      <p className="lead-profile mt-3 mb-3">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      </p>
    </div>
  );
};

export default CourseDetails;
