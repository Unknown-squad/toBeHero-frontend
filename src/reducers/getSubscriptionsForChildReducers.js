import {
  GET_SUBSCRIPTIONS_FOR_CHILD_FAIL,
  GET_SUBSCRIPTIONS_FOR_CHILD_REQUEST,
  GET_SUBSCRIPTIONS_FOR_CHILD_SUCCESS,
} from "../constants/getSubscriptionsForChildConstants";

const initialState = {
  data: {
    Kind: "subscriptions",
    items: [
      {
        _id: "",
        courseId: {
          title: "",
          description: "",
          Picture: "",
        },
        Mentor: {
          _id: "",
          fullName: "",
          picture: "",
        },
        nextAppointment: "",
      },
    ],
  },
};
export const getSubscriptionsForChildReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS_FOR_CHILD_REQUEST:
      return { loading: true };
    case GET_SUBSCRIPTIONS_FOR_CHILD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_SUBSCRIPTIONS_FOR_CHILD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
