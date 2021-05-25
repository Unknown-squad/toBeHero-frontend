import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import MentorProfileExploreHeader from "../../components/MentorProfileExploreHeader";
import { Link } from "react-router-dom";
import "./ExploreServiceScreen.scss";
import CourseDetails from "../../components/CourseDetails";
import CourseImageSlider from "../../components/CourseImageSlider";
import CoursePayment from "../../components/CoursePayment";
import Reviews from "../../components/Reviews";
import "./ExploreServiceScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { courseDetailsAction } from "../../actions/courseDetailsActions";
import { getReviewsForExploreServiceActions } from "../../actions/getReviewsForExploreServiceActions";

const ExploreServiceScreen = ({ match }) => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, data } = courseDetails;
  const getReviews = useSelector((state) => state.getReviews);
  const {
    loading: loadingReviews,
    error: errorReviews,
    data: dataReviews,
  } = getReviews;
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(courseDetailsAction(match.params.id)),
      dispatch(getReviewsForExploreServiceActions(match.params.id)),
    ]);
  }, [dispatch, match]);
  return (
    <>
      <MentorProfileExploreHeader></MentorProfileExploreHeader>
      <section className="hr-section-19">
        <div className="container">
          <div className="row">
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : (
              <>
                <CourseDetails details={data.items[0]}></CourseDetails>
                <CourseImageSlider details={data.items[0]}></CourseImageSlider>
                <CoursePayment details={data.items[0]}></CoursePayment>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="hr-section-18">
        <div className="container">
          <div className="reviews">
            <h4>Reviews</h4>
            <div className="row">
              {loadingReviews ? (
                <Loader></Loader>
              ) : errorReviews ? (
                <ErrorMessage>{errorReviews}</ErrorMessage>
              ) : (
                dataReviews.items
                  // .slice(0, 4)
                  .map((review) => (
                    <Reviews review={review} key={review._id}></Reviews>
                  ))
              )}
            </div>
            <div className="view-more">
              <Link to="">View more reviews</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default ExploreServiceScreen;
