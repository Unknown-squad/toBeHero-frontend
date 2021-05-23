import axios from "axios";
import {
  MENTOR_BALANCE_FAIL,
  MENTOR_BALANCE_REQUEST,
  MENTOR_BALANCE_SUCCESS,
} from "../constants/mentorBalanceConstants";

export const mentorBalanceActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_BALANCE_REQUEST });
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/mentor/dashboard/balance",
      { withCredentials: true }
    );

    dispatch({
      type: MENTOR_BALANCE_SUCCESS,
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
      type: MENTOR_BALANCE_FAIL,
      payload: err,
    });
  }
};
