import {
  GUARDIAN_LOGIN_FAIL,
  GUARDIAN_LOGIN_REQUEST,
  GUARDIAN_LOGIN_RESET_ERROR,
  GUARDIAN_LOGIN_SUCCESS,
  GUARDIAN_LOGOUT,
} from "../constants/guardianLoginConstants";

export const guardianLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARDIAN_LOGIN_REQUEST:
      return { loading: true };
    case GUARDIAN_LOGIN_SUCCESS:
      return { loading: false, guardianInfo: action.payload };
    case GUARDIAN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case GUARDIAN_LOGIN_RESET_ERROR:
      return { ...state, error: "" };
    case GUARDIAN_LOGOUT:
      return {};
    default:
      return state;
  }
};
