import axios from "axios";
import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseListConstants";

export const listCourses =
  (pageNumber, genre, sortby, ratings = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: COURSE_LIST_REQUEST });
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/courses?${
          pageNumber ? `page=${pageNumber}` : "page=1"
        }${genre ? `&genre=${genre}` : ""}${sortby ? `&sortby=${sortby}` : ""}${
          ratings ? `&ratings=${ratings}` : ""
        }`
      );

      dispatch({
        type: COURSE_LIST_SUCCESS,
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
        type: COURSE_LIST_FAIL,
        payload: err,
      });
    }
  };
