import React, { useEffect } from "react";
import useStore from "../lib/productStore";
import Image from "next/image";

const RecommendedProducts = () => {
  const {
    recommendedProducts,
    loading,
    error,
    fetchRecommendedProducts,
    addToCart,
  } = useStore();

  useEffect(() => {
    fetchRecommendedProducts(); // Fetch recommended products when the component mounts
  }, [fetchRecommendedProducts]);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (recommendedProducts.length === 0) {
    return <p className="text-center text-gray-700">No recommended products</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold  mb-8 text-gray-800">
        Recommended Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
                New
              </span>
            </div>
            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-700 mt-2">
                TK. {Number(product.price).toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to handle adding products to the cart
const handleAddToCart = (productId) => {
  // Replace this with your store's add-to-cart logic
  console.log(`Added product ${productId} to the cart.`);
};

export default RecommendedProducts;
