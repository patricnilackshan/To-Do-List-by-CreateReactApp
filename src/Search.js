import React from "react";

function Search({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Here"
        id="searchItem"
        value={search}
      ></input>
    </form>
  );
}

export default Search;
