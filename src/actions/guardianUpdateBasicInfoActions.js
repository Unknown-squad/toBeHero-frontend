import axios from "axios";
import {
  GUARDIAN_UPDATE_BASIC_INFO_FAIL,
  GUARDIAN_UPDATE_BASIC_INFO_REQUEST,
  GUARDIAN_UPDATE_BASIC_INFO_SUCCESS,
} from "../constants/guardianUpdateBasicInfoConstants";

export const guardianUpdateBasicInfoActions =
  ({ fullName, email, phone, countryCode, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GUARDIAN_UPDATE_BASIC_INFO_REQUEST });
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/guardian/basic-info`,
        {
          method: "guardain.basicInfo.put",
          params: {
            fullName,
            email,
            phone,
            countryCode,
            password,
          },
        },
        { withCredentials: true }
      );

      dispatch({
        type: GUARDIAN_UPDATE_BASIC_INFO_SUCCESS,
        payload: data,
      });
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
        type: GUARDIAN_UPDATE_BASIC_INFO_FAIL,
        payload: err,
      });
    }
  };
