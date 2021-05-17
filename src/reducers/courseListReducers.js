import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseListConstants";
const initialState = {
  data: {
    kind: "",
    count: 0,
    items: [
      {
        rate: 0,
        reviewCounter: 0,
        _id: "",
        title: "",
        price: 0,
        description: "",
        picture: "",
        genre: "",
        mentorId: {
          isAvailable: 0,
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
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    case COURSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
