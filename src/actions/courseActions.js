import axios from "axios";
import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseConstants";

export const listCourses = (
  keyword = "",
  pageNumber = "",
  genre = "",
  sortby = "",
  ratings = ""
) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/courses?pageNumber=${pageNumber}&keyword=${keyword}&genre=${genre}&sortby=${sortby}&ratings=${ratings}`
    );
    dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
