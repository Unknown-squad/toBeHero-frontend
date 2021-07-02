import axios from "axios";
import {
  ADD_NEW_REVIEW_FAIL,
  ADD_NEW_REVIEW_REQUEST,
  ADD_NEW_REVIEW_SUCCESS,
} from "../constants/addNewReviewConstants";

export const addNewReviewActions =
  ({ courseId, rate, description }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_NEW_REVIEW_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/add-review`,
        {
          method: "review.post",
          params: {
            courseId,
            rate,
            description,
          },
        },
        { withCredentials: true },
        config
      );
      dispatch({ type: ADD_NEW_REVIEW_SUCCESS, payload: data });
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
        type: ADD_NEW_REVIEW_FAIL,
        payload: err,
      });
    }
  };
