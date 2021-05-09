import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseConstants";
const initialState = {
  success: Boolean,
  message: "",
  data: {
    kind: "",
    count: Number,
    items: [
      {
        rate: Number,
        reviewCounter: Number,
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
      },
    ],
  },
};
export const courseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { loading: true };
    case COURSE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
