import { MENTOR_LOGOUT } from "../constants/mentorLoginConstants";

export const mentorLogout = () => (dispatch) => {
  localStorage.removeItem("mentorInfo");
  //   localStorage.removeItem("cartItems");
  //   localStorage.removeItem("shippingAddress");
  //   localStorage.removeItem("paymentMethod");
  dispatch({ type: MENTOR_LOGOUT });
  document.location.href = "/login";
};
