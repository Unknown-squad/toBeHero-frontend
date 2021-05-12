import React from "react";
import Footer from "../../components/Footer";
import MentorProfileExploreHeader from "../../components/MentorProfileExploreHeader";
import { Link } from "react-router-dom";
import "./ExploreServiceScreen.scss";
import CourseDetails from "../../components/CourseDetails";
import CourseImageSlider from "../../components/CourseImageSlider";
import CoursePayment from "../../components/CoursePayment";
import Reviews from "../../components/Reviews";
import "./ExploreServiceScreen.scss";

const ExploreServiceScreen = () => {
  return (
    <>
      <MentorProfileExploreHeader></MentorProfileExploreHeader>
      <section className="hr-section-19">
        <div className="container">
          <div className="row">
            <CourseDetails></CourseDetails>
            <CourseImageSlider></CourseImageSlider>
            <CoursePayment></CoursePayment>
          </div>
        </div>
      </section>

      {/* <Reviews></Reviews> */}
      <div className="view-more">
        <Link to="">View more reviews</Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ExploreServiceScreen;
