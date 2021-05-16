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
      config
    );
    dispatch({ type: GUARDIAN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("guardianInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GUARDIAN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
