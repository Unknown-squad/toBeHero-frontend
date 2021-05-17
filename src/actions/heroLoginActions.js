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
      type: HERO_LOGIN_FAIL,
      payload: err,
    });
  }
};
