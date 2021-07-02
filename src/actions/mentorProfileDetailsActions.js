import axios from "axios";
import {
  MENTOR_PROFILE_DETAILS_FAIL,
  MENTOR_PROFILE_DETAILS_REQUEST,
  MENTOR_PROFILE_DETAILS_SUCCESS,
} from "../constants/mentorProfileDetailsConstants";

export const mentorProfileDetails = (mentorId) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_PROFILE_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/mentor/profile/${mentorId}`,
      { withCredentials: true },
      config
    );
    dispatch({ type: MENTOR_PROFILE_DETAILS_SUCCESS, payload: data });
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
      type: MENTOR_PROFILE_DETAILS_FAIL,
      payload: err,
    });
  }
};
