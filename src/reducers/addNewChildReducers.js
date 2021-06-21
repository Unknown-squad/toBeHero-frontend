import {
  ADD_NEW_CHILD_FAIL,
  ADD_NEW_CHILD_REQUEST,
  ADD_NEW_CHILD_RESET_ERROR,
  ADD_NEW_CHILD_SUCCESS,
} from "../constants/addNewChildConstants";

export const addNewChildReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_CHILD_REQUEST:
      return { loading: true };
    case ADD_NEW_CHILD_SUCCESS:
      return { loading: false, mentorInfo: action.payload };
    case ADD_NEW_CHILD_FAIL:
      return { loading: false, error: action.payload };
    case ADD_NEW_CHILD_RESET_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
