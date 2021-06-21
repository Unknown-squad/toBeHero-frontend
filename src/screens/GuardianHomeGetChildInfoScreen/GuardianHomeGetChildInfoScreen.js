import React from "react";
import GuardianGetBasicInfoForHeroForm from "../../components/GuardianGetBasicInfoForHeroForm";
import Footer from "../../components/Footer";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";
import { Route } from "react-router-dom";

const GuardianHomeGetChildInfoScreen = ({ match }) => {
  const ChildId = match.params.id;
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-23">
        <div className="container">
          <h3>Reviews</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <Route
              path={`/guardian/home/child/${ChildId}`}
              component={() => (
                <GuardianGetBasicInfoForHeroForm
                  ChildId={ChildId}
                ></GuardianGetBasicInfoForHeroForm>
              )}
            ></Route>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default GuardianHomeGetChildInfoScreen;
