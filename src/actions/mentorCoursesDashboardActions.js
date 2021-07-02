import axios from "axios";
import {
  MENTOR_COURSES_DASHBOARD_FAIL,
  MENTOR_COURSES_DASHBOARD_REQUEST,
  MENTOR_COURSES_DASHBOARD_SUCCESS,
} from "../constants/mentorCoursesDashboardConstants";

export const getMentorCoursesDashboardActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_COURSES_DASHBOARD_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/mentor/dashboard/courses`,
      { withCredentials: true }
    );
    dispatch({ type: MENTOR_COURSES_DASHBOARD_SUCCESS, payload: data });
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
      type: MENTOR_COURSES_DASHBOARD_FAIL,
      payload: err,
    });
  }
};
