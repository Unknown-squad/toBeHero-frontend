import { GUARDIAN_LOGOUT } from "../constants/guardianLoginConstants";

export const guardianLogout = () => (dispatch) => {
  localStorage.removeItem("guardianInfo");
  //   localStorage.removeItem("cartItems");
  //   localStorage.removeItem("shippingAddress");
  //   localStorage.removeItem("paymentMethod");
  dispatch({ type: GUARDIAN_LOGOUT });
  document.location.href = "/login";
};
