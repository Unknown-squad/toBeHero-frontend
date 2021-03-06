import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
const Filter = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // dispatch(listCourses(1, filter, sort));
    history.push({
      pathname: "/explore",
      search: `?page=1${sort ? `&sortby=${sort}` : ""}${
        filter ? `&genre=${filter}` : ""
      }`,
    });
  }, [dispatch, filter, sort, history]);
  return (
    <>
      <section className="hr-section-13">
        <div className="container">
          <div className="services">
            <h4>Top services</h4>
            <div className="select-services">
              <div className="sort-by">
                <label htmlFor="sort">Sort by</label>
                <select
                  name="sort"
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* {console.log(sort)} */}
                  <option value="popularity" defaultValue>
                    Popularity
                  </option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                  <option value="low-price">Price (lowest)</option>
                  <option value="high-price">Price (highest)</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="filter">Filter</label>
                <select
                  name="filter"
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* {console.log(filter)} */}
                  <option defaultValue disabled>
                    All
                  </option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Programming">Programming</option>
                  <option value="Drawing">Drawing</option>
                  <option value="Quran">Quran</option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Philosophy">Philosophy</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
