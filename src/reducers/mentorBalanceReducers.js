import {
  MENTOR_BALANCE_FAIL,
  MENTOR_BALANCE_REQUEST,
  MENTOR_BALANCE_SUCCESS,
} from "../constants/mentorBalanceConstants";

export const mentorBalanceReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_BALANCE_REQUEST:
      return { loading: true };
    case MENTOR_BALANCE_SUCCESS:
      return { loading: false, data: action.payload };
    case MENTOR_BALANCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
