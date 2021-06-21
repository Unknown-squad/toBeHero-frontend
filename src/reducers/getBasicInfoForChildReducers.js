import {
  GET_BASIC_INFO_FOR_CHILD_FAIL,
  GET_BASIC_INFO_FOR_CHILD_REQUEST,
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
        Picture: "",
      },
    ],
  },
};
export const getBasicInfoForChildReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASIC_INFO_FOR_CHILD_REQUEST:
      return { ...state, loading: true };
    case GET_BASIC_INFO_FOR_CHILD_SUCCESS:
      return { loading: false, data: action.payload.data };
    case GET_BASIC_INFO_FOR_CHILD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
