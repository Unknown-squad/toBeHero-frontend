import axios from "axios";
import {
  MENTOR_PROFILE_DETAILS_FAIL,
  MENTOR_PROFILE_DETAILS_REQUEST,
  MENTOR_PROFILE_DETAILS_SUCCESS,
} from "../constants/mentorProfileDetailsConstants";

export const mentorProfileDetails = (mentorId) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_PROFILE_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/mentor/profile/${mentorId}`
    );
    dispatch({ type: MENTOR_PROFILE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MENTOR_PROFILE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
