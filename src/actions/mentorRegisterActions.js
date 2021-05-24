import axios from "axios";
import {
  MENTOR_REGISTER_FAIL,
  MENTOR_REGISTER_REQUEST,
  MENTOR_REGISTER_SUCCESS,
} from "../constants/mentorRegisterConstants";

export const mentorRegisterActions =
  ({
    gender,
    fullName,
    email,
    password,
    countryCode,
    phone,
    birthDate,
    languages,
    occupation,
    certificates,
    description,
    picture,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/mentor/signup`,
        {
          method: "signup.mentor.step1.post",
          params: {
            fullName,
            gender,
            email,
            password,
            phone,
            countryCode,
            birthDate,
            languages,
            occupation,
            certificates,
            description,
            picture,
            isVerify: true,
          },
        },
        { withCredentials: true },
        { ...config }
      );
      dispatch({ type: MENTOR_REGISTER_SUCCESS, payload: data });

      //dispatch mentor login
      localStorage.setItem("mentorInfo", JSON.stringify(data));

      localStorage.removeItem("mentorDraft");
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
        type: MENTOR_REGISTER_FAIL,
        payload: err,
      });
    }
  };
