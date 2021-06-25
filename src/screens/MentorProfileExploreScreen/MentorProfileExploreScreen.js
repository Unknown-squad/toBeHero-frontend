import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import MentorProfileExploreHeader from "../../components/MentorProfileExploreHeader";

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
import { mentorProfileCoursesAction } from "../../actions/mentorProfileCoursesActions";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";

const MentorProfileExploreScreen = ({ match }) => {
  const [show, setShow] = useState(false);
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
  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { guardianInfo } = guardianLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(mentorProfileDetails(match.params.id)),
      dispatch(mentorProfileCoursesAction(match.params.id)),
    ]);
  }, [dispatch, match]);
  console.log(data);

  const calculateAge = (birthday) => {
    // birthday is a date
    let ageDifMs = Date.now() - birthday;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      {mentorInfo ? (
        <MentorHomeHeader></MentorHomeHeader>
      ) : guardianInfo ? (
        <GuardianHomeHeader></GuardianHomeHeader>
      ) : (
        <MentorProfileExploreHeader></MentorProfileExploreHeader>
      )}
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
                    <img
                      src={data.picture}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.icons8.com/ultraviolet/40/000000/user.png";
                      }}
                    />
                    <p>{data.fullName}</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-profile">
                  <div className="mentor-contact">
                    <ul>
                      <li>
                        <img src={coloredAt} alt="" />
                        <h6>{data.email}</h6>
                      </li>
                      <li>
                        <img src={locationIcon} alt="" />
                        <h6>Egypt</h6>
                      </li>
                      <li>
                        <img src={infoIcon} alt="" />
                        <h6>
                          {calculateAge(new Date(`${data.birthDate}`))} years
                          old, {data.gender === "mr" ? "Male" : "Female"}
                        </h6>
                      </li>
                      <li>
                        <img src={coloredPhoneIcon} alt="" />
                        <p
                          onClick={() => setShow(!show)}
                          style={
                            show
                              ? { display: "none" }
                              : {
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  textDecoration: "underline",
                                  color: "#551A8B",
                                }
                          }
                        >
                          Show
                        </p>
                        {show && (
                          <p
                            onClick={() => setShow(!show)}
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              textDecoration: "underline",
                              color: "#551A8B",
                            }}
                          >
                            {data && data.countryCode}
                            {data && data.phone}
                          </p>
                        )}
                      </li>

                      <li>
                        <img src={langIcon} alt="" />
                        {data.languages && data.languages.length > 0
                          ? data.languages.map((lang, index) => (
                              <h6 key={index}>{lang},</h6>
                            ))
                          : null}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 p-profile">
                  <div className="description-profile">
                    <h4>Description</h4>
                    <p>{data.description}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 p-profile">
                  <div className="occupations-profile">
                    <h4>Occupations</h4>
                    {data.occupation && data.occupation.length > 0
                      ? data.occupation.map((occupation, index) => (
                          <p key={index}>{occupation}</p>
                        ))
                      : null}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="hr-section-16">
        <div className="container">
          <h4>My services</h4>
          <div className="row">
            {loadingMentorProfileCourses ? (
              <Loader></Loader>
            ) : errorMentorProfileCourses ? (
              <ErrorMessage style={{ width: "100vw" }}>{error}</ErrorMessage>
            ) : (
              <>
                {dataMentorProfileCourses.items &&
                  dataMentorProfileCourses.items.map((course) => (
                    <CourseCard course={course} key={course._id}></CourseCard>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
      <section className="hr-section-17">
        <div className="container">
          <div className="Certificates">
            <h4>Certificates</h4>
            {data.certificates && data.certificates.length > 0
              ? data.certificates.map((certificate, index) => (
                  <p key={index}>- {certificate}</p>
                ))
              : "No certificates"}
          </div>
        </div>
      </section>
      <section className="hr-section-18">
        <div className="container">
          <h4>Reviews</h4>
          <div className="row">
            {data.topReviewsId && data.topReviewsId.length > 0
              ? data.topReviewsId.map((review) => (
                  <Reviews
                    review={review}
                    path="mentorProfile"
                    key={review._id}
                  ></Reviews>
                ))
              : "No Reviews"}
          </div>
          <div className="view-more">
            <Link to="">View more reviews</Link>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default MentorProfileExploreScreen;
