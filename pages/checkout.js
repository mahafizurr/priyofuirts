// pages/checkout.js
import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BillingForm from "@/components/BillingForm";

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
              className="border p-4 rounded-lg flex flex-col md:flex-row items-center justify-between"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded"
              />
              <div className="flex-1 mt-4 md:mt-0 md:ml-4">
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
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 md:mt-0 md:ml-4"
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
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Payment Instructions:</h3>
            <p>
              আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু এডভান্স করে বাকি টাকা ক্যাশ
              অন ডেলিভারিতে দিতে পারবেন।
            </p>
            <p>জেলা শহরে হোম ডেলিভারি করা হয়।</p>
            <p>
              হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা চার্জ যুক্ত হবে।
            </p>
            <p>১২ কেজির জন্য ৩০০ টাকা</p>
            <p>২২ কেজির জন্য ৫০০ টাকা</p>
            <p>Contact: 01303546501</p>
            <p>Bkash, Nagad, Rocket (Personal)</p>
          </div>
          <br />
          <BillingForm />
        </div>
      )}
      <div className="mt-8">
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
