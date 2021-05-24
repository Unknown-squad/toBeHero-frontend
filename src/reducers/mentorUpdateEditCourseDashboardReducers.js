import {
  MENTOR_UPDATE_COURSE_FAIL,
  MENTOR_UPDATE_COURSE_REQUEST,
  MENTOR_UPDATE_COURSE_RESET,
  MENTOR_UPDATE_COURSE_SUCCESS,
} from "../constants/mentorUpdateCourseDashboardConstants";

export const mentorUpdateCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_UPDATE_COURSE_REQUEST:
      return { ...state, loading: true };
    case MENTOR_UPDATE_COURSE_SUCCESS:
      return {
        loading: false,
        success: true,
        mentorCourseInfo: action.payload,
      };
    case MENTOR_UPDATE_COURSE_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_UPDATE_COURSE_RESET:
      return {};
    default:
      return state;
  }
};
