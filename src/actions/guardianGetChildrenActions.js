import axios from "axios";

import {
  GUARDIAN_GET_CHILDREN_FAIL,
  GUARDIAN_GET_CHILDREN_REQUEST,
  GUARDIAN_GET_CHILDREN_SUCCESS,
} from "../constants/guardianGetChildrenConstants";

export const guardianGetChildrenActions = () => async (dispatch) => {
  try {
    dispatch({ type: GUARDIAN_GET_CHILDREN_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/guardian/children`,
      { withCredentials: true }
    );

    dispatch({
      type: GUARDIAN_GET_CHILDREN_SUCCESS,
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
      type: GUARDIAN_GET_CHILDREN_FAIL,
      payload: err,
    });
  }
};
