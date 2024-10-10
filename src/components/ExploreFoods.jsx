import React from "react";
import FoodCategoryCard from "./FoodCategoryCard";
import pasta from "../images/spagetti.jpg";
import burger from "../images/big-burger.jpg";
import beverage from "../images/beverage.jpg";
import pizza from "../images/pizza-2.jpg";

const categories = [
  { name: "Pasta", imageUrl: pasta },
  { name: "Burger", imageUrl: burger },
  { name: "Beverages", imageUrl: beverage },
  { name: "Pizza", imageUrl: pizza },
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
