import axios from "axios";
import {
  GUARDIAN_LOGIN_FAIL,
  GUARDIAN_LOGIN_REQUEST,
  GUARDIAN_LOGIN_SUCCESS,
} from "../constants/guardianLoginConstants";

export const guardianLoginActions = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: GUARDIAN_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      {
        method: "login.guardian.post",
        params: {
          email,
          password,
          person: "guardian",
        },
      },
      { withCredentials: true },
      config
    );
    dispatch({ type: GUARDIAN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("guardianInfo", JSON.stringify(data));
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
      type: GUARDIAN_LOGIN_FAIL,
      payload: err,
    });
  }
};
