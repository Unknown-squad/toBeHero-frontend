import React from "react";
import courseStar from "../../images/course-star.svg";
const Reviews = ({ review, path }) => {
  return (
    <>
      <div className="col-md-6 col-12">
        <div className="review">
          <div className="review-name">
            <span>
              {path === "mentorProfile" && review.guardianId.fullName
                ? review.guardianId.fullName
                : review.guardianId.fullName}
            </span>
            <img src={courseStar} alt="" />
            <p>
              {path === "mentorProfile" && review.rate
                ? review.rate
                : review.rate}
            </p>
          </div>
          <p>
            {path === "mentorProfile" && review.description
              ? review.description
              : review.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
