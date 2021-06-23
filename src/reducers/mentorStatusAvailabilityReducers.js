import {
  MENTOR_STATUS_FAIL,
  MENTOR_STATUS_REQUEST,
  MENTOR_STATUS_SUCCESS,
} from "../constants/mentorStatusAvailabilityConstants";
import {
  MENTOR_UPDATE_STATUS_FAIL,
  MENTOR_UPDATE_STATUS_REQUEST,
  MENTOR_UPDATE_STATUS_SUCCESS,
} from "../constants/mentorStatusUpdateAvailabilityConstants";

export const mentorStatusAvailabilityReducer = (
  state = { data: false, loading: false },
  action
) => {
  switch (action.type) {
    case MENTOR_STATUS_REQUEST:
      return { ...state, loading: true };
    case MENTOR_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data.items[0].isAvailable,
      };
    case MENTOR_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case MENTOR_UPDATE_STATUS_REQUEST:
      return { ...state, loading: true };
    case MENTOR_UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload.data.items[0].isAvailable,
      };
    case MENTOR_UPDATE_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
