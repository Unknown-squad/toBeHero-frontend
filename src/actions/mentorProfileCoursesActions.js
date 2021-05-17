import axios from "axios";
import {
  MENTOR_PROFILE_COURSES_LIST_FAIL,
  MENTOR_PROFILE_COURSES_LIST_REQUEST,
  MENTOR_PROFILE_COURSES_LIST_SUCCESS,
} from "../constants/mentorProfileCoursesConstants";

export const mentorProfileCoursesAction = (mentorId) => async (dispatch) => {
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
      type: MENTOR_PROFILE_COURSES_LIST_FAIL,
      payload: err,
    });
  }
};
