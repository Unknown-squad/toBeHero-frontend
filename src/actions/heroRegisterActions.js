import axios from "axios";
import {
  HERO_REGISTER_FAIL,
  HERO_REGISTER_REQUEST,
  HERO_REGISTER_SUCCESS,
} from "../constants/heroRegisterConstants";

export const heroRegisterActions =
  ({ dataArray }) =>
  async (dispatch) => {
    try {
      dispatch({ type: HERO_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios({
        ...config,
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/guardian/new-child`,
        data: dataArray,
        withCredentials: true,
      });

      dispatch({ type: HERO_REGISTER_SUCCESS, payload: data });
      // localStorage.setItem("heroInfo", JSON.stringify(data));
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
        type: HERO_REGISTER_FAIL,
        payload: err,
      });
    }
  };
