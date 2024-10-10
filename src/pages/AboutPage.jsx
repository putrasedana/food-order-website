import React from "react";
import restaurant from "../images/restaurant.jpg";
import restaurant2 from "../images/restaurant2.jpg";

const AboutPage = () => {
  return (
    <div className="flex-grow container mx-auto text-center py-10 px-6 xl:px-28">
      <h2 className="text-3xl font-semibold mb-8">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-300 w-full h-64 flex items-center rounded-xl justify-center">
          <img
            src={restaurant}
            alt="example"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="bg-white w-full h-64 rounded-xl p-6 flex items-center justify-center">
          <p className="text-lg text-gray-700">
            We are dedicated to bringing you the best culinary experiences. Our
            journey started with a passion for quality food and excellent
            service. From local dishes to international favorites, we ensure
            every meal is crafted with care and love.
          </p>
        </div>

        <div className="bg-white w-full h-64 rounded-xl p-6 flex items-center justify-center">
          <p className="text-lg text-gray-700">
            Our chefs work tirelessly to create unique and delicious menus that
            cater to a variety of tastes. Whether you’re here for a quick snack
            or a full-course meal, we guarantee a memorable dining experience.
          </p>
        </div>

        <div className="bg-gray-300 w-full h-64 flex items-center rounded-xl justify-center">
          <img
            src={restaurant2}
            alt="example"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
