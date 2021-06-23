import React from "react";
import { Link } from "react-router-dom";
import courseStar from "../../images/course-star.svg";
import mentorImgPlaceholder from "../../images/mentor-img-placeholder.svg";

const CourseDetails = ({ details }) => {
  return (
    <div className="col-lg-6 col-12 p-service">
      <div className="service-category">
        <p>{details.genre}</p>
      </div>
      <div className="mentor-rate">
        <h3>{details.title}</h3>
        <div>
          <img src={courseStar} alt="" />
          <p>
            {details.rate} ({details.reviewCounter})
          </p>
        </div>
      </div>
      <div className="visit-profile">
        <div className="mentor-service-info">
          <div className="mentor-img">
            <img
              src={details.picture}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://img.icons8.com/ultraviolet/40/000000/user.png";
              }}
            />
          </div>
          <div className="mentor-info">
            <h2>{details.mentorId.fullName}</h2>
            <p>
              {details.mentorId.isAvailable ? "available" : "not available"}
            </p>
          </div>
          <div
            className={`mentor-status ${
              details.mentorId.isAvailable ? "status-on" : "status-off"
            } `}
          >
            {/* <!-- change className from status-on to status-off for offline status indicator color --> */}
          </div>
        </div>
        <div>
          <Link to={`/explore/profile/${details.mentorId._id}`}>
            <button className="btn btn-visit-profile">
              visit mentor profile
            </button>
          </Link>
        </div>
      </div>
      <p className="lead-profile">{details.description}</p>
      {/* <p className="lead-profile mt-3 mb-3">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      </p> */}
    </div>
  );
};

export default CourseDetails;
