import {
  MENTOR_GET_CONTROL_COURSE_DETAILS_FAIL,
  MENTOR_GET_CONTROL_COURSE_DETAILS_REQUEST,
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
export const mentorGetControlCourseDetailsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MENTOR_GET_CONTROL_COURSE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MENTOR_GET_CONTROL_COURSE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data.items[0] };
    case MENTOR_GET_CONTROL_COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
