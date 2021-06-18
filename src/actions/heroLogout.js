import { HERO_LOGOUT } from "../constants/heroLoginConstants";

export const heroLogout = () => (dispatch) => {
  localStorage.removeItem("heroInfo");
  //   localStorage.removeItem("cartItems");
  //   localStorage.removeItem("shippingAddress");
  //   localStorage.removeItem("paymentMethod");
  dispatch({ type: HERO_LOGOUT });
  document.location.href = "/login";
};
