import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import ExploreHeader from "../../components/ExploreHeader";
import Footer from "../../components/Footer/Footer";

const ExploreScreen = () => {
  return (
    <>
      <ExploreHeader></ExploreHeader>
      <section class="hr-section-14">
        <div class="container">
          <div class="row">
            <CourseCard></CourseCard>
            <ul class="list-card">
              <li class="active">
                <Link to="">1</Link>
              </li>
              <li>
                <Link href="">2</Link>
              </li>
              <li>
                <Link href="">3</Link>
              </li>
              <li>
                <Link href="">4</Link>
              </li>
              <li>
                <Link href="">5</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ExploreScreen;
