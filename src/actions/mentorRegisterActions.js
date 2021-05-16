import axios from "axios";
import {
  MENTOR_REGISTER_FAIL,
  MENTOR_REGISTER_REQUEST,
  MENTOR_REGISTER_SUCCESS,
} from "../constants/mentorRegisterConstants";

export const mentorRegisterActions =
  (
    gender,
    fullName,
    email,
    password,
    countryCode,
    Phone,
    birthDate,
    languages,
    occupation,
    certificates,
    description,
    picture
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/signup/mentor`,
        {
          method: "signup.mentor.step1.post",
          params: {
            fullName,
            gender,
            email,
            password,
            Phone,
            countryCode,
            birthDate,
            languages,
            occupation,
            certificates,
            description,
            picture,
          },
        },
        config
      );
      dispatch({ type: MENTOR_REGISTER_SUCCESS, payload: data });

      //dispatch mentor login
      localStorage.setItem("mentorInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: MENTOR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
