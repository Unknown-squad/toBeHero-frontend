import {
  GUARDIAN_REGISTER_FAIL,
  GUARDIAN_REGISTER_REQUEST,
  GUARDIAN_REGISTER_SUCCESS,
} from "../constants/guardianRegisterConstants";

export const mentorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARDIAN_REGISTER_REQUEST:
      return { loading: true };
    case GUARDIAN_REGISTER_SUCCESS:
      return { loading: false, mentorInfo: action.payload };
    case GUARDIAN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};