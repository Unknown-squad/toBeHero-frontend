import axios from "axios";
import {
  MENTOR_STATUS_FAIL,
  MENTOR_STATUS_REQUEST,
  MENTOR_STATUS_SUCCESS,
} from "../constants/mentorStatusAvailabilityConstants";
import {
  MENTOR_UPDATE_STATUS_FAIL,
  MENTOR_UPDATE_STATUS_REQUEST,
  MENTOR_UPDATE_STATUS_SUCCESS,
} from "../constants/mentorStatusUpdateAvailabilityConstants";

export const mentorStatusAvailabilityActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_STATUS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/mentor/availability`,
      { withCredentials: true }
    );

    dispatch({
      type: MENTOR_STATUS_SUCCESS,
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
      type: MENTOR_STATUS_FAIL,
      payload: err,
    });
  }
};

export const mentorStatusUpdateAvailabilityActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_UPDATE_STATUS_REQUEST });
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/mentor/availability`,
      {},
      { withCredentials: true }
    );

    dispatch({
      type: MENTOR_UPDATE_STATUS_SUCCESS,
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
      type: MENTOR_UPDATE_STATUS_FAIL,
      payload: err,
    });
  }
};
