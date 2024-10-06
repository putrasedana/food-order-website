import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold">
              <img src={Logo} alt="Logo" className="h-9 w-auto" />
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Category
            </NavLink>
            <NavLink
              to="/food"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Food
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600 "
                  : "px-3 py-2 rounded-md font-medium bg-green-500 hover:bg-green-600"
              }
            >
              Login Admin
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-white bg-gray-700 text-base font-medium py-4 text-center">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Category
          </NavLink>
          <NavLink
            to="/food"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Food
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Login Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
