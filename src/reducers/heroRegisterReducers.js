import {
  HERO_REGISTER_FAIL,
  HERO_REGISTER_REQUEST,
  HERO_REGISTER_RESET_ERROR,
  HERO_REGISTER_SUCCESS,
} from "../constants/heroRegisterConstants";

export const heroRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case HERO_REGISTER_REQUEST:
      return { loading: true };
    case HERO_REGISTER_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case HERO_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case HERO_REGISTER_RESET_ERROR:
      return {};
    default:
      return state;
  }
};
