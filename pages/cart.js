import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const router = useRouter();
  const { cart } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalAmount(total);
    };

    calculateTotal();
  }, [cart]);

  if (cart.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="grid gap-8">
        {cart.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Total Amount: {totalAmount}৳
        </h2>
        <button
          onClick={() => router.push("/billingform")}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Proceed to Checkout
        </button>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
