import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddFoodModal from "./AddFoodModal";
import UpdateFoodModal from "./UpdateFoodModal";
import DeleteFoodModal from "./DeleteFoodModal";

const FoodTable = ({ data }) => {
  const [foodList, setFoodList] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [foodToUpdate, setFoodToUpdate] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [foodToDelete, setFoodToDelete] = useState(null);

  const location = useLocation();
  const isFoodPath = location.pathname === "/admin/food";

  const handleDelete = (id) => {
    const updatedFoodList = foodList.filter((food) => food.id !== id);
    setFoodList(updatedFoodList);
  };

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const handleUpdateFood = (updatedFood) => {
    const updatedFoodList = foodList.map((food) =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoodList(updatedFoodList);
  };

  const handleOpenUpdateModal = (food) => {
    setFoodToUpdate(food);
    setIsUpdateModalOpen(true);
  };

  const handleOpenDeleteModal = (food) => {
    setFoodToDelete(food);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    if (isUpdateModalOpen && !foodToUpdate) {
      setFoodToUpdate(null);
    }
  }, [isUpdateModalOpen, foodToUpdate]);

  if (foodList.length === 0) {
    return isFoodPath ? (
      <p className="text-center mt-40">No Food</p>
    ) : (
      <p className="text-center mt-40">No Category</p>
    );
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        {isFoodPath ? "Add New Food" : "Add New Category"}
      </button>

      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              S.N.
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Title
            </th>
            {isFoodPath && (
              <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
                Price
              </th>
            )}
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Image
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Featured
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Active
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((food, index) => (
            <tr key={food.id} className="hover:bg-gray-50">
              <td className="border-b text-center px-6 py-3">{index + 1}.</td>
              <td className="border-b text-center px-6 py-3">{food.title}</td>
              {isFoodPath && (
                <td className="border-b text-center px-6 py-3">
                  ${food.price}
                </td>
              )}
              <td className="border-b text-center px-6 py-3">
                <img
                  src={food.image}
                  alt={food.title}
                  className="h-16 w-16 object-cover m-auto"
                />
              </td>
              <td className="border-b text-center px-6 py-3">
                {food.featured ? "Yes" : "No"}
              </td>
              <td className="border-b text-center px-6 py-3">
                {food.active ? "Yes" : "No"}
              </td>
              <td className="border-b text-center px-6 py-3">
                <div className="flex space-x-2 items-center flex-wrap justify-center">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    onClick={() => handleOpenUpdateModal(food)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                    onClick={() => handleOpenDeleteModal(food)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddFood}
        isFoodPath={isFoodPath}
      />

      <UpdateFoodModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        item={foodToUpdate}
        onUpdate={handleUpdateFood}
        isFoodPath={isFoodPath}
      />

      <DeleteFoodModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
        food={foodToDelete}
      />
    </>
  );
};

export default FoodTable;
