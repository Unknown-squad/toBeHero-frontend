import {
  MENTOR_BASICINFO_FAIL,
  MENTOR_BASICINFO_REQUEST,
  MENTOR_BASICINFO_RESET,
  MENTOR_BASICINFO_SUCCESS,
} from "../constants/mentorBasicInfoConstants";

const initialState = {
  data: {
    kind: "",
    items: [
      {
        occupation: [],
        certificates: [],
        languages: [],
        fullName: "",
        gender: "",
        email: "",
        phone: "",
        countryCode: "",
        picture: "",
        birthDate: "",
        description: "",
      },
    ],
  },
};
export const mentorBasicInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_BASICINFO_REQUEST:
      return { ...state, loading: true };
    case MENTOR_BASICINFO_SUCCESS:
      return { loading: false, mentor: action.payload.data.items[0] };
    case MENTOR_BASICINFO_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_BASICINFO_RESET:
      return { mentor: {} };
    default:
      return state;
  }
};
