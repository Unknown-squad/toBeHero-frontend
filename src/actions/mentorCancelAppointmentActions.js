import axios from "axios";

import {
  MENTOR_CANCEL_APPOINTMENT_FAIL,
  MENTOR_CANCEL_APPOINTMENT_REQUEST,
  MENTOR_CANCEL_APPOINTMENT_SUCCESS,
} from "../constants/mentorCancelAppointmentConstants";

export const mentorCancelAppointmentActions =
  (subscriptionId, appointmentId) => async (dispatch) => {
    try {
      dispatch({ type: MENTOR_CANCEL_APPOINTMENT_REQUEST });
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/mentor/subscription/${subscriptionId}/appointment/${appointmentId}/cancel`,
        {},
        { withCredentials: true }
      );

      dispatch({
        type: MENTOR_CANCEL_APPOINTMENT_SUCCESS,
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
        type: MENTOR_CANCEL_APPOINTMENT_FAIL,
        payload: err,
      });
    }
  };
