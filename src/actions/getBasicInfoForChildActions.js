import axios from "axios";
import {
  GET_BASIC_INFO_FOR_CHILD_FAIL,
  GET_BASIC_INFO_FOR_CHILD_REQUEST,
  GET_BASIC_INFO_FOR_CHILD_SUCCESS,
} from "../constants/getBasicInfoForChildConstants";

export const getBasicInfoForChildActions = (childId) => async (dispatch) => {
  try {
    dispatch({ type: GET_BASIC_INFO_FOR_CHILD_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/child/${childId}`,
      { withCredentials: true }
    );

    dispatch({
      type: GET_BASIC_INFO_FOR_CHILD_SUCCESS,
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
      type: GET_BASIC_INFO_FOR_CHILD_FAIL,
      payload: err,
    });
  }
};
