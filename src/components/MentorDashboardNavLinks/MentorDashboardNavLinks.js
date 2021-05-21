import React from "react";
import { NavLink } from "react-router-dom";
import BasicInfoMentorDashboardScreen from "../../screens/BasicInfoMentorDashboardScreen";
const MentorDashboardNavLinks = () => {
  return (
    <ul className="nav-mentor-dashboard">
      <li>
        <NavLink
          to="/mentor/dashboard/basic-info"
          exact
          //   activeStyle={{ display: "block" }}
          component={BasicInfoMentorDashboardScreen}
        >
          Basic info
        </NavLink>
        <div className="mentor-overlay active"></div>
      </li>
      <li>
        <NavLink
          to="/mentor/dashboard/courses"
          exact
          //   activeStyle={{ display: "block" }}
        >
          Courses
        </NavLink>
        <div className="mentor-overlay "></div>
      </li>
      <li>
        <NavLink
          to="/mentor/dashboard/balance"
          exact
          //   activeStyle={{ display: "block" }}
        >
          Balance
        </NavLink>
        <div className="mentor-overlay"></div>
      </li>
      <li>
        <NavLink
          to="/mentor/dashboard/analytics"
          exact
          //   activeStyle={{ display: "block" }}
        >
          Analytics
        </NavLink>
        <div className="mentor-overlay"></div>
      </li>
    </ul>
  );
};

export default MentorDashboardNavLinks;
