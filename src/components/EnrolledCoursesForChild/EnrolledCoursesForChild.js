import React, { useEffect } from "react";
import courseImgPlaceHolder from "../../images/course-img-placeholder.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsForChildActions } from "../../actions/getSubscriptionsForChildActions";
import courseFiller from "../../images/course-filler.svg";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouteMatch } from "react-router";
const EnrolledCoursesForChild = ({ match }) => {
  // const match = useRouteMatch("/guardian/home/child/:childId");
  const childId = match.params.childId;
  const getSubscriptionsForChild = useSelector(
    (state) => state.getSubscriptionsForChild
  );
  const { loading, error, data } = getSubscriptionsForChild;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionsForChildActions(childId));
  }, [dispatch, childId]);

  console.log(data);
  return (
    <>
      <br></br>
      <div className="row">
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <>
            <ErrorMessage
              style={{
                color: "#004085",
                backgroundColor: "#cce5ff",
                borderColor: "#b8daff",
              }}
            >
              There is no subscription courses yet
            </ErrorMessage>
          </>
        ) : (
          <>
            {data.items &&
              data.items.map((course) => (
                <div className="col-lg-4 col-12 " key={course._id}>
                  <Link
                    to={`/guardian/home/child/${childId}/course-subscription/${course._id}`}
                  >
                    <div className="child-course-card">
                      <div className="child-course-card-content">
                        <div className="child-course-img">
                          <LazyLoadImage
                            src={course.courseId.picture}
                            alt=""
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = courseFiller;
                            }}
                            effect="blur"
                          />
                        </div>
                        <div className="child-course-info">
                          <h2>{course.courseId.title}</h2>
                          <p>{`${course.courseId.description.substring(
                            0,
                            70
                          )}...`}</p>
                        </div>
                        <div className="mentor-appointment">
                          <div className="mentor">
                            Mentor: <span>{course.mentorId.fullName}</span>
                          </div>
                          <div className="next-appointment">
                            nextappointment:{" "}
                            {course.nextAppointment === null ? (
                              <span>coming soon</span>
                            ) : (
                              <span>
                                {new Date(
                                  course && course.nextAppointment
                                ).toLocaleDateString()}{" "}
                                -{" "}
                                {new Date(
                                  course && course.nextAppointment
                                ).toLocaleTimeString([], {
                                  timeStyle: "short",
                                })}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default EnrolledCoursesForChild;
