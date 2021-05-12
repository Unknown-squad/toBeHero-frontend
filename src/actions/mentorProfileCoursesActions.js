import axios from "axios";
import {
  MENTOR_PROFILE_COURSES_LIST_FAIL,
  MENTOR_PROFILE_COURSES_LIST_REQUEST,
  MENTOR_PROFILE_COURSES_LIST_SUCCESS,
} from "../constants/mentorProfileCoursesConstants";

export const listCourses = (mentorId) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_PROFILE_COURSES_LIST_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/mentor/courses/${mentorId}`
    );
    // console.log(data);
    dispatch({
      type: MENTOR_PROFILE_COURSES_LIST_SUCCESS,
      payload: data,
      // currentPage: currentPage,
      // totalPages: totalPages,
    });
  } catch (error) {
    dispatch({
      type: MENTOR_PROFILE_COURSES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
