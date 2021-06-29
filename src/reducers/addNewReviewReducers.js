import {
  ADD_NEW_REVIEW_FAIL,
  ADD_NEW_REVIEW_REQUEST,
  ADD_NEW_REVIEW_RESET,
  ADD_NEW_REVIEW_SUCCESS,
} from "../constants/addNewReviewConstants";
export const addNewReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_REVIEW_REQUEST:
      return { ...state, loading: true };
    case ADD_NEW_REVIEW_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case ADD_NEW_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case ADD_NEW_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
