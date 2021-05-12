import React, { useEffect } from "react";
import CourseCard from "../../components/CourseCard";
import MentorProfileExploreHeader from "../../components/MentorProfileExploreHeader";

import MentorReviews from "../../components/Reviews";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { mentorProfileDetails } from "../../actions/mentorProfileDetailsActions";
import coloredAt from "../../images/colored-at-icon.svg";
import locationIcon from "../../images/location-icon.svg";
import infoIcon from "../../images/info-icon.svg";
import coloredPhoneIcon from "../../images/colored-phone-icon.svg";
import langIcon from "../../images/lang-icon.svg";
import "./MentorProfileExploreScreen.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Reviews from "../../components/Reviews";
const MentorProfileExploreScreen = ({ match }) => {
  // const MentorProfileInfoCard = ({ details }) => {
  //   function calculate_age(age) {
  //     var diff_ms = Date.now() - age.getTime();
  //     var age_dt = new Date(diff_ms);

  //     return Math.abs(age_dt.getUTCFullYear() - 1970);
  //   }
  //   const getAge = (birthDate) =>
  //     Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  //   new Date(details.birthDate).toLocaleDateString().replace("/", "-");
  //   // return ["1", "29", "2021"]

  //   console.log(calculate_age(new Date()));

  const mentorDetails = useSelector((state) => state.mentorDetails);
  const { loading, error, data } = mentorDetails;
  const mentorProfileCourses = useSelector(
    (state) => state.mentorProfileCourses
  );
  const {
    loading: loadingMentorProfileCourses,
    error: errorMentorProfileCourses,
    data: dataMentorProfileCourses,
  } = mentorProfileCourses;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mentorProfileDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <MentorProfileExploreHeader></MentorProfileExploreHeader>
      <section className="hr-section-15">
        <div className="container container-profile">
          <div className="row">
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <ErrorMessage style={{ width: "100vw" }}>{error}</ErrorMessage>
            ) : (
              <>
                <div className="col-lg-2 col-md-6 col-12 p-profile">
                  <div className="upload-img-profile">
                    <img src={data.items.picture} alt="" />
                    <p>{data.items.fullName}</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-profile">
                  <div className="mentor-contact">
                    <ul>
                      <li>
                        <img src={coloredAt} alt="" />
                        <h6>{data.items.email}</h6>
                      </li>
                      <li>
                        <img src={locationIcon} alt="" />
                        <h6>Egypt</h6>
                      </li>
                      <li>
                        <img src={infoIcon} alt="" />
                        <h6>
                          {data.items.birthDate} years old,{" "}
                          {data.items.gender === "mr" ? "Male" : "Female"}
                        </h6>
                      </li>
                      <li>
                        <img src={coloredPhoneIcon} alt="" />
                        <Link to="">
                          {data.items.countryCode}
                          {data.items.phone}
                        </Link>
                      </li>
                      <li>
                        <img src={langIcon} alt="" />
                        {data.items.languages.map((lang, index) => (
                          <h6 key={index}>{lang},</h6>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 p-profile">
                  <div className="description-profile">
                    <h4>Description</h4>
                    <p>{data.items.description}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 p-profile">
                  <div className="occupations-profile">
                    <h4>Occupations</h4>
                    {data.items.occupation.map((occupation, index) => (
                      <p key={index}>{occupation}</p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="hr-section-17">
        <div className="container">
          <div className="Certificates">
            <h4>Certificates</h4>
            {data.items.certificates.map((certificate, index) => (
              <p key={index}>- {certificate}</p>
            ))}
          </div>
        </div>
      </section>
      {loadingMentorProfileCourses ? (
        <Loader></Loader>
      ) : errorMentorProfileCourses ? (
        <ErrorMessage style={{ width: "100vw" }}>{error}</ErrorMessage>
      ) : (
        <>
          {/* {dataMentorProfileCourses.items.map((course) => (
            <CourseCard course={course}></CourseCard>
          ))} */}
        </>
      )}
      )<Reviews data={data}></Reviews>
      <Footer></Footer>
    </>
  );
};

export default MentorProfileExploreScreen;
