import React, { useState } from "react";
import PropTypes from "prop-types";
import { House, Package, ShoppingCart, BarChart2 } from "lucide-react";
import { BsPersonCircle } from "react-icons/bs";
const SellerSidebarLayout = ({ children, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md dark:bg-gray-800 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:fixed`}
      >
        <div className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            Admin Seller Dashboard
          </h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <a
                href="/sellerdashboard"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                <House className="w-5 h-5 mr-3" />
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="/sellerproduct"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                <Package className="w-5 h-5 mr-3" />
                Products
              </a>
            </li>
            <li>
              <a
                href="/sellerorder"
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-300"
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                Orders
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
          {/* Hamburger Icon */}
          <button
            type="button"
            className="text-gray-600 dark:text-gray-300 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Page Title */}
          <h2 className="text-xl  font-semibold text-gray-800 dark:text-white ">
            {pageTitle}
          </h2>

          {/* Profile Icon */}
          <BsPersonCircle
            className="icon text-2xl cursor-pointer hover:text-gray-900 mr-6"
            title="Profile"
          />
        </header>

        {/* Page-Specific Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

// PropTypes for type-checking
SellerSidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default SellerSidebarLayout;
