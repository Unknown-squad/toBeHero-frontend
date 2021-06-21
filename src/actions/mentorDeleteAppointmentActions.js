import axios from "axios";

export const mentorDeleteAppointmentActions =
  (subscriptionId, appointmentId) => async (dispatch) => {
    try {
      dispatch({ type: MENTOR_DELETE_APPOINTMENT_REQUEST });
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/mentor/subscription/${subscriptionId}/appointment/${appointmentId}/delete`,

        { withCredentials: true }
      );

      dispatch({
        type: MENTOR_DELETE_APPOINTMENT_SUCCESS,
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
        type: MENTOR_DELETE_APPOINTMENT_FAIL,
        payload: err,
      });
    }
  };
