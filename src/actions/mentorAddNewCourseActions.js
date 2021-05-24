import axios from "axios";
import {
  MENTOR_ADD_NEW_COURSE_FAIL,
  MENTOR_ADD_NEW_COURSE_REQUEST,
  MENTOR_ADD_NEW_COURSE_SUCCESS,
} from "../constants/mentorAddNewCourseConstants";

export const mentorAddNewCourseActions =
  ({ title, price, description, topicsList, genre }) =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_ADD_NEW_COURSE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/mentor/dashboard/new-course",
        {
          method: "course.post",
          params: {
            title,
            price,
            description,
            topicsList,
            genre,
          },
        },
        { withCredentials: true },
        config
      );
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
