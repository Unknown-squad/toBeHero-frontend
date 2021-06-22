import {
  GUARDIAN_GET_BASIC_INFO_FAIL,
  GUARDIAN_GET_BASIC_INFO_REQUEST,
  GUARDIAN_GET_BASIC_INFO_SUCCESS,
} from "../constants/guardianGetBasicInfoConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        fullName: "",
        email: "",
        phone: "",
        countryCode: "",
      },
    ],
  },
};
export const guardianGetBasicInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUARDIAN_GET_BASIC_INFO_REQUEST:
      return { loading: true };
    case GUARDIAN_GET_BASIC_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GUARDIAN_GET_BASIC_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
