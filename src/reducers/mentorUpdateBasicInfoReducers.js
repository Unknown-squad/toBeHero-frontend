import {
  MENTOR_UPDATE_BASICINFO_FAIL,
  MENTOR_UPDATE_BASICINFO_REQUEST,
  MENTOR_UPDATE_BASICINFO_RESET,
  MENTOR_UPDATE_BASICINFO_SUCCESS,
} from "../constants/mentorUpdateBasicInfoConstants";

export const mentorUpdateBasicInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_UPDATE_BASICINFO_REQUEST:
      return { ...state, loading: true };
    case MENTOR_UPDATE_BASICINFO_SUCCESS:
      return { loading: false, success: true, mentorInfo: action.payload };
    case MENTOR_UPDATE_BASICINFO_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_UPDATE_BASICINFO_RESET:
      return {};
    default:
      return state;
  }
};
