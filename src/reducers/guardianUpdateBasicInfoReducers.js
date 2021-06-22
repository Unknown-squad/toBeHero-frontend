import {
  GUARDIAN_UPDATE_BASIC_INFO_FAIL,
  GUARDIAN_UPDATE_BASIC_INFO_REQUEST,
  GUARDIAN_UPDATE_BASIC_INFO_RESET,
  GUARDIAN_UPDATE_BASIC_INFO_SUCCESS,
} from "../constants/guardianUpdateBasicInfoConstants";

export const guardianUpdateBasicInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARDIAN_UPDATE_BASIC_INFO_REQUEST:
      return { ...state, loading: true };
    case GUARDIAN_UPDATE_BASIC_INFO_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case GUARDIAN_UPDATE_BASIC_INFO_FAIL:
      return { loading: false, error: action.payload };
    case GUARDIAN_UPDATE_BASIC_INFO_RESET:
      return {};
    default:
      return state;
  }
};
