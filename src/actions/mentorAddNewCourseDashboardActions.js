import axios from "axios";
import {
  MENTOR_ADD_NEW_COURSE_FAIL,
  MENTOR_ADD_NEW_COURSE_REQUEST,
  MENTOR_ADD_NEW_COURSE_SUCCESS,
} from "../constants/mentorAddNewCourseDashboardConstants";

export const mentorAddNewCourseDashboardActions =
  (dataArray) => async (dispatch) => {
    try {
      dispatch({ type: MENTOR_ADD_NEW_COURSE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios({
        ...config,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/mentor/dashboard/new-course`,
        data: dataArray,
        withCredentials: true,
      });

      dispatch({ type: MENTOR_ADD_NEW_COURSE_SUCCESS, payload: data });
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
        type: MENTOR_ADD_NEW_COURSE_FAIL,
        payload: err,
      });
    }
  };
