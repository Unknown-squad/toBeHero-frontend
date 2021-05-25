import {
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
} from "../constants/getReviewsForExploreServiceConstants";

const initialState = {
  data: {
    Kind: "",
    count: "",
    items: [
      {
        _id: "",
        rate: 0,
        creatingDate: "",
        description: "",
        guardianId: {
          fullName: "",
          picture: "",
        },
      },
    ],
  },
};
export const getReviewsForExploreServiceReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_REVIEWS_REQUEST:
      return { loading: true };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_REVIEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
