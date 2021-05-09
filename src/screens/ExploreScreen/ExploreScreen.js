import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import ExploreHeader from "../../components/ExploreHeader";
import ExploreSlider from "../../components/ExploreSlider";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Paginate from "../../components/Paginate";
import SearchBox from "../../components/SearchBox";
import "./ExploreScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { listCourses } from "../../actions/courseActions";
import Loader from "../../components/Loader";

const ExploreScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const courseList = useSelector((state) => state.courseList);
  const { loading, error, data, pages, page } = courseList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses(keyword, pageNumber));
  }, [dispatch, pageNumber, keyword]);
  return (
    <>
      <ExploreHeader></ExploreHeader>
      <SearchBox></SearchBox>
      <ExploreSlider></ExploreSlider>
      <Filter></Filter>
      <section className="hr-section-14">
        <div className="container">
          {loading ? (
            <Loader></Loader>
          ) : error ? (
            console.log({ error })
          ) : (
            <>
              <div className="row">
                {data.items.map((course) => (
                  <div key={course._id} className="col-lg-3 col-md-6 col-12">
                    <CourseCard course={course}></CourseCard>
                  </div>
                ))}
              </div>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
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
