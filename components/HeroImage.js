import React from "react";
import { useRouter } from "next/router";

const HeroImage = () => {
  const router = useRouter();
  const handleScroll = () => {
    router.push("/products");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/29705091/pexels-photo-29705091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Welcome to Priyo Fruits
        </h1>
        <p className="text-lg mb-6 max-w-md text-gray-300">
          Priyo Fruits provides natural, healthy, and chemical-free food to
          nourish your lifestyle.
        </p>
        <button
          onClick={handleScroll}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-md"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
