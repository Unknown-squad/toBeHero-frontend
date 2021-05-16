import axios from "axios";
import {
  GUARDIAN_REGISTER_FAIL,
  GUARDIAN_REGISTER_REQUEST,
  GUARDIAN_REGISTER_SUCCESS,
} from "../constants/guardianRegisterConstants";

export const guardianRegisterActions =
  (fullName, email, password, phone, countryCode) => async (dispatch) => {
    try {
      dispatch({ type: GUARDIAN_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/signup/guardian",
        {
          method: "signup.guardian.post",
          params: {
            fullName,
            email,
            password,
            phone,
            countryCode,
          },
        },
        config
      );
      dispatch({ type: GUARDIAN_REGISTER_SUCCESS, payload: data });

      //dispatch guardian login
      localStorage.setItem("guardianInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: GUARDIAN_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
