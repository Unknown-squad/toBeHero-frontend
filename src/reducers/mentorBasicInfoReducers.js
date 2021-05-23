import {
  MENTOR_BASICINFO_FAIL,
  MENTOR_BASICINFO_REQUEST,
  MENTOR_BASICINFO_RESET,
  MENTOR_BASICINFO_SUCCESS,
} from "../constants/mentorBasicInfoConstants";

const initialState = {
  data: {
    Kind: "mentor",
    items: [
      {
        fullName: "",
        gender: "",
        email: "",
        phone: "",
        countryCode: "",
        birthDate: "",
        languages: [],
        occupation: [],
        certificates: [],
        description: "",
        picture: "",
      },
    ],
  },
};
export const mentorBasicInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_BASICINFO_REQUEST:
      return { ...state, loading: true };
    case MENTOR_BASICINFO_SUCCESS:
      return { loading: false, mentor: action.payload.data };
    case MENTOR_BASICINFO_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_BASICINFO_RESET:
      return { user: {} };
    default:
      return state;
  }
};
