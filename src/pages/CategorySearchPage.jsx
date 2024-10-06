import React from "react";
import { useLocation } from "react-router-dom";
import FoodMenuList from "../components/FoodMenuList";

const CategorySearchPage = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("category");

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Category on Your Search "{query || "No category selected"}"
      </h2>

      <FoodMenuList />
    </div>
  );
};

export default CategorySearchPage;
