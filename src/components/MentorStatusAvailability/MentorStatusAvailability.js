import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mentorStatusAvailabilityActions,
  mentorStatusUpdateAvailabilityActions,
} from "../../actions/mentorStatusAvailabilityActions";
import ErrorMessage from "../../components/ErrorMessage";

const MentorStatusAvailability = () => {
  const mentorStatus = useSelector((state) => state.mentorStatus);
  const {
    loading: loadingStatusAvailable,
    error: errorStatusAvailable,
    data: mentorStatusAvailable,
  } = mentorStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mentorStatusAvailabilityActions());
  }, [dispatch]);

  const toggleCheckbox = () => {
    dispatch(mentorStatusUpdateAvailabilityActions());
    // setStatus(!status);
  };
  console.log(mentorStatusAvailable);
  return (
    <>
      {errorStatusAvailable ? (
        <ErrorMessage>{errorStatusAvailable}</ErrorMessage>
      ) : (
        ""
      )}
      <div className="my-services-title">
        <h3>My services</h3>
        <div className="available-work">
          <p>Available to work</p>
          <input
            className="switch"
            type="checkbox"
            //   checked={mentorStatusAvailable}
            checked={mentorStatusAvailable}
            onChange={toggleCheckbox}
          />
        </div>
      </div>
    </>
  );
};

export default MentorStatusAvailability;
