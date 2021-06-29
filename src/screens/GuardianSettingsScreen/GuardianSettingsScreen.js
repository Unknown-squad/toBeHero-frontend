import React from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import GuardianSettingsForm from "../../components/GuardianSettingsForm";
import "./GuardianSettingsScreen.scss";
import Meta from "../../components/Meta";
const GuardianSettingsScreen = () => {
  return (
    <>
      <Meta title="Guardian | Settings"></Meta>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-25">
        <div className="container">
          <div className="guardian-settings">
            <div className="basic-guardian-settings">
              <GuardianSettingsForm></GuardianSettingsForm>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default GuardianSettingsScreen;
