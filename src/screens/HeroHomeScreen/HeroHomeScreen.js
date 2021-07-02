import React from "react";
import "./HeroHomeScreen.scss";
import HeroHomeHeader from "../../components/HeroHomeHeader";
import HeroClassroom from "../../components/HeroClassroom";
import Meta from "../../components/Meta";
const HeroHomeScreen = ({ match }) => {
  return (
    <>
      <Meta title="Welcome Our Hero !"></Meta>
      <HeroHomeHeader></HeroHomeHeader>
      <section className="hr-section-27">
        <h4>Classroom</h4>
        <HeroClassroom match={match}></HeroClassroom>
      </section>
    </>
  );
};

export default HeroHomeScreen;
