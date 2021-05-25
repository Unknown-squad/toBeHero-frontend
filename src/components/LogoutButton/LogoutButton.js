import LogoutIcon from "../../images/logout.svg";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.removeItem("mentorInfo");
    setLoggedOut(true);
    axios.delete("http://localhost:5000/api/v1/user/logout", {
      withCredentials: true,
    });
  };

  if (loggedOut) {
    return <Redirect to="/" push={true} />;
  }

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
