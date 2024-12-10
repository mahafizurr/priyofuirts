import React, { useEffect } from "react";
import Image from "next/image";
import useStore from "../lib/productStore";

const ProductList = () => {
  const { products, loading, error, fetchProducts, addToCart } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        All Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {product.name} ( cash on delivery )
              </h2>
              <p className="text-gray-700 mt-2">
                TK. {Number(product.price).toFixed(2)}
              </p>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
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

export default ProductList;
