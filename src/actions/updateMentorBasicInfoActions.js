import axios from "axios";
import { MENTOR_LOGIN_SUCCESS } from "../constants/mentorLoginConstants";
import {
  MENTOR_UPDATE_BASICINFO_FAIL,
  MENTOR_UPDATE_BASICINFO_REQUEST,
  MENTOR_UPDATE_BASICINFO_SUCCESS,
} from "../constants/mentorUpdateBasicInfoConstants";

export const updateMentorBasicInfoActions = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_UPDATE_BASICINFO_REQUEST });

    const { data } = await axios.put(
      `http://localhost:5000/api/v1/mentor/dashboard/basic-info`,
      { withCredentials: true }
    );
    dispatch({ type: MENTOR_UPDATE_BASICINFO_SUCCESS, payload: data });
    dispatch({ type: MENTOR_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("mentorInfo", JSON.stringify(data));
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
      type: MENTOR_UPDATE_BASICINFO_FAIL,
      payload: err,
    });
  }
};
