import axios from "axios";
import {
  UPDATE_PICTURE_FOR_MENTOR_FAIL,
  UPDATE_PICTURE_FOR_MENTOR_REQUEST,
  UPDATE_PICTURE_FOR_MENTOR_SUCCESS,
} from "../constants/updatePictureForMentorConstants";

export const updatePictureForMentorActions =
  (dataArray) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PICTURE_FOR_MENTOR_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios({
        ...config,
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/mentor/dashboard/picture`,
        data: dataArray,
        withCredentials: true,
      });

      dispatch({ type: UPDATE_PICTURE_FOR_MENTOR_SUCCESS, payload: data });
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
        type: UPDATE_PICTURE_FOR_MENTOR_FAIL,
        payload: err,
      });
    }
  };
