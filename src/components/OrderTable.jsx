import React, { useState } from "react";
import UpdateOrderModal from "./UpdateOrderModal";

const OrderTable = ({ orders: initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderToUpdate, setOrderToUpdate] = useState(null);

  const handleOpenModal = (order) => {
    setOrderToUpdate(order);
    setIsModalOpen(true);
  };

  const handleUpdateOrder = (updatedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setIsModalOpen(false); // Close modal after updating
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <>
      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              S.N.
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Food
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Price
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Qty.
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Total
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Order Date
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Status
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Customer Name
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Contact
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Address
            </th>
            <th className="border-b text-center px-4 py-3 text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border-b text-center px-4 py-3">{index + 1}.</td>
              <td className="border-b text-center px-4 py-3">{order.food}</td>
              <td className="border-b text-center px-4 py-3">
                ${(order.price + 0).toFixed(2)}
              </td>
              <td className="border-b text-center px-4 py-3">
                {order.quantity}
              </td>
              <td className="border-b text-center px-4 py-3">
                ${(order.price * order.quantity).toFixed(2)}
              </td>
              <td className="border-b text-center px-4 py-3">
                {new Date(order.orderDate).toLocaleString()}
              </td>
              <td className="border-b text-center px-4 py-3">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border px-2 py-1 rounded-md"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="border-b text-center px-4 py-3">
                {order.customerName}
              </td>
              <td className="border-b text-center px-4 py-3">
                {order.contact}
              </td>
              <td className="border-b text-center px-4 py-3">{order.email}</td>
              <td className="border-b text-center px-4 py-3">
                {order.address}
              </td>
              <td className="border-b text-center px-4 py-3">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  onClick={() => handleOpenModal(order)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <UpdateOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={orderToUpdate}
        onUpdate={handleUpdateOrder}
      />
    </>
  );
};

export default OrderTable;
