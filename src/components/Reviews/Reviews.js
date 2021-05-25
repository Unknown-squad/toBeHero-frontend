import React from "react";
import { Link } from "react-router-dom";
import courseStar from "../../images/course-star.svg";
const Reviews = ({ review }) => {
  return (
    <>
      <div className="col-md-6 col-12">
        <div className="review">
          <div className="review-name">
            <span>{review.guardianId.fullName}</span>
            <img src={courseStar} alt="" />
            <p>{review.rate}</p>
          </div>
          <p>{review.description}</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
