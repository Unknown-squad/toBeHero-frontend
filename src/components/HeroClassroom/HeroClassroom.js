import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsForChildHomeActions } from "../../actions/getSubscriptionsForChildHomeActions";

import ErrorMessage from "../ErrorMessage";
import HeroClassroomSubscriptionCard from "../HeroClassroomSubscriptionCard";
import Loader from "../Loader";
const HeroClassroom = ({ match }) => {
  const getSubscriptionsForChildHome = useSelector(
    (state) => state.getSubscriptionsForChildHome
  );
  const { loading, error, data } = getSubscriptionsForChildHome;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptionsForChildHomeActions());
  }, [dispatch]);
  //   console.log(data.items.appointments);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage
          style={{
            color: "#004085",
            backgroundColor: "#cce5ff",
            borderColor: "#b8daff",
          }}
        >
          {error}
        </ErrorMessage>
      ) : (
        <div className="container">
          {data &&
            data.items &&
            data.items.map((course) => (
              <HeroClassroomSubscriptionCard
                course={course}
                key={course._id}
                subscriptionId={course._id}
              ></HeroClassroomSubscriptionCard>
            ))}
        </div>
      )}
    </>
  );
};

export default HeroClassroom;
