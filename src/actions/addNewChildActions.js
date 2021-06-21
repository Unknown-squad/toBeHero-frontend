import axios from "axios";
import {
  ADD_NEW_CHILD_FAIL,
  ADD_NEW_CHILD_REQUEST,
  ADD_NEW_CHILD_SUCCESS,
} from "../constants/addNewChildConstants";

export const addNewChildActions =
  ({ fullName, userName, password, birthDate, picture }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_NEW_CHILD_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/guardian/new-child`,
        {
          method: "newChild.post",
          params: {
            fullName,
            userName,
            password,
            birthDate,
            picture,
          },
        },
        { withCredentials: true },
        config
      );

      dispatch({ type: ADD_NEW_CHILD_SUCCESS, payload: data });
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
        type: ADD_NEW_CHILD_FAIL,
        payload: err,
      });
    }
  };
