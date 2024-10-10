import React, { useState } from "react";
import Image from "../images/pizza.jpg";

const OrderInput = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Confirmed:", formData);
  };

  return (
    <div className="container mx-auto p-6 my-10 max-w-lg">
      <h2 className="text-xl font-semibold text-center mb-6">
        Fill this form to confirm your order.
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Selected Food</h3>
        <div className="flex space-x-4">
          <div className="w-1/3 bg-gray-300 flex justify-center items-center">
            <img
              src={Image}
              alt="Pizza"
              className="rounded-md h-full object-cover"
            />
          </div>
          <div className="w-2/3">
            <div className="text-xl font-semibold">Pizza</div>
            <div className="text-lg font-semibold my-2">$10.99</div>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none"
              min="1"
              required
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-4">Delivery Details</h3>

        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default OrderInput;
