import React, { useState } from "react";

const UpdateFoodModal = ({ isOpen, onClose, item, onUpdate, isFoodPath }) => {
  if (!isOpen) return null;
  const [title, setTitle] = useState(item?.title);
  const [price, setPrice] = useState(item?.price);
  const [image, setImage] = useState(item?.image);
  const [featured, setFeatured] = useState(item?.featured);
  const [active, setActive] = useState(item?.active);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || (isFoodPath && !price)) {
      const message = isFoodPath
        ? "Title and Price cannot be empty."
        : "Title cannot be empty.";
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const updatedFood = {
      ...foodItem,
      title,
      price,
      image,
      featured,
      active,
    };
    onUpdate(updatedFood);
    onClose();

    setTitle("");
    setPrice("");
    setImage("");
    setFeatured(false);
    setActive(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-[35%]">
        <h2 className="text-lg font-semibold mb-4">Update Food</h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {isFoodPath && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex">
            <div className="mb-4 flex items-center mr-10">
              <label className="text-sm font-semibold mr-2">Featured</label>
              <input
                type="checkbox"
                checked={featured}
                className="h-5 w-5"
                onChange={() => setFeatured(!featured)}
              />
            </div>

            <div className="mb-4 flex items-center mr-10">
              <label className="text-sm font-semibold mr-2">Active</label>
              <input
                type="checkbox"
                checked={active}
                className="h-5 w-5"
                onChange={() => setActive(!active)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFoodModal;
