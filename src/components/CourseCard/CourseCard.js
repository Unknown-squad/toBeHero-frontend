import React from "react";
import { Link } from "react-router-dom";
import courseStar from "../../images/course-star.svg";
import courseFiller from "../../images/course-filler.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
            <LazyLoadImage
              src={`${picture}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = courseFiller;
              }}
              alt="course thumbnail"
              effect="blur"
              style={{
                maxHeight: "110px",
                maxWidth: "260px",
                border: "1px solid #343090",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="mentor-name-price flex-row">
            <div className="mentor-name flex-row">
              <div className="mentor-img">
                <LazyLoadImage
                  src={`${mentorId.picture}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.icons8.com/ultraviolet/40/000000/user.png";
                  }}
                  alt="Mentor avatar"
                  effect="blur"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #343090",
                  }}
                />
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
            <Link to={`/explore/course/${_id}`} className="Link">
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
              >
                {title}
              </h2>
            </Link>
            <p>{`${description.substring(0, 70)}...`}</p>
          </div>
          <div className="course-rate flex-row">
            <LazyLoadImage
              src={courseStar}
              alt=""
              effect="blur"
              style={{ width: "auto" }}
            />
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
