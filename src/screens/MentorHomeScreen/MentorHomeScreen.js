import React, { useEffect } from "react";

import Footer from "../../components/Footer";

import MentorHomeHeader from "../../components/MentorHomeHeader";

import "./MentorHomeScreen.scss";

import MentorStatusAvailability from "../../components/MentorStatusAvailability";
import MentorHomeServiceList from "../../components/MentorHomeServiceList";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../actions/serviceListActions";

const MentorHomeScreen = () => {
  // const [status, setStatus] = useState(false);

  return (
    <>
      <MentorHomeHeader></MentorHomeHeader>

      <section className="hr-section-20">
        <div className="container">
          {/* {loadingStatusAvailable ? <Loader></Loader> : ""} */}

          <MentorStatusAvailability></MentorStatusAvailability>
        </div>
        <MentorHomeServiceList></MentorHomeServiceList>
      </section>
      <Footer></Footer>
    </>
  );
};

export default MentorHomeScreen;
