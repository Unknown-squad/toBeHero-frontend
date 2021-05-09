import React from "react";

const Filter = () => {
  return (
    <section className="hr-section-13">
      <div className="container">
        <div className="services">
          <h4>Top services</h4>
          <div className="select-services">
            <div className="sort-by">
              <label htmlFor="Sort">Sort by</label>
              <select name="Sort" id="Sort">
                <option defaultValue></option>
                <option value="1">Programming</option>
                <option value="2">Programming</option>
                <option value="3">Programming</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="Filter">Filter</label>
              <select name="Filter" id="Filter">
                <option defaultValue></option>
                <option value="1">Programming</option>
                <option value="2">Programming</option>
                <option value="3">Programming</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
