import {
  MENTOR_REGISTER_FAIL,
  MENTOR_REGISTER_REQUEST,
  MENTOR_REGISTER_RESET_ERROR,
  MENTOR_REGISTER_SUCCESS,
} from "../constants/mentorRegisterConstants";

export const mentorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_REGISTER_REQUEST:
      return { loading: true };
    case MENTOR_REGISTER_SUCCESS:
      return { loading: false, mentorInfo: action.payload };
    case MENTOR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_REGISTER_RESET_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
