import {
  COMPLETE_COURSE_FOR_MENTOR_FAIL,
  COMPLETE_COURSE_FOR_MENTOR_REQUEST,
  COMPLETE_COURSE_FOR_MENTOR_RESET,
  COMPLETE_COURSE_FOR_MENTOR_SUCCESS,
} from "../constants/completeCourseForMentorConstants";

export const completeCourseForMentorReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_COURSE_FOR_MENTOR_REQUEST:
      return { loading: true };
    case COMPLETE_COURSE_FOR_MENTOR_SUCCESS:
      return { loading: false, data: action.payload };
    case COMPLETE_COURSE_FOR_MENTOR_FAIL:
      return { loading: false, error: action.payload };
    case COMPLETE_COURSE_FOR_MENTOR_RESET:
      return {};
    default:
      return state;
  }
};
