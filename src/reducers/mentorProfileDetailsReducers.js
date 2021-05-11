import {
  MENTOR_PROFILE_DETAILS_FAIL,
  MENTOR_PROFILE_DETAILS_REQUEST,
  MENTOR_PROFILE_DETAILS_SUCCESS,
} from "../constants/mentorProfileDetailsConstants";

const initialState = {
  data: {
    Kind: "",
    items: [
      {
        _id: "",
        fullName: "",
        Email: "",
        country: "",
        languages: [],
        description: "",
        occupations: [],
        certificates: [],
        topReviews: [
          {
            rate: Number,
            creatingDate: Date,
            description: "",
            guardianName: "",
            guardianPicture: "",
          },
        ],
      },
    ],
  },
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_PROFILE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENTOR_PROFILE_DETAILS_SUCCESS:
      return { loading: false, data: action.payload.data };
    case MENTOR_PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
