import {
  MENTOR_UPDATE_STATUS_FAIL,
  MENTOR_UPDATE_STATUS_REQUEST,
  MENTOR_UPDATE_STATUS_SUCCESS,
} from "../constants/mentorStatusUpdateAvailabilityConstants";

export const mentorStatusUpdateAvailabilityReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_UPDATE_STATUS_REQUEST:
      return { loading: true };
    case MENTOR_UPDATE_STATUS_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case MENTOR_UPDATE_STATUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
