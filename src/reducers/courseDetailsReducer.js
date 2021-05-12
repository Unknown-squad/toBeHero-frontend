import {
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from "../constants/courseDetailsConstants";

const initialState = {
  data: {
    kind: "course",
    items: [
      {
        rate: Number,
        reviewCounter: Number,
        topicsList: [],
        mediaURLS: [],
        subscriptionNumber: Number,
        _id: "",
        title: "",
        price: Number,
        description: "",
        picture: "",
        genre: "",
        mentorId: {
          isAvailable: Boolean,
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
