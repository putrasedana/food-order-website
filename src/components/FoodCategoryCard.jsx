import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCategoryCard = ({ category, imageUrl }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/category-search?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex flex-col justify-between h-full bg-gray-800 rounded-md shadow-md relative text-white">
      <img
        src={imageUrl}
        alt={`${category} category`}
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-md">
        <p className="font-semibold text-xl mb-4">{category}</p>
      </div>

      <button
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-b-md z-10"
        onClick={handleExploreClick}
      >
        Explore
      </button>
    </div>
  );
};

export default FoodCategoryCard;
