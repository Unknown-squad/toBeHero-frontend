import axios from "axios";
import {
  COMPLETE_COURSE_FOR_MENTOR_FAIL,
  COMPLETE_COURSE_FOR_MENTOR_REQUEST,
  COMPLETE_COURSE_FOR_MENTOR_SUCCESS,
} from "../constants/completeCourseForMentorConstants";

export const completeCourseForMentorActions =
  (subscriptionId) => async (dispatch) => {
    try {
      dispatch({ type: COMPLETE_COURSE_FOR_MENTOR_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/mentor/complete-subscription/${subscriptionId}`,
        {},
        { withCredentials: true },
        config
      );
      dispatch({ type: COMPLETE_COURSE_FOR_MENTOR_SUCCESS, payload: data });
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
        type: COMPLETE_COURSE_FOR_MENTOR_FAIL,
        payload: err,
      });
    }
  };
