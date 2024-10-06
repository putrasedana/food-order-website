import React, { useState } from "react";

const UpdateAdminModal = ({ isOpen, onClose, admin, onSubmit }) => {
  if (!isOpen) return null;
  const [fullName, setFullName] = useState(admin?.fullName || "");
  const [username, setUsername] = useState(admin?.username || "");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!fullName || !username) {
      setErrorMessage("Full Name and Username cannot be empty.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    const updatedAdmin = { ...admin, fullName, username };
    onSubmit(updatedAdmin);
    onClose();
    setErrorMessage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-[35%]">
        <h2 className="text-xl font-semibold mb-4">Update Admin</h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            required
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdminModal;
