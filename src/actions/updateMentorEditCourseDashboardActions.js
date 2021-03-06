import axios from "axios";
import {
  MENTOR_UPDATE_COURSE_FAIL,
  MENTOR_UPDATE_COURSE_REQUEST,
  MENTOR_UPDATE_COURSE_SUCCESS,
} from "../constants/mentorUpdateCourseDashboardConstants";

export const updateMentorEditCourseDashboardActions =
  (course, files) => async (dispatch) => {
    try {
      dispatch({ type: MENTOR_UPDATE_COURSE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/courses/${course._id}`,
        {
          method: "course.put",
          params: {
            ...course,
          },
        },

        { withCredentials: true },
        config
      );
      dispatch({ type: MENTOR_UPDATE_COURSE_SUCCESS, payload: data });
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
        type: MENTOR_UPDATE_COURSE_FAIL,
        payload: err,
      });
    }
  };
