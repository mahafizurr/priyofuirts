// pages/checkout.js
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = cart.reduce((sum, product) => {
        const price = parseInt(product.price.split(" ")[0], 10); // Assuming price format "1440 - 2640"
        return sum + price * product.quantity;
      }, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [cart]);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, quantity);
    }
  };

  /* const handleCheckout = async () => {
    const response = await fetch("/api/initiate-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount,
        currency: "BDT",
      }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = data.paymentUrl; // Redirect to the payment URL
    } else {
      alert("Failed to initiate payment");
    }
  }; */

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg flex items-center justify-between"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-gray-900 font-bold">{product.price}৳</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity - 1)
                    }
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity + 1)
                    }
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Total Amount: {totalAmount}৳
          </h2>
          <button
            /* onClick={handleCheckout} */
            className="bg-green-500 text-white px-4 py-2 rounded ml-4"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      <div className="mt-8">
        <Link href="/">
          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            Continue Shopping
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
