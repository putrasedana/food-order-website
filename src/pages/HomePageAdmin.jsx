import React from "react";
import restaurant from "../images/restaurant.jpg";
import restaurant2 from "../images/restaurant2.jpg";
import foodImg from "../images/food-img.jpg";
import image from "../images/nusa_penida.jpg";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8 px-8 md:px-20 xl:px-36 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat shadow-md rounded-lg p-6 text-center"
          style={{ backgroundImage: `url(${restaurant})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex items-center flex-col h-full justify-center">
            <p className="text-4xl font-bold text-white">4</p>
            <p className="text-gray-200 text-xl">Categories</p>
          </div>
        </div>

        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat shadow-md rounded-lg p-6 text-center"
          style={{ backgroundImage: `url(${foodImg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex items-center flex-col h-full justify-center">
            <p className="text-4xl font-bold text-white">4</p>
            <p className="text-gray-200 text-xl">Foods</p>
          </div>
        </div>

        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat shadow-md rounded-lg p-6 text-center"
          style={{ backgroundImage: `url(${restaurant2})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex items-center flex-col h-full justify-center">
            <p className="text-4xl font-bold text-white">1</p>
            <p className="text-gray-200 text-xl">Total Orders</p>
          </div>
        </div>

        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat shadow-md rounded-lg p-6 text-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex items-center flex-col h-full justify-center">
            <p className="text-4xl font-bold text-green-400">$10.99</p>
            <p className="text-gray-200 text-xl">Revenue Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
