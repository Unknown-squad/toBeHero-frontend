import React, { useEffect, useState } from "react";
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
import MentorHomeHeader from "../../components/MentorHomeHeader";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Meta from "../../components/Meta";

const ExploreServiceScreen = ({ match, location, history }) => {
  const [limitTo, setLimitTo] = useState({ itemsToShow: 4, expanded: false });
  // const [limitTo, setLimitTo] = useState(1);

  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, data } = courseDetails;
  const getReviews = useSelector((state) => state.getReviews);
  const {
    loading: loadingReviews,
    error: errorReviews,
    data: dataReviews,
  } = getReviews;
  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { guardianInfo } = guardianLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(courseDetailsAction(match.params.id)),
      dispatch(getReviewsForExploreServiceActions(match.params.id)),
    ]);
  }, [dispatch, match]);

  // const onLoadMore = () => {
  //   setLimitTo(limitTo + 1);
  // };

  // Object.keys(dataReviews.items[0].length
  const showMore = () => {
    limitTo.itemsToShow === 4
      ? setLimitTo({
          itemsToShow:
            limitTo.itemsToShow + Object.keys(dataReviews.items[0]).length,
          expanded: true,
        })
      : setLimitTo({
          itemsToShow: 4,
          expanded: false,
        });
  };
  return (
    <>
      <Meta title="ToBeHero | Explore Service"></Meta>
      {mentorInfo ? (
        <MentorHomeHeader></MentorHomeHeader>
      ) : guardianInfo ? (
        <GuardianHomeHeader></GuardianHomeHeader>
      ) : (
        <MentorProfileExploreHeader></MentorProfileExploreHeader>
      )}

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
                <CoursePayment
                  course={data.items[0]._id}
                  history={history}
                  location={location}
                  details={data.items[0]}
                ></CoursePayment>
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
                  .slice(0, limitTo.itemsToShow)
                  // .slice(0, limitTo)
                  .map((review) => (
                    <Reviews review={review} key={review._id}></Reviews>
                  ))
              )}
            </div>
            <div className="view-more">
              <p
                style={{
                  color: "#8c61ff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={showMore}
              >
                {limitTo.expanded ? (
                  <span>Show less</span>
                ) : (
                  <span>Show more</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default ExploreServiceScreen;
