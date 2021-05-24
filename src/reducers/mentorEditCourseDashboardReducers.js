import {
  MENTOR_EDIT_COURSE_DETAILS_FAIL,
  MENTOR_EDIT_COURSE_DETAILS_REQUEST,
  MENTOR_EDIT_COURSE_DETAILS_RESET,
  MENTOR_EDIT_COURSE_DETAILS_SUCCESS,
} from "../constants/mentorEditCourseDetailsConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        title: "",
        price: "",
        description: "",
        picture: "",
        rate: 0,
        creatingDate: "",
        reviewCounter: 0,
        subscriptionNumber: 0,
        topicsList: [],
        mediaURLS: [],
        genre: "",
        mentorId: {
          _id: "",
          fullName: "",
          picture: "",
          isAvailable: false,
        },
      },
    ],
  },
};
export const mentorEditCourseDashboardReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MENTOR_EDIT_COURSE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MENTOR_EDIT_COURSE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data.items[0] };
    case MENTOR_EDIT_COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_EDIT_COURSE_DETAILS_RESET:
      return { data: {} };
    default:
      return state;
  }
};
