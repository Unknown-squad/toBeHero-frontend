import {
  MENTOR_ADD_NEW_COURSE_FAIL,
  MENTOR_ADD_NEW_COURSE_REQUEST,
  MENTOR_ADD_NEW_COURSE_SUCCESS,
} from "../constants/mentorAddNewCourseDashboardConstants";

export const mentorAddNewCourseDashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_ADD_NEW_COURSE_REQUEST:
      return { ...state, loading: true };
    case MENTOR_ADD_NEW_COURSE_SUCCESS:
      return {
        loading: false,
        success: true,
        mentorCourseAddedInfo: action.payload,
      };
    case MENTOR_ADD_NEW_COURSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
