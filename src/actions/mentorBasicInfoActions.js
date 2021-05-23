import axios from "axios";
import {
  MENTOR_BASICINFO_FAIL,
  MENTOR_BASICINFO_REQUEST,
  MENTOR_BASICINFO_SUCCESS,
} from "../constants/mentorBasicInfoConstants";

export const getMentorBasicInfoActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_BASICINFO_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/mentor/dashboard/basic-info`,
      { withCredentials: true }
    );
    dispatch({ type: MENTOR_BASICINFO_SUCCESS, payload: data });
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
      type: MENTOR_BASICINFO_FAIL,
      payload: err,
    });
  }
};
