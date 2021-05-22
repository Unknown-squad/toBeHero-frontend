import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../../images/course-img-placeholder.svg";
const CoursesMentor = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="mentor-course-card">
            <div className="mentor-course-card-content">
              <div className="mentor-course-img">
                <img src={courseImg} alt="" />
              </div>
              <div className="mentor-course-info">
                <h2>Course Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                  nonumy eirmod.
                </p>
              </div>
              <div className="mentor-course-edit-btn flex-row">
                <Link
                  to="course/edit"
                  style={{
                    display: "inherit",
                    width: "50vw",
                  }}
                >
                  <button className="btn btn-purple-400">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="create-new">
        <Link to="course/create">
          <button className="btn btn-purple-400">
            Create new <i className="fas fa-plus"></i>
          </button>
        </Link>
      </div>
    </>
  );
};

export default CoursesMentor;
