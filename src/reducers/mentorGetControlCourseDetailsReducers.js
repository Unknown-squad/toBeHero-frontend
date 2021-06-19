import {
  MENTOR_EDIT_COURSE_DETAILS_FAIL,
  MENTOR_EDIT_COURSE_DETAILS_REQUEST,
  MENTOR_EDIT_COURSE_DETAILS_RESET,
  MENTOR_EDIT_COURSE_DETAILS_SUCCESS,
} from "../constants/mentorEditCourseDetailsConstants";
import {
  MENTOR_GET_CONTROL_COURSE_DETAILS_FAIL,
  MENTOR_GET_CONTROL_COURSE_DETAILS_REQUEST,
  MENTOR_GET_CONTROL_COURSE_DETAILS_RESET,
  MENTOR_GET_CONTROL_COURSE_DETAILS_SUCCESS,
} from "../constants/mentorGetControlCourseDetailsConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        guardianId: {
          fullName: "",
          picture: "",
          phone: "",
          countryCode: "",
        },
        childId: {
          fullName: "",
          picture: "",
        },
        courseId: {
          title: "",
          genre: "",
        },
        appointments: [
          {
            _id: "",
            date: "",
            title: "",
            mentor: false,
            child: false,
          },
        ],
      },
    ],
  },
};
export const mentorEditCourseDashboardReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MENTOR_GET_CONTROL_COURSE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MENTOR_GET_CONTROL_COURSE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data };
    case MENTOR_GET_CONTROL_COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
