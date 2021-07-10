import {
  UPDATE_PICTURE_FOR_MENTOR_FAIL,
  UPDATE_PICTURE_FOR_MENTOR_REQUEST,
  UPDATE_PICTURE_FOR_MENTOR_RESET,
  UPDATE_PICTURE_FOR_MENTOR_SUCCESS,
} from "../constants/updatePictureForMentorConstants";

export const updatePictureForMentorReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PICTURE_FOR_MENTOR_REQUEST:
      return { ...state, loading: true };
    case UPDATE_PICTURE_FOR_MENTOR_SUCCESS:
      return { ...state, loading: false, success: true, data: action.payload };
    case UPDATE_PICTURE_FOR_MENTOR_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_PICTURE_FOR_MENTOR_RESET:
      return {};
    default:
      return state;
  }
};
