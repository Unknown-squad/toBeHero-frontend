import {
  GET_COURSE_DATA_FOR_CHECKOUT_FAIL,
  GET_COURSE_DATA_FOR_CHECKOUT_REQUEST,
  GET_COURSE_DATA_FOR_CHECKOUT_SUCCESS,
} from "../constants/getCourseDataForCheckoutConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        courseTitle: "",
        coursePrice: "",
      },
    ],
  },
};
export const getCourseDataForCheckoutReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_COURSE_DATA_FOR_CHECKOUT_REQUEST:
      return { loading: true };
    case GET_COURSE_DATA_FOR_CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_COURSE_DATA_FOR_CHECKOUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
