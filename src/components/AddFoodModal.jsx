import React, { useState } from "react";

const AddFoodModal = ({ isOpen, onClose, onSubmit, isFoodPath }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [active, setActive] = useState(true);
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

    onSubmit({
      id: Date.now(),
      title,
      price,
      image,
      featured,
      active,
    });
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
        <h2 className="text-xl font-semibold mb-4">Add New Food</h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          {isFoodPath && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div className="flex">
            <div className="mb-4 flex items-center mr-10">
              <label className="text-sm font-semibold mr-2">Featured</label>
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-5 w-5"
              />
            </div>

            <div className="mb-4 flex items-center">
              <label className="text-sm font-semibold mr-2">Active</label>
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                className="h-5 w-5"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
