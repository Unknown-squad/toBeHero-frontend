import React from "react";
import LogoutIcon from "../../images/logout.svg";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { MENTOR_LOGOUT } from "../../constants/mentorLoginConstants";

const LogoutButton = ({ cookies }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("mentorInfo");

    setLoggedOut(true);
    axios.delete("http://localhost:5000/api/v1/user/logout", {
      withCredentials: true,
    });
  };
  useEffect(() => {
    if (loggedOut) {
      dispatch({ type: MENTOR_LOGOUT });
      document.location.href = "/";

      // window.location.href = "/";

      // history.push("/");
      // return <Redirect to="/" push={true} />;
    }
  }, [loggedOut, dispatch]);

  return (
    <div
      onClick={logout}
      style={{
        width: "25px",
        height: "25px",
        cursor: "pointer",
      }}
    >
      {/* <p style={{ color: "#343090", marginRight: "5px" }}>Logout</p> */}
      <img
        src={LogoutIcon}
        alt="logout icon"
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default LogoutButton;
