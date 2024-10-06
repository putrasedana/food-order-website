import React from "react";
import FoodMenuList from "../components/FoodMenuList";
import SearchBar from "../components/SearchBar";

const FoodPage = () => {
  return (
    <div>
      <SearchBar />
      <FoodMenuList />
    </div>
  );
};

export default FoodPage;
