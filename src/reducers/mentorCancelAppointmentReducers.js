import {
  MENTOR_CANCEL_APPOINTMENT_FAIL,
  MENTOR_CANCEL_APPOINTMENT_REQUEST,
  MENTOR_CANCEL_APPOINTMENT_SUCCESS,
} from "../constants/mentorCancelAppointmentConstants";

export const mentorCancelAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_CANCEL_APPOINTMENT_REQUEST:
      return { ...state, loading: true };
    case MENTOR_CANCEL_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case MENTOR_CANCEL_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
