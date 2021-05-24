import axios from "axios";

import {
  MENTOR_EDIT_COURSE_DETAILS_FAIL,
  MENTOR_EDIT_COURSE_DETAILS_REQUEST,
  MENTOR_EDIT_COURSE_DETAILS_SUCCESS,
} from "../constants/mentorEditCourseDetailsConstants";

export const getMentorEditCourseDetailsDashboardActions =
  (courseId) => async (dispatch) => {
    try {
      dispatch({ type: MENTOR_EDIT_COURSE_DETAILS_REQUEST });
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/courses/${courseId}`,
        { withCredentials: true }
      );
      dispatch({ type: MENTOR_EDIT_COURSE_DETAILS_SUCCESS, payload: data });
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
        type: MENTOR_EDIT_COURSE_DETAILS_FAIL,
        payload: err,
      });
    }
  };
