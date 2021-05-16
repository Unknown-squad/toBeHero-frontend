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
    dispatch({
      type: MENTOR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
