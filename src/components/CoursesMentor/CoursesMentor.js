import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import courseFiller from "../../images/course-filler.svg";
import { useDispatch, useSelector } from "react-redux";
import { getMentorCoursesDashboardActions } from "../../actions/mentorCoursesDashboardActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CoursesMentor = () => {
  const mentorCoursesDashboard = useSelector(
    (state) => state.mentorCoursesDashboard
  );
  const { loading, error, data } = mentorCoursesDashboard;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMentorCoursesDashboardActions());
  }, [dispatch]);
  return (
    <>
      <div className="row">
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          data.items.map((course) => (
            <div className="col-lg-4 col-12" key={course._id}>
              <div className="mentor-course-card">
                <div className="mentor-course-card-content">
                  <div className="mentor-course-img">
                    <LazyLoadImage
                      src={`${process.env.REACT_APP_DOMAIN_MEDIA}${course.picture}`}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = courseFiller;
                      }}
                      effect="blur"
                    />
                  </div>
                  <div className="mentor-course-info">
                    <h2>{course.title}</h2>
                    <p>{`${course.description.substring(0, 90)}...`}</p>
                  </div>
                  <div className="mentor-course-edit-btn flex-row">
                    <Link
                      to={`course/edit/${course._id}`}
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
          ))
        )}
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
