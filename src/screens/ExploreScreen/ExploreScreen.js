import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import ExploreHeader from "../../components/ExploreHeader";
import ExploreSlider from "../../components/ExploreSlider";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import Paginate from "../../components/Paginate";
import SearchBox from "../../components/SearchBox";
import "./ExploreScreen.scss";

const ExploreScreen = () => {
  return (
    <>
      <ExploreHeader></ExploreHeader>
      <SearchBox></SearchBox>
      <ExploreSlider></ExploreSlider>
      <Filter></Filter>
      <section class="hr-section-14">
        <div class="container">
          <div class="row">
            <CourseCard></CourseCard>
          </div>
          <Paginate></Paginate>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ExploreScreen;
