import React from "react";
import CourseCard from "../../components/CourseCard";
import MentorCertificates from "../../components/MentorCertificates";
import MentorProfileExploreHeader from "../../components/MentorProfileExploreHeader";
import MentorProfileInfoCard from "../../components/MentorProfileInfoCard";

import "./MentorProfileExploreScreen.scss";
const MentorProfileExploreScreen = () => {
  return (
    <>
      <MentorProfileExploreHeader></MentorProfileExploreHeader>
      <MentorProfileInfoCard></MentorProfileInfoCard>
      {/* <CourseCard></CourseCard> */}
      <MentorCertificates></MentorCertificates>
    </>
  );
};

export default MentorProfileExploreScreen;
