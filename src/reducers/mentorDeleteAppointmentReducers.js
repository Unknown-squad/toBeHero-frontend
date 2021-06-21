import {
  MENTOR_DELETE_APPOINTMENT_FAIL,
  MENTOR_DELETE_APPOINTMENT_REQUEST,
  MENTOR_DELETE_APPOINTMENT_RESET,
  MENTOR_DELETE_APPOINTMENT_SUCCESS,
} from "../constants/mentorDeleteAppointmentConstants";

export const mentorDeleteAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_DELETE_APPOINTMENT_REQUEST:
      return { ...state, loading: true };
    case MENTOR_DELETE_APPOINTMENT_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case MENTOR_DELETE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_DELETE_APPOINTMENT_RESET:
      return {};
    default:
      return state;
  }
};
