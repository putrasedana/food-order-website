import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/admin/home"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/admin/admin"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Admin
            </NavLink>
            <NavLink
              to="/admin/category"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Category
            </NavLink>
            <NavLink
              to="/admin/food"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Food
            </NavLink>
            <NavLink
              to="/admin/order"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Order
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md font-medium text-green-600"
                  : "px-3 py-2 rounded-md font-medium"
              }
            >
              Logout
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
            to="/admin/home"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/admin"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Admin
          </NavLink>
          <NavLink
            to="/admin/category"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Category
          </NavLink>
          <NavLink
            to="/admin/food"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Food
          </NavLink>
          <NavLink
            to="/admin/order"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "block px-3 py-4 bg-gray-700" : "block px-3 py-4"
            }
          >
            Order
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;
