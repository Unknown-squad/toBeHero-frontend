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
import { listCourses } from "../../actions/courseActions";
import Loader from "../../components/Loader";

const ExploreScreen = ({ match }) => {
  const genre = match.params.genre || "";
  const sortby = match.params.sortby || "";
  const ratings = match.params.ratings || "";
  const pageNumber = match.params.pageNumber || 1;
  console.log(match.params);
  const courseList = useSelector((state) => state.courseList);
  const { loading, error, data, currentPage, totalPages } = courseList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses(pageNumber, genre, sortby, ratings));
  }, [dispatch, pageNumber, genre, sortby, ratings]);
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
