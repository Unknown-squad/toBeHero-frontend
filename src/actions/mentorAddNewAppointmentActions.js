import axios from "axios";
import {
  MENTOR_ADD_NEW_APPOINTMENT_FAIL,
  MENTOR_ADD_NEW_APPOINTMENT_REQUEST,
  MENTOR_ADD_NEW_APPOINTMENT_SUCCESS,
} from "../constants/mentorAddNewAppointmentConstants";

export const mentorAddNewAppointmentActions =
  ({ subscriptionId, date, time, title }) =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_ADD_NEW_APPOINTMENT_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/mentor/subscription/${subscriptionId}/add-appointment`,
        {
          method: "mentor.appointment.post",
          params: {
            date,
            time,
            title,
          },
        },
        { withCredentials: true },
        config
      );

      dispatch({ type: MENTOR_ADD_NEW_APPOINTMENT_SUCCESS, payload: data });
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
        type: MENTOR_ADD_NEW_APPOINTMENT_FAIL,
        payload: err,
      });
    }
  };
