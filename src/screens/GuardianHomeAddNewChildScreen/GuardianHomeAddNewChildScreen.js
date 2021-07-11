import React, { useEffect } from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import GuardianHerosColumn from "../../components/GuardianHerosColumn";
import { Route } from "react-router-dom";
import GuardianAddNewChildForm from "../../components/GuardianAddNewChildForm";

import "./GuardianHomeAddNewChildScreen.scss";
import Meta from "../../components/Meta";
import { useDispatch } from "react-redux";
import { HERO_REGISTER_RESET_ERROR } from "../../constants/heroRegisterConstants";
const GuardianHomeAddNewChildScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: HERO_REGISTER_RESET_ERROR });
  }, [dispatch]);
  return (
    <>
      <Meta title="Guardian | Add New Child"></Meta>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-23">
        <div className="container">
          <h3>Children</h3>
          <div className="guardian-home">
            <GuardianHerosColumn></GuardianHerosColumn>
            <div className="basic-info-child">
              <Route
                path="/guardian/home/addchild"
                component={() => (
                  <GuardianAddNewChildForm></GuardianAddNewChildForm>
                )}
              ></Route>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default GuardianHomeAddNewChildScreen;
