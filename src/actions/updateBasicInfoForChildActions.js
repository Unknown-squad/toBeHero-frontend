import axios from "axios";
import {
  UPDATE_BASIC_INFO_FOR_CHILD_FAIL,
  UPDATE_BASIC_INFO_FOR_CHILD_REQUEST,
  UPDATE_BASIC_INFO_FOR_CHILD_SUCCESS,
} from "../constants/updateBasicInfoForChildConstants";

export const updateBasicInfoForChildActions =
  ({ childId, dataArray }) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_BASIC_INFO_FOR_CHILD_REQUEST });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios({
        ...config,
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/child/${childId}`,
        data: dataArray,
        withCredentials: true,
      });

      dispatch({
        type: UPDATE_BASIC_INFO_FOR_CHILD_SUCCESS,
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
        type: UPDATE_BASIC_INFO_FOR_CHILD_FAIL,
        payload: err,
      });
    }
  };
