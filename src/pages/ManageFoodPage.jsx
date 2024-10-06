import React from "react";
import FoodTable from "../components/FoodTable";
import img from "../images/nusa_penida.jpg";

const ManageorderPage = () => {
  const foods = [
    {
      id: 1,
      title: "Margherita Pizza",
      price: 12.99,
      image: img,
      featured: true,
      active: true,
    },
    {
      id: 2,
      title: "Big Burger",
      price: 12.99,
      image: img,
      featured: false,
      active: true,
    },
    {
      id: 3,
      title: "American Salad",
      price: 12.99,
      image: img,
      featured: true,
      active: false,
    },
  ];
  return (
    <div className="container mx-auto py-6 w-[70%] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Food</h1>
      <FoodTable data={foods} />
    </div>
  );
};

export default ManageorderPage;
