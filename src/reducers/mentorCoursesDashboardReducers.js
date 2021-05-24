import {
  MENTOR_COURSES_DASHBOARD_FAIL,
  MENTOR_COURSES_DASHBOARD_REQUEST,
  MENTOR_COURSES_DASHBOARD_SUCCESS,
} from "../constants/mentorCoursesDashboardConstants";

const initialState = {
  data: {
    Kind: "",
    count: "",
    items: [
      {
        _id: "",
        title: "",
        description: "",
        picture: "",
      },
    ],
  },
};
export const mentorCoursesDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_COURSES_DASHBOARD_REQUEST:
      return { loading: true };
    case MENTOR_COURSES_DASHBOARD_SUCCESS:
      return { loading: false, data: action.payload.data };
    case MENTOR_COURSES_DASHBOARD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
