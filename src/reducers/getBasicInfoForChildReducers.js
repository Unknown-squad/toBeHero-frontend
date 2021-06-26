import {
  GET_BASIC_INFO_FOR_CHILD_FAIL,
  GET_BASIC_INFO_FOR_CHILD_REQUEST,
  GET_BASIC_INFO_FOR_CHILD_RESET,
  GET_BASIC_INFO_FOR_CHILD_SUCCESS,
} from "../constants/getBasicInfoForChildConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        fullName: "",
        userName: "",
        birthDate: "",
        picture: "",
      },
    ],
  },
};
export const getBasicInfoForChildReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASIC_INFO_FOR_CHILD_REQUEST:
      return { loading: true };
    case GET_BASIC_INFO_FOR_CHILD_SUCCESS:
      return {
        loading: false,
        hero: action.payload.data.items[0],
      };
    case GET_BASIC_INFO_FOR_CHILD_FAIL:
      return { loading: false, error: action.payload };
    case GET_BASIC_INFO_FOR_CHILD_RESET:
      return { hero: {} };
    default:
      return state;
  }
};
