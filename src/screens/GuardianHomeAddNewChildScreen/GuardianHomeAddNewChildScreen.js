import React from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";
import { Route } from "react-router-dom";
import GuardianAddNewChildForm from "../../components/GuardianAddNewChildForm";

import "./GuardianHomeAddNewChildScreen.scss";
const GuardianHomeAddNewChildScreen = () => {
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-23">
        <div className="container">
          <h3>Reviews</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <Route
              path="/guardian/home/addchild"
              component={GuardianAddNewChildForm}
            ></Route>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default GuardianHomeAddNewChildScreen;
