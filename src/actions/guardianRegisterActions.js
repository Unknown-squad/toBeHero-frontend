import axios from "axios";
import { GUARDIAN_LOGIN_SUCCESS } from "../constants/guardianLoginConstants";
import {
  GUARDIAN_REGISTER_FAIL,
  GUARDIAN_REGISTER_REQUEST,
  GUARDIAN_REGISTER_SUCCESS,
} from "../constants/guardianRegisterConstants";

export const guardianRegisterActions =
  (fullName, email, password, countryCode, phone) => async (dispatch) => {
    try {
      dispatch({ type: GUARDIAN_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/guardian/signup`,
        {
          method: "signup.guardian.post",
          params: {
            fullName,
            email,
            password,
            phone,
            countryCode,
            isVerify: true,
          },
        },
        { withCredentials: true },
        config
      );
      dispatch({ type: GUARDIAN_REGISTER_SUCCESS, payload: data });

      dispatch({
        type: GUARDIAN_LOGIN_SUCCESS,
        payload: data,
      });
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
        type: GUARDIAN_REGISTER_FAIL,
        payload: err,
      });
    }
  };
