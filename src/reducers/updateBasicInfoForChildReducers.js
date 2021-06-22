import {
  UPDATE_BASIC_INFO_FOR_CHILD_FAIL,
  UPDATE_BASIC_INFO_FOR_CHILD_REQUEST,
  UPDATE_BASIC_INFO_FOR_CHILD_RESET,
  UPDATE_BASIC_INFO_FOR_CHILD_SUCCESS,
} from "../constants/updateBasicInfoForChildConstants";

export const updateBasicInfoForChildReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BASIC_INFO_FOR_CHILD_REQUEST:
      return { ...state, loading: true };
    case UPDATE_BASIC_INFO_FOR_CHILD_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case UPDATE_BASIC_INFO_FOR_CHILD_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_BASIC_INFO_FOR_CHILD_RESET:
      return {};
    default:
      return state;
  }
};
