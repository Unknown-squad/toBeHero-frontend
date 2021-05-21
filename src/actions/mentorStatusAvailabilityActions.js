import axios from "axios";
import {
  MENTOR_STATUS_FAIL,
  MENTOR_STATUS_REQUEST,
  MENTOR_STATUS_SUCCESS,
} from "../constants/mentorStatusAvailabilityConstants";

export const mentorStatusAvailabilityActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_STATUS_REQUEST });
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/mentor/availability",
      { withCredentials: true }
    );

    dispatch({
      type: MENTOR_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    let err = "";
    if (error.response) {
      // Request made and server responded
      err = error.response.data.error.message;
    } else if (error.request) {
      // The request was made but no response was received
      err = error.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      err = error.message;
    }
    dispatch({
      type: MENTOR_STATUS_FAIL,
      payload: err,
    });
  }
};
