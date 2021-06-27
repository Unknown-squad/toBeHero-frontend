import axios from "axios";
import {
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_FAIL,
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_REQUEST,
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_SUCCESS,
} from "../constants/getSubscriptionsForChildHomeConstants";

export const getSubscriptionsForChildHomeActions = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SUBSCRIPTIONS_FOR_CHILD_HOME_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/child/home`,
      { withCredentials: true }
    );

    dispatch({
      type: GET_SUBSCRIPTIONS_FOR_CHILD_HOME_SUCCESS,
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
      type: GET_SUBSCRIPTIONS_FOR_CHILD_HOME_FAIL,
      payload: err,
    });
  }
};
