import React from "react";
import FoodMenuList from "../components/FoodMenuList";
import { useLocation } from "react-router-dom";

const FoodSearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Foods on Your Search "{query}"
      </h2>

      <FoodMenuList />
    </div>
  );
};

export default FoodSearchPage;
