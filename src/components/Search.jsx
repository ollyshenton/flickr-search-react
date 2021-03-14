import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        autoFocus
        autoComplete="off"
        name="search"
        placeholder="Search flickr"
        className="border py-2 px-3 text-grey-darkest border-black rounded-sm"
      />
      <button className="p-2.5 m-2 px-4 rounded-sm text-white duration-150 bg-black  hover:bg-white hover:text-black focus:shadow-outline">
        Search
      </button>
    </div>
  );
};

export default Search;
