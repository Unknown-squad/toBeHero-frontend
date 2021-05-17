import {
  MENTOR_LOGIN_FAIL,
  MENTOR_LOGIN_REQUEST,
  MENTOR_LOGIN_RESET_ERROR,
  MENTOR_LOGIN_SUCCESS,
  MENTOR_LOGOUT,
} from "../constants/mentorLoginConstants";

export const mentorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_LOGIN_REQUEST:
      return { loading: true };
    case MENTOR_LOGIN_SUCCESS:
      return { loading: false, mentorInfo: action.payload };
    case MENTOR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_LOGIN_RESET_ERROR:
      return { ...state, error: "" };
    case MENTOR_LOGOUT:
      return {};
    default:
      return state;
  }
};
