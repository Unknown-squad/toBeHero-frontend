import React from "react";
import GuardianGetBasicInfoForHeroForm from "../../components/GuardianGetBasicInfoForHeroForm";
import Footer from "../../components/Footer";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";
import { Route } from "react-router-dom";
import EnrolledCoursesForChild from "../../components/EnrolledCoursesForChild";
import Meta from "../../components/Meta";
import { useRouteMatch } from "react-router";

const GuardianHomeGetChildInfoScreen = () => {
  const match = useRouteMatch("/guardian/home/child/:childId");
  //   const childId = match.params.id;

  return (
    <>
      <Meta title="Guardian | Child Info"></Meta>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-23">
        <div className="container">
          <h3>Children</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <div className="basic-info-child">
              <Route
                path={`/guardian/home/child/:childId`}
                component={() => (
                  <GuardianGetBasicInfoForHeroForm
                    match={match}
                  ></GuardianGetBasicInfoForHeroForm>
                )}
              ></Route>
              {/* <GuardianGetBasicInfoForHeroForm
                childId={childId}
              ></GuardianGetBasicInfoForHeroForm> */}
              <EnrolledCoursesForChild match={match}></EnrolledCoursesForChild>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default GuardianHomeGetChildInfoScreen;
