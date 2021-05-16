import axios from "axios";
import {
  HERO_LOGIN_FAIL,
  HERO_LOGIN_REQUEST,
  HERO_LOGIN_SUCCESS,
} from "../constants/heroLoginConstants";

export const heroLoginActions = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: HERO_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      {
        method: "login.child.post",
        params: {
          userName,
          password,
          person: "child",
        },
      },
      config
    );
    dispatch({ type: HERO_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("heroInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: HERO_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
