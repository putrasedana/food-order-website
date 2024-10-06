import React from "react";

const DeleteAdminModal = ({ isOpen, onClose, onConfirm, admin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-[35%]">
        <h2 className="text-lg font-semibold mb-4">Delete Admin</h2>
        <p>
          Are you sure you want to delete <strong>{admin?.fullName}</strong>?
        </p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdminModal;
