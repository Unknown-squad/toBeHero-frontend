import React, { useEffect } from "react";
import HeroHomeHeader from "../../components/HeroHomeHeader";
import "./HeroLiveCallScreen.scss";
import Meta from "../../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsForChildHomeActions } from "../../actions/getSubscriptionsForChildHomeActions";
import iconLoading from "../../images/icon-loading.svg";

const HeroLiveCallScreen = ({ match }) => {
  const appointmentId = match.params.appointmentId;
  const subscriptionId = match.params.subscriptionId;
  const appointmentTitle = match.params.appointmentTitle;
  const getSubscriptionsForChildHome = useSelector(
    (state) => state.getSubscriptionsForChildHome
  );
  const { loading, error, data } = getSubscriptionsForChildHome;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.items[0].mentorId.fullName) {
      dispatch(getSubscriptionsForChildHomeActions());
    }
  }, [dispatch, data]);
  return (
    <>
      <Meta title="Welcome Our Hero !"></Meta>
      <HeroHomeHeader></HeroHomeHeader>
      <section className="hr-section-22">
        <h4>{appointmentTitle}</h4>
        <div className="container">
          <div className="name-plate">
            <div className="mentor-name-plate">
              <div className="plate-title">
                <p>Mentor</p>
              </div>
              <div className="inner-name-plate">
                <p>{data.items[0].mentorId.fullName}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="mentor-control-live">
                <div className="load-live">
                  <img src={iconLoading} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="notes-container">
                <div className="notes-form">
                  <form action="">
                    <div className="notes-title">
                      <label htmlFor="Title">Notes</label>
                      <textarea
                        name="Title"
                        id="Title"
                        cols="5"
                        rows="11"
                        placeholder="write your notes here …..."
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="start-cancel-session">
                  <button className="btn btn-purple-400 btn-start">
                    Join now<span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroLiveCallScreen;
