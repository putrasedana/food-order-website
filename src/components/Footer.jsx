// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-10 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">Nice Restaurant</h4>
            <p className="text-sm">
              123 Main Street, <br />
              City, Country 12345
            </p>
            <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          </div>

          <div className="w-full sm:w-auto mb-10 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <ul>
              <li>
                <a
                  href="mailto:info@restaurant.com"
                  className="text-sm hover:text-gray-400"
                >
                  info@nicerestaurant.com
                </a>
              </li>
              <li>
                <a href="/reservations" className="text-sm hover:text-gray-400">
                  Reservations
                </a>
              </li>
              <li>
                <a href="/location" className="text-sm hover:text-gray-400">
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto text-center">
            <h4 className="text-lg font-semibold mb-5">Follow Us</h4>
            <ul className="flex space-x-8 justify-center">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; 2024 Restaurant Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
