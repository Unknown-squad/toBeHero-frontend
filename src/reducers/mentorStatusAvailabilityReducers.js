import {
  MENTOR_STATUS_FAIL,
  MENTOR_STATUS_REQUEST,
  MENTOR_STATUS_SUCCESS,
} from "../constants/mentorStatusAvailabilityConstants";

export const mentorStatusAvailabilityReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_STATUS_REQUEST:
      return { loading: true };
    case MENTOR_STATUS_SUCCESS:
      return { loading: false, data: action.payload };
    case MENTOR_STATUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
