import React, { useState } from "react";
import useStore from "../lib/productStore";

const SearchBar = () => {
  const { fetchProductsBySearch } = useStore();
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    fetchProductsBySearch(encodeURIComponent(query)); // Ensure the query is encoded
  };

  return (
    <div className="search-bar flex-grow mx-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-lg border-none shadow-inner focus:ring focus:ring-indigo-300 text-gray-800"
        />
      </form>
    </div>
  );
};

export default SearchBar;
