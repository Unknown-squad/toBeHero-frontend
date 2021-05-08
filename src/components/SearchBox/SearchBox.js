import React from "react";

const SearchBox = () => {
  return (
    <section class="hr-section-11">
      <div class="container">
        <div class="topic">
          <h4>Topics</h4>
          <div class="search">
            <label for="search-field">Find a topic</label>
            <input
              type="search"
              id="search-field"
              class="search-field"
              placeholder="Search ...."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
