import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddAdminModal from "./AddAdminModal";
import ChangePasswordModal from "./ChangePasswordModal";
import UpdateModal from "./UpdateAdminModal";
import DeleteModal from "./DeleteAdminModal";

const AdminTable = ({ admins }) => {
  const location = useLocation();
  const isAdminPath = location.pathname === "/admin/admin";
  const isOrderPath = location.pathname === "/admin/order";

  const [admin, setAdmin] = useState(admins);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openChangePasswordModal = (admin) => {
    setSelectedAdmin(admin);
    setIsChangePasswordModalOpen(true);
  };
  const closeChangePasswordModal = () => setIsChangePasswordModalOpen(false);

  const openUpdateModal = (admin) => {
    setSelectedAdmin(admin);
    setIsUpdateModalOpen(true);
  };
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const openDeleteModal = (admin) => {
    setSelectedAdmin(admin);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDeleteAdmin = () => {
    setAdmin(admin.filter((adm) => adm.id !== selectedAdmin.id));
    closeDeleteModal();
  };

  const handleAddAdmin = (newAdmin) => {
    setAdmin([...admin, { id: Date.now(), ...newAdmin }]);
  };

  const handleUpdateAdmin = (updatedAdmin) => {
    setAdmin(
      admin.map((adm) => (adm.id === updatedAdmin.id ? updatedAdmin : adm))
    );
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
        onClick={openModal}
      >
        Add New Admin
      </button>

      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              S.N.
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Full Name
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Username
            </th>
            <th className="border-b text-center px-6 py-3 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {admin.map((admin, index) => (
            <tr key={admin.id} className="hover:bg-gray-50">
              <td className="border-b text-center px-6 py-3">{index + 1}.</td>
              <td className="border-b text-center px-6 py-3">
                {admin.fullName}
              </td>
              <td className="border-b text-center px-6 py-3">
                {admin.username}
              </td>
              <td className="border-b text-center px-6 py-3">
                <div className="flex items-center justify-center flex-wrap space-x-2">
                  {isAdminPath && (
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                      onClick={() => openChangePasswordModal(admin)}
                    >
                      Change Password
                    </button>
                  )}
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    onClick={() => openUpdateModal(admin)}
                  >
                    Update
                  </button>
                  {!isOrderPath && (
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                      onClick={() => openDeleteModal(admin)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddAdminModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddAdmin}
      />

      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={closeChangePasswordModal}
        admin={selectedAdmin}
        onSubmit={(newPassword) => {
          console.log(
            `Password updated for ${selectedAdmin?.username}: ${newPassword}`
          );
          closeChangePasswordModal();
        }}
      />

      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        admin={selectedAdmin}
        onSubmit={handleUpdateAdmin}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteAdmin}
        admin={selectedAdmin}
      />
    </>
  );
};

export default AdminTable;
