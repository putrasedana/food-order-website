import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/food-search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex justify-center my-8 px-5">
      <input
        type="text"
        placeholder="Search for food ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md p-2 border rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
