import React from "react";
import useStore from "../lib/productStore"; // Ensure the correct path
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

const HeaderComponent = () => {
  const { cart } = useStore(); // Access the cart from the store
  const cartCount = cart ? cart.length : 0; // Handle cases where cart might be undefined
  const router = useRouter(); // Initialize useRouter

  const handleCartClick = () => {
    router.push("/checkout");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-green-400 to-orange-400 text-black shadow-lg">
      {/* Logo */}
      <div className="logo flex items-center space-x-2">
        <img
          src="/images/priyo-fruits.png" // Ensure this image exists in the public folder
          alt="Priyo Fruits Logo"
          className="w-12 h-12 rounded-full border-2 border-white shadow-md"
        />
      </div>

      {/* Search Bar */}
      <div className="search-bar flex-grow mx-4">
        <SearchBar />
      </div>

      {/* Cart Badge */}
      <div className="cart-badge relative" onClick={handleCartClick}>
        <img
          src="/images/add-to-cart.png" // Ensure this image exists in the public folder
          alt="Cart"
          className="w-10 h-10 cursor-pointer transform hover:scale-110 transition-transform duration-300"
        />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-md">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
