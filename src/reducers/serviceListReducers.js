import {
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
} from "../constants/serviceListConstants";
const initialState = {
  data: {
    kind: "",
    items: [
      {
        _id: "",
        childId: {
          fullName: "",
        },
        courseId: {
          title: "",
          genre: "",
        },
        guardianId: {
          fullName: "",
          phone: "",
          countryCode: "",
        },
        appointments: [
          {
            cancel: false,
            mentor: false,
            child: false,
            date: "",
            _id: "",
            title: "",
          },
        ],
      },
      {
        _id: "",
        childId: {
          fullName: "",
        },
        courseId: {
          title: "",
          genre: "",
        },
        guardianId: {
          fullName: "",
          phone: "",
          countryCode: "",
        },
        appointments: [
          {
            cancel: false,
            mentor: false,
            child: false,
            date: "",
            _id: "",
            title: "",
          },
        ],
      },
    ],
  },
};
export const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { loading: true };
    case SERVICE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case SERVICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
