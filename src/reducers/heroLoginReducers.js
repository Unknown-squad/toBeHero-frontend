import {
  HERO_LOGIN_FAIL,
  HERO_LOGIN_REQUEST,
  HERO_LOGIN_SUCCESS,
  HERO_LOGOUT,
} from "../constants/heroLoginConstants";

export const heroLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_LOGIN_REQUEST:
      return { loading: true };
    case HERO_LOGIN_SUCCESS:
      return { loading: false, heroInfo: action.payload };
    case HERO_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case HERO_LOGOUT:
      return {};
    default:
      return state;
  }
};
