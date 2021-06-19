import {
  MENTOR_ADD_NEW_APPOINTMENT_FAIL,
  MENTOR_ADD_NEW_APPOINTMENT_REQUEST,
  MENTOR_ADD_NEW_APPOINTMENT_SUCCESS,
} from "../constants/mentorAddNewAppointmentConstants";

export const mentorAddNewAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_ADD_NEW_APPOINTMENT_REQUEST:
      return { ...state, loading: true };
    case MENTOR_ADD_NEW_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };
    case MENTOR_ADD_NEW_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
