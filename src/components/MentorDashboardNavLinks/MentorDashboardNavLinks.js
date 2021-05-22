import React from "react";
import { NavLink } from "react-router-dom";
const MentorDashboardNavLinks = () => {
  return (
    // .mentor-overlay {
    //     position: absolute;
    //     left: -4px;
    //     right: -4px;
    //     top: -4px;
    //     bottom: -4px;
    //     border: 2px solid #8c61ff;
    //     border-radius: 10px;
    //     display: none;
    //     &.active {
    //       display: block;
    //     }
    //   }
    <ul className="nav-mentor-dashboard">
      <NavLink
        to="/mentor/dashboard/basicinfo"
        exact
        activeStyle={{
          border: "2px solid #8c61ff",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <li>Basic info</li>
      </NavLink>
      <NavLink
        to="/mentor/dashboard/courses"
        exact
        activeStyle={{
          border: "2px solid #8c61ff",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <li>Courses</li>
      </NavLink>
      <NavLink
        to="/mentor/dashboard/balance"
        exact
        activeStyle={{
          border: "2px solid #8c61ff",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <li>Balance</li>
      </NavLink>
      <NavLink
        to="/mentor/dashboard/analytics"
        exact
        activeStyle={{
          border: "2px solid #8c61ff",
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <li>Analytics</li>
      </NavLink>
    </ul>
  );
};

export default MentorDashboardNavLinks;