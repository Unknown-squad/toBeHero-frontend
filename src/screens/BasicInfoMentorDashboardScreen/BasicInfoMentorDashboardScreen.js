import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import MentorHomeHeader from "../../components/MentorHomeHeader";
import { Route } from "react-router-dom";
import MentorDashboardNavLinks from "../../components/MentorDashboardNavLinks";
import "./BasicInfoMentorDashboardScreen.scss";
import BasicInfoMentorForm from "../../components/BasicInfoMentorForm";
import { useHistory } from "react-router";
import Meta from "../../components/Meta";
import { MENTOR_UPDATE_BASICINFO_RESET } from "../../constants/mentorUpdateBasicInfoConstants";
import { useDispatch } from "react-redux";

const BasicInfoMentorDashboardScreen = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: MENTOR_UPDATE_BASICINFO_RESET });
  }, [dispatch]);

  return (
    <>
      <Meta title="Mentor | Dashboard Info"></Meta>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-21">
        <div className="container">
          <div className="mentor-dashboard">
            <MentorDashboardNavLinks></MentorDashboardNavLinks>
            <div className="dashboard-basic-info">
              <Route
                path="/mentor/dashboard/basicinfo"
                component={() => <BasicInfoMentorForm history={history} />}
              ></Route>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default BasicInfoMentorDashboardScreen;
