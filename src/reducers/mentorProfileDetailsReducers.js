import {
  MENTOR_PROFILE_DETAILS_FAIL,
  MENTOR_PROFILE_DETAILS_REQUEST,
  MENTOR_PROFILE_DETAILS_SUCCESS,
} from "../constants/mentorProfileDetailsConstants";

const initialState = {
  data: {
    Kind: "",
    items: {
      occupation: [],
      certificates: [],
      languages: [],
      topReviewsId: [],
      _id: "",
      fullName: "",
      gender: "",
      email: "",
      phone: "",
      countryCode: "",
      picture: "",
      birthDate: "",
      description: "",
    },
  },
};

export const mentorProfileDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_PROFILE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENTOR_PROFILE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data.items[0] };
    case MENTOR_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
