import React from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import GuardianSettingsForm from "../../components/GuardianSettingsForm";
import "./GuardianSettingsScreen.scss";
const GuardianSettingsScreen = () => {
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section class="hr-section-25">
        <div class="container">
          <div class="guardian-settings">
            <div class="basic-guardian-settings">
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
