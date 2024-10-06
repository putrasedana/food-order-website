import React from "react";
import OrderTable from "../components/OrderTable";

const ManageOrderPage = () => {
  const orders = [
    {
      id: 1,
      food: "Burger",
      price: 8.0,
      quantity: 1,
      orderDate: "2024-09-17T03:54:39",
      status: "Ordered",
      customerName: "Jane Doe",
      contact: "88888888888",
      email: "desa1@gmail.com",
      address: "ayam",
    },
  ];

  return (
    <div className="container mx-auto py-6 w-[90%] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Order</h1>
      <OrderTable orders={orders} />
    </div>
  );
};

export default ManageOrderPage;
