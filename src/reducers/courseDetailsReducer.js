import {
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from "../constants/courseDetailsConstants";

const initialState = {
  data: {
    Kind: "course",
    items: [
      {
        _id: "",
        title: "",
        price: "",
        Description: "",
        Picture: "",
        Rate: Number,
        creatingDate: "",
        reviewCounter: Number,
        topicList: [],
        mediaUrls: [],
        genre: "",
        Mentor: {
          _id: "",
          fullName: "",
          Picture: "",
          isAvailable: Boolean,
        },
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
