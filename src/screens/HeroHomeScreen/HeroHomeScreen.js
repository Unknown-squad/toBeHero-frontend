import React from "react";
import "./HeroHomeScreen.scss";
import HeroHomeHeader from "../../components/HeroHomeHeader";
import HeroClassroom from "../../components/HeroClassroom";
import Meta from "../../components/Meta";
import Headroom from "react-headroom";
const HeroHomeScreen = ({ match }) => {
  return (
    <>
      <Meta title="Welcome Our Hero !"></Meta>
      <Headroom style={{ zIndex: "999999" }}>
        <HeroHomeHeader homeScreen={true}></HeroHomeHeader>
      </Headroom>
      <section className="hr-section-27">
        <h4>Classroom</h4>
        <HeroClassroom match={match}></HeroClassroom>
      </section>
    </>
  );
};

export default HeroHomeScreen;
