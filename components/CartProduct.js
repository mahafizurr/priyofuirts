import Image from "next/image";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const CartProduct = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="border p-6 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg mb-4">
      <Image
        src={item.image}
        alt={item.name}
        width={150}
        height={150}
        className="w-40 h-40 rounded object-cover"
      />
      <div className="flex-1 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
        <p className="text-green-600 text-2xl font-bold mb-4">{item.price}৳</p>
        <div className="flex items-center mt-2 mb-4">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="bg-gray-300 px-3 py-1 rounded-l"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 border border-gray-300">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="bg-gray-300 px-3 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
