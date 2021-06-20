import {
  GUARDIAN_GET_CHILDREN_FAIL,
  GUARDIAN_GET_CHILDREN_REQUEST,
  GUARDIAN_GET_CHILDREN_SUCCESS,
} from "../constants/guardianGetChildrenConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        fullName: "",
        Picture: "",
      },
    ],
  },
};
export const guardianGetChildrenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUARDIAN_GET_CHILDREN_REQUEST:
      return { loading: true };
    case GUARDIAN_GET_CHILDREN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GUARDIAN_GET_CHILDREN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
