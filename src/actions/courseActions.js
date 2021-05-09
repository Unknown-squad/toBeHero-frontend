import axios from "axios";
import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseConstants";

export const listCourses = (
  pageNumber = "",
  genre = "",
  sortby = "",
  ratings = ""
) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const { data, currentPage, totalPages } = await axios.get(
      `http://localhost:5000/api/v1/courses?page=${pageNumber}&genre=${genre}&sortby=${sortby}&ratings=${ratings}`
    );
    console.log(data);
    dispatch({
      type: COURSE_LIST_SUCCESS,
      payload: data,
      currentPage: currentPage,
      totalPages: totalPages,
    });
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
