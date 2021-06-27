import {
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_FAIL,
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_REQUEST,
  GET_SUBSCRIPTIONS_FOR_CHILD_HOME_SUCCESS,
} from "../constants/getSubscriptionsForChildHomeConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        mentorId: {
          fullName: "",
          picture: "",
          gender: "",
        },
        courseId: {
          title: "",
          picture: "",
        },
        appointments: [
          {
            date: "",
            title: "",
          },
        ],
      },
    ],
  },
};
export const getSubscriptionsForChildHomeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS_FOR_CHILD_HOME_REQUEST:
      return { loading: true };
    case GET_SUBSCRIPTIONS_FOR_CHILD_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_SUBSCRIPTIONS_FOR_CHILD_HOME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
