import React from "react";
import Link from "next/link";

import { ShoppingCart, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Entropy Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">entropy</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            className="py-4 border-cyan-600 border-b-2 text-gray-600 hover:text-gray-900"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-4 text-gray-600 hover:text-gray-900"
            href="/about"
          >
            About Us
          </Link>

          {/* Dropdown for Products */}
          <div className="relative group">
            <button className="py-4 text-gray-600 hover:text-gray-900 flex items-center">
              Our Products
              <ChevronDown />
            </button>
            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
              <Link
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                href="#"
              >
                Product 1
              </Link>
              <Link
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                href="#"
              >
                Product 2
              </Link>
            </div>
          </div>

          {/* Dropdown for Services */}
          <div className="relative group">
            <button className="py-4 text-gray-600 hover:text-gray-900 flex items-center">
              Our Services
              <ChevronDown />
            </button>
            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg">
              <Link
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                href="#"
              >
                Service 1
              </Link>
              <Link
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                href="#"
              >
                Service 2
              </Link>
            </div>
          </div>

          <Link
            className="py-4 text-gray-600 hover:text-gray-900"
            href="/research"
          >
            Research & Innovations
          </Link>
        </nav>

        {/* Cart, Log In, and Sign Up */}
        <div className="flex items-center space-x-4">
          <button className="py-2 text-gray-600 hover:text-gray-900">
            <ShoppingCart />
          </button>
          <div className="flex items-center border-2 rounded-3xl">
            <Link
              className="px-4 py-1.5 text-gray-600 hover:text-gray-900"
              href="/login"
            >
              Log In
            </Link>
            <Link
              className="bg-cyan-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700"
              href="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
