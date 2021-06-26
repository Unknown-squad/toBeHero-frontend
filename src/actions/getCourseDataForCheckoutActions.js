import axios from "axios";
import {
  GET_COURSE_DATA_FOR_CHECKOUT_FAIL,
  GET_COURSE_DATA_FOR_CHECKOUT_REQUEST,
  GET_COURSE_DATA_FOR_CHECKOUT_SUCCESS,
} from "../constants/getCourseDataForCheckoutConstants";

export const getCourseDataForCheckoutActions =
  (courseId) => async (dispatch) => {
    try {
      dispatch({ type: GET_COURSE_DATA_FOR_CHECKOUT_REQUEST });

      const { data } = await axios.get(
        `http://localhost:5000/api/v1/guardian/${courseId}`,
        { withCredentials: true }
      );

      dispatch({
        type: GET_COURSE_DATA_FOR_CHECKOUT_SUCCESS,
        payload: data,
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
        type: GET_COURSE_DATA_FOR_CHECKOUT_FAIL,
        payload: err,
      });
    }
  };
