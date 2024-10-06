import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const FoodMenuCard = ({
  menu,
  imageUrl,
  description,
  price,
  rating,
  category,
}) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order");
  };

  return (
    <div className="bg-gray-800 text-center rounded-md shadow-md relative">
      <img
        src={imageUrl}
        alt={`${menu} dish`}
        className="w-full h-48 object-cover rounded-t-md mb-3"
      />
      <div className="pb-5 px-3 ">
        <p className="font-semibold text-lg text-white mb-1">{menu}</p>
        <p className="text-gray-400 mb-2">{description}</p>
        <p className="font-bold text-xl text-green-500 mb-2">${price}</p>

        <div
          className="absolute left-0 top-0 p-2 text-white"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.50)",
            borderTopLeftRadius: "0.375rem",
          }}
        >
          <p className="font-semibold text-lg ">#{category}</p>
        </div>

        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }, (_, index) => {
            const ratingValue = index + 1;
            return (
              <span key={index}>
                {rating >= ratingValue ? (
                  <FaStar className="text-yellow-500 h-5 w-5" />
                ) : rating >= ratingValue - 0.5 ? (
                  <FaStarHalfAlt className="text-yellow-500 h-5 w-5" />
                ) : (
                  <FaRegStar className="text-yellow-500 h-5 w-5" />
                )}
              </span>
            );
          })}
        </div>

        <button
          onClick={handleOrder}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodMenuCard;
