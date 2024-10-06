import React from "react";
import FoodCategoryCard from "./FoodCategoryCard";
import fruitsImage from "../images/nusa_penida.jpg";

const categories = [
  { name: "Fruits", imageUrl: fruitsImage },
  { name: "Vegetables", imageUrl: fruitsImage },
  { name: "Beverages", imageUrl: fruitsImage },
  { name: "Snacks", imageUrl: fruitsImage },
];

const ExploreFoods = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Explore Foods</h2>
      <div className="grid grid-cols-1 px-6 sm:grid-cols-2 xl:grid-cols-4 lg:px-10 gap-4">
        {categories.map((category, index) => (
          <FoodCategoryCard
            key={index}
            category={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreFoods;
