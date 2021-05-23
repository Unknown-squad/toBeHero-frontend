import {
  MENTOR_BALANCE_FAIL,
  MENTOR_BALANCE_REQUEST,
  MENTOR_BALANCE_SUCCESS,
} from "../constants/mentorBalanceConstants";
const initialState = {
  data: {
    Kind: "",
    items: [
      {
        balance: 0,
      },
    ],
  },
};

export const mentorBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_BALANCE_REQUEST:
      return { loading: true };
    case MENTOR_BALANCE_SUCCESS:
      return { loading: false, data: action.payload.data };
    case MENTOR_BALANCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
