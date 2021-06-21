import React from "react";
import courseImgPlaceHolder from "../../images/course-img-placeholder.svg";

const EnrolledCoursesForChild = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-12 ">
        <div className="child-course-card">
          <div className="child-course-card-content">
            <div className="child-course-img">
              <img src={courseImgPlaceHolder} alt="" />
            </div>
            <div className="child-course-info">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                nonumy eirmod.
              </p>
            </div>
            <div className="mentor-appointment">
              <div className="mentor">
                Mentor: <span>someone</span>
              </div>
              <div className="next-appointment">
                nextappointment: <span>3-10 at 5 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCoursesForChild;
