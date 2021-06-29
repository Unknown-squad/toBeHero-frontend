import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keyword" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "ToBeHero | Welcome",
  description: "Mentorship For Children",
  keywords:
    "mentorShip, learning, freelancing, freelance, better learn, education, mentor, child, online learning",
};
export default Meta;
