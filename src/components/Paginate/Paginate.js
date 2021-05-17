import React from "react";
import { Link } from "react-router-dom";
const Paginate = ({ totalPages, currentPage, location }) => {
  const genre = new URLSearchParams(location.search).get("genre") || "";
  const sortby = new URLSearchParams(location.search).get("sortby") || "";
  return (
    totalPages > 1 && (
      <ul className="list-card">
        {[...Array(totalPages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={`/explore?page=${x + 1}${sortby ? `&sortby=${sortby}` : ""}${
              genre ? `&genre=${genre}` : ""
            }`}
          >
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
