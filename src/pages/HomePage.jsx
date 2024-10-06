import React from "react";
import SearchBar from "../components/SearchBar";
import ExploreFoods from "../components/ExploreFoods";
import FoodMenu from "../components/FoodMenuList";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <ExploreFoods />
      <FoodMenu />
    </div>
  );
};

export default HomePage;
