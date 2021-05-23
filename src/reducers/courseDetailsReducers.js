import {
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from "../constants/courseDetailsConstants";

const initialState = {
  data: {
    kind: "",
    items: [
      {
        rate: 0,
        reviewCounter: 0,
        topicsList: [],
        mediaURLS: [],
        subscriptionNumber: 0,
        _id: "",
        title: "",
        price: 0,
        description: "",
        picture: "",
        genre: "",
        mentorId: {
          isAvailable: false,
          _id: "",
          fullName: "",
          picture: "",
        },
        creatingDate: "",
      },
    ],
  },
};

export const courseDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case COURSE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data };
    case COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
