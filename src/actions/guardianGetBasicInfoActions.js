import axios from "axios";
import {
  GUARDIAN_GET_BASIC_INFO_FAIL,
  GUARDIAN_GET_BASIC_INFO_REQUEST,
  GUARDIAN_GET_BASIC_INFO_SUCCESS,
} from "../constants/guardianGetBasicInfoConstants";

export const guardianGetBasicInfoActions = () => async (dispatch) => {
  try {
    dispatch({ type: GUARDIAN_GET_BASIC_INFO_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/v1/guardian/basic-info`,
      { withCredentials: true }
    );

    dispatch({
      type: GUARDIAN_GET_BASIC_INFO_SUCCESS,
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
      type: GUARDIAN_GET_BASIC_INFO_FAIL,
      payload: err,
    });
  }
};
