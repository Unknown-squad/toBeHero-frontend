import axios from "axios";
import { MENTOR_LOGIN_SUCCESS } from "../constants/mentorLoginConstants";
import {
  MENTOR_REGISTER_FAIL,
  MENTOR_REGISTER_REQUEST,
  MENTOR_REGISTER_SUCCESS,
} from "../constants/mentorRegisterConstants";

export const mentorRegisterActions = (dataArray) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios({
      ...config,
      method: "POST",
      url: "http://localhost:5000/api/v1/mentor/signup",
      data: dataArray,
      withCredentials: true,
    });
    dispatch({ type: MENTOR_REGISTER_SUCCESS, payload: data });

    dispatch({
      type: MENTOR_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("mentorInfo", JSON.stringify(data));

    // localStorage.removeItem("mentorDraft");
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
      type: MENTOR_REGISTER_FAIL,
      payload: err,
    });
  }
};
