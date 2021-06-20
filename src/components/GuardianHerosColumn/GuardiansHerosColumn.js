import React from "react";
import { Link, NavLink } from "react-router-dom";
import someOne from "../../images/someone.svg";
import addSomeOne from "../../images/add-someone.svg";

const GuardiansHerosColumn = () => {
  return (
    <ul className="nav-guardian-home">
      <li>
        <NavLink to={`/guardian/child/:childId`} activeClassName="active">
          <img src={someOne} alt="" />
          <p>youssef</p>
        </NavLink>
      </li>
      <li>
        <NavLink to={`/guardian/child/:childId`} activeClassName="active">
          <img src={someOne} alt="" />
          <p>Alaa</p>
        </NavLink>
      </li>
      <li>
        <NavLink to={`/guardian/child/:childId`} activeClassName="active">
          <img src={someOne} alt="" />
          <p>someone</p>
        </NavLink>
      </li>
      <li>
        <Link to="">
          <img src={addSomeOne} alt="" className="add-child" />
          <p>add new</p>
        </Link>
      </li>
    </ul>
  );
};

export default GuardiansHerosColumn;
