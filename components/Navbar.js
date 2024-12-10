import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4  shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-8 text-lg font-semibold">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Product
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
