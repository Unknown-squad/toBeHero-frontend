import React from "react";
import { Link } from "react-router-dom";
const Paginate = ({ totalPages, currentPage }) => {
  return (
    totalPages > 1 && (
      <ul className="list-card">
        {[...Array(totalPages).keys()].map((x) => (
          <Link key={x + 1} to={`/explore/page/${x + 1}`}>
            <li className={`${x + 1 === currentPage ? "active" : ""}`}>
              {x + 1}
            </li>
          </Link>
        ))}
      </ul>
    )
  );
};

export default Paginate;
