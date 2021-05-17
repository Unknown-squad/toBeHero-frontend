import axios from "axios";
import {
  MENTOR_LOGIN_FAIL,
  MENTOR_LOGIN_REQUEST,
  MENTOR_LOGIN_SUCCESS,
} from "../constants/mentorLoginConstants";

export const mentorLoginActions = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      {
        method: "login.mentor.post",
        params: {
          email,
          password,
          person: "mentor",
        },
      },
      config
    );
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
      type: MENTOR_LOGIN_FAIL,
      payload: err,
    });
  }
};
