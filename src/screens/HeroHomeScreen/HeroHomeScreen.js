import React from "react";
import "./HeroHomeScreen.scss";
import HeroHomeHeader from "../../components/HeroHomeHeader";
import HeroClassroom from "../../components/HeroClassroom";
const HeroHomeScreen = () => {
  return (
    <>
      <HeroHomeHeader></HeroHomeHeader>
      <section className="hr-section-27">
        <h4>Classroom</h4>
        <HeroClassroom></HeroClassroom>
      </section>
    </>
  );
};

export default HeroHomeScreen;
