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
        className="border py-2 px-3 text-grey-darkest border-black "
      />
      <button className="p-2.5 m-2 text-green-100  duration-150 bg-black focus:shadow-outline ">
        Search
      </button>
    </div>
  );
};

export default Search;
