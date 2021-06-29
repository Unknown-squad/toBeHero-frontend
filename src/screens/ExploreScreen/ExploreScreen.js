import React, { useEffect } from "react";
import CourseCard from "../../components/CourseCard";
import ExploreHeader from "../../components/ExploreHeader";
import ExploreSlider from "../../components/ExploreSlider";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Paginate from "../../components/Paginate";
import SearchBox from "../../components/SearchBox";
import "./ExploreScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { listCourses } from "../../actions/courseListActions";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Meta from "../../components/Meta";

const ExploreScreen = ({ location, history }) => {
  const genre = new URLSearchParams(location.search).get("genre") || "";
  const sortby = new URLSearchParams(location.search).get("sortby") || "";
  const ratings = new URLSearchParams(location.search).get("ratings") || "";
  const pageNumber = new URLSearchParams(location.search).get("page") || 1;
  // const page = new URLSearchParams(location.search).get("page");
  // console.log(page);
  const courseList = useSelector((state) => state.courseList);
  const { loading, error, data, totalPages, currentPage } = courseList;
  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { guardianInfo } = guardianLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCourses(pageNumber, genre, sortby, ratings));
  }, [dispatch, pageNumber, genre, sortby, ratings]);
  return (
    <>
      <Meta title="ToBeHero | Explore"></Meta>
      {mentorInfo ? (
        <MentorHomeHeader></MentorHomeHeader>
      ) : guardianInfo ? (
        <GuardianHomeHeader></GuardianHomeHeader>
      ) : (
        <ExploreHeader></ExploreHeader>
      )}
      <SearchBox></SearchBox>
      <ExploreSlider history={history}></ExploreSlider>
      <Filter history={history}></Filter>
      <section className="hr-section-14">
        <div className="container">
          {loading ? (
            <Loader></Loader>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <>
              <div className="row">
                {data.items.map((course) => (
                  <div key={course._id} className="col-lg-3 col-md-6 col-12">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
              <Paginate
                location={location}
                totalPages={totalPages}
                currentPage={currentPage}
              ></Paginate>
            </>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ExploreScreen;
