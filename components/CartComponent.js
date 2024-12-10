import React, { useEffect } from "react";
import useStore from "../lib/productStore";
import { useRouter } from "next/router";

const CartComponent = () => {
  const {
    cart,
    loading,
    error,
    getCart,
    removeFromCart,
    clearCart,
    updateQuantity,
  } = useStore();
  const router = useRouter();

  useEffect(() => {
    getCart(); // Fetch cart items when the component mounts
  }, [getCart]);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    router.push("/billingform");
  };

  const handleQuantityChange = (id, event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  if (cart.length === 0) {
    return <p className="text-center text-gray-700">Your cart is empty</p>;
  }

  // Ensure cartTotal is calculated as a number
  const cartTotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const cartTotalDisplay = `${cartTotal.toFixed(2)}`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
              >
                <div className=" flex flex-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-6">
                    <h2 className="text-lg font-medium text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Price: TK. {Number(item.price).toFixed(2)}
                    </p>
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="mr-2 text-sm text-gray-600"
                    >
                      Qty:
                    </label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      className="w-16 text-center border rounded text-gray-700"
                      min="1"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-lg font-semibold text-gray-800">
              Total: TK. {cartTotalDisplay}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              onClick={handleClearCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
