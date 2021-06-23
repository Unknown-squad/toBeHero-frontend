import {
  GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_FAIL,
  GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_REQUEST,
  GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_SUCCESS,
} from "../constants/getChildSubscriptionCourseDetailsConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        child: {
          fullName: "",
          picture: "",
        },
        mentor: {
          _id: "",
          fullName: "",
          gender: "",
          picture: "",
          phone: "",
          countryCode: "",
        },
        appointments: [
          {
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
export const getChildSubscriptionCourseDetailsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_REQUEST:
      return { loading: true };
    case GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data.items[0],
      };
    case GET_CHILD_SUBSCRIPTION_COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
