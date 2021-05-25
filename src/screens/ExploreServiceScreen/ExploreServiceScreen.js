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

const ExploreServiceScreen = ({ match }) => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, data } = courseDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseDetailsAction(match.params.id));
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
      {console.log(data.items[0])}
      {/* <Reviews details={data.items[0]}></Reviews> */}
      <Footer></Footer>
    </>
  );
};

export default ExploreServiceScreen;
