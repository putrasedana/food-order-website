import React from "react";
import FoodTable from "../components/FoodTable";
import pizza from "../images/pizza.jpg";
import pizza2 from "../images/pizza-2.jpg";
import spaghetti from "../images/spagetti.jpg";
import bigBurger from "../images/big-burger.jpg";

const ManageorderPage = () => {
  const foods = [
    {
      id: 1,
      title: "Margherita Pizza",
      price: 12.99,
      image: pizza2,
      featured: true,
      active: true,
    },
    {
      id: 2,
      title: "Big Burger",
      price: 12.99,
      image: bigBurger,
      featured: false,
      active: true,
    },
    {
      id: 3,
      title: "Carbonara Spaghetti",
      price: 11.99,
      image: spaghetti,
      featured: true,
      active: false,
    },
    {
      id: 4,
      title: "Original Pizza",
      price: 10.99,
      image: pizza,
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
