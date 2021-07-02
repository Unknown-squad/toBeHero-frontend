import axios from "axios";
import {
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
} from "../constants/getReviewsForExploreServiceConstants";

export const getReviewsForExploreServiceActions =
  (courseId) => async (dispatch) => {
    try {
      dispatch({ type: GET_REVIEWS_REQUEST });

      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/reviews/${courseId}`
      );

      dispatch({
        type: GET_REVIEWS_SUCCESS,
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
        type: GET_REVIEWS_FAIL,
        payload: err,
      });
    }
  };
