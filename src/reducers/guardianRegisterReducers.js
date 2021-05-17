import {
  GUARDIAN_REGISTER_FAIL,
  GUARDIAN_REGISTER_REQUEST,
  GUARDIAN_REGISTER_RESET_ERROR,
  GUARDIAN_REGISTER_SUCCESS,
} from "../constants/guardianRegisterConstants";

export const guardianRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARDIAN_REGISTER_REQUEST:
      return { loading: true };
    case GUARDIAN_REGISTER_SUCCESS:
      return { loading: false, guardianInfo: action.payload };
    case GUARDIAN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case GUARDIAN_REGISTER_RESET_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
