import React from "react";
import { Link } from "react-router-dom";
import courseStar from "../../images/course-star.svg";
const MentorReviews = () => {
  return (
    <section className="hr-section-18">
      <div className="container">
        <h4>Reviews</h4>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="review">
              <div className="review-name">
                <span>Islam goher</span>
                <img src={courseStar} alt="" />
                <p>5</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing
                elitred diam nonumy eirmod. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitred diam nonumy eirmod.
              </p>
            </div>
          </div>
        </div>
        <div className="view-more">
          <Link to="">View more reviews</Link>
        </div>
      </div>
    </section>
  );
};

export default MentorReviews;
