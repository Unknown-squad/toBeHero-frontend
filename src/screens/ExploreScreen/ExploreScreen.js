import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import ExploreHeader from "../../components/ExploreHeader";
import ExploreSlider from "../../components/ExploreSlider";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
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
          <ul class="list-card">
            <li class="active">
              <Link to="">1</Link>
            </li>
            <li>
              <Link to="">2</Link>
            </li>
            <li>
              <Link to="">3</Link>
            </li>
            <li>
              <Link to="">4</Link>
            </li>
            <li>
              <Link to="">5</Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ExploreScreen;
