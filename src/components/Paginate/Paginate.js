import React from "react";
import { Link } from "react-router-dom";
const Paginate = ({ pages, page, keyword = "" }) => {
  return (
    <ul className="list-card">
      <li className="active">
        <Link to="">1</Link>
      </li>
      <li>
        <Link to="">2</Link>
      </li>
      <li>
        <Link to="">3</Link>
      </li>
      <li>
        <Link to="">4</Link>
      </li>
      <li>
        <Link to="">5</Link>
      </li>
    </ul>
  );
};

export default Paginate;
