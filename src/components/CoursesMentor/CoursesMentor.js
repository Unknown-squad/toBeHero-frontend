import React from "react";
import courseImg from "../../images/course-img-placeholder.svg";
const CoursesMentor = () => {
  return (
    <>
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="mentor-course-card">
            <div class="mentor-course-card-content">
              <div class="mentor-course-img">
                <img src={courseImg} alt="" />
              </div>
              <div class="mentor-course-info">
                <h2>Course Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                  nonumy eirmod.
                </p>
              </div>
              <div class="mentor-course-edit-btn flex-row">
                <button class="btn btn-purple-400">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="mentor-course-card">
            <div class="mentor-course-card-content">
              <div class="mentor-course-img">
                <img src={courseImg} alt="" />
              </div>
              <div class="mentor-course-info">
                <h2>Course Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                  nonumy eirmod.
                </p>
              </div>
              <div class="mentor-course-edit-btn flex-row">
                <button class="btn btn-purple-400">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="mentor-course-card">
            <div class="mentor-course-card-content">
              <div class="mentor-course-img">
                <img src={courseImg} alt="" />
              </div>
              <div class="mentor-course-info">
                <h2>Course Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitred diam
                  nonumy eirmod.
                </p>
              </div>
              <div class="mentor-course-edit-btn flex-row">
                <button class="btn btn-purple-400">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="create-new">
        <button class="btn btn-purple-400">
          Create new <i class="fas fa-plus"></i>
        </button>
      </div>
    </>
  );
};

export default CoursesMentor;
