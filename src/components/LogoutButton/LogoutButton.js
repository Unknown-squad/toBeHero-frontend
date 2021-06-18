import React from "react";
import LogoutIcon from "../../images/logout.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { mentorLogout } from "../../actions/mentorLogout";
import { guardianLogout } from "../../actions/guardianLogout";
import { heroLogout } from "../../actions/heroLogout";

const LogoutButton = ({ user }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    setLoggedOut(true);
    axios.delete("http://localhost:5000/api/v1/user/logout", {
      withCredentials: true,
    });
  };
  useEffect(() => {
    if (loggedOut && user === "mentor") {
      dispatch(mentorLogout());

      // document.location.href = "/";
      // window.location.href = "/";
      // history.push("/");
      // return <Redirect to="/" push={true} />;
    } else if (loggedOut && user === "guardian") {
      dispatch(guardianLogout());
    } else if (loggedOut && user === "hero") {
      dispatch(heroLogout());
    }
  }, [loggedOut, dispatch, user]);

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
