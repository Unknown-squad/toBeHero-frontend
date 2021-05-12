import axios from "axios";
import {
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from "../constants/courseDetailsConstants";

export const courseDetailsAction = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/courses/${courseId}`
    );

    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
