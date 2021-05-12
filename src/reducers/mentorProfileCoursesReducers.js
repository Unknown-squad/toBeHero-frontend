import {
  MENTOR_PROFILE_COURSES_LIST_FAIL,
  MENTOR_PROFILE_COURSES_LIST_REQUEST,
  MENTOR_PROFILE_COURSES_LIST_SUCCESS,
} from "../constants/mentorProfileCoursesConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        rate: Number,
        reviewCounter: Number,
        topicsList: [],
        mediaURLS: [],
        subscriptionNumber: Number,
        reviewsId: [],
        _id: "",
        title: "",
        price: 69,
        description: "",
        picture: "",
        genre: "",
        mentorId: "",
        creatingDate: "",
      },
    ],
  },
};
export const mentorProfileCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_PROFILE_COURSES_LIST_REQUEST:
      return { loading: true };
    case MENTOR_PROFILE_COURSES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case MENTOR_PROFILE_COURSES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
