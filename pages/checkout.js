// pages/checkout.js
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/router";

const Checkout = () => {
  const { cart } = useCart();
  const router = useRouter();

  const handlePayment = async () => {
    // Implement payment logic here
    console.log("Processing payment for:", cart);
    router.push("/payment");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ৳{item.price}
              </li>
            ))}
          </ul>
          <p>
            আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু এডভান্স করে বাকি টাকা ক্যাশ
            অন ডেলিভারিতে দিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম
            ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা চার্জ যুক্ত হবে। ১২
            কেজির জন্য ৩০০ টাকা ২২ কেজির জন্য ৫০০ টাকা
          </p>

          <button
            onClick={handlePayment}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
