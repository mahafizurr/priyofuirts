import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const router = useRouter();
  const { query } = router;
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(
    query.selectedWeight || ""
  );
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    if (query.weights) {
      setWeights(JSON.parse(query.weights));
      setSelectedWeight(query.selectedWeight || JSON.parse(query.weights)[0]);
    }
  }, [query.weights, query.selectedWeight]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const product = {
      id: query.id,
      name: query.name,
      priceRange: query.priceRange,
      price: query.price,
      selectedWeight,
      quantity,
      image: query.image,
    };
    addToCart(product);
    router.push("/cart"); // Redirect to cart page after adding to cart
  };

  const handleBillingForm = () => {
    router.push("/billingform"); // Redirect to cart page after adding to cart
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid gap-4">
        <div className="border p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <Image
            src={query.image}
            alt={query.name}
            width={300}
            height={300}
            className="w-32 h-32 rounded"
          />
          <div className="flex-1 mt-4 md:mt-0 md:ml-4">
            <h2 className="text-xl font-semibold">{query.name}</h2>
            <p className="text-gray-700">{query.description}</p>
            <p className="text-green-600 text-2xl font-bold">
              {query.priceRange}
            </p>
            <div className="flex items-center mt-2">
              {weights.map((weight, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded ${
                    selectedWeight === weight
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={() => setSelectedWeight(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-4">
              Total Amount: {query.price * quantity}৳
            </h2>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="bg-gray-300 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="bg-gray-300 px-2 py-1 rounded"
              >
                +
              </button>
              <button
                className="bg-green-500 text-white mx-2 px-4 py-2 rounded"
                onClick={handleBillingForm}
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
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
          <p>১২ কেজির জন্য ৪০০ টাকা</p>
          <p>২২ কেজির জন্য ৬০০ টাকা</p>
          <p className=" font-bold">Contact: 01303546501</p>
          <p className=" text-blue-700">Bkash, Nagad, Rocket (Personal)</p>
        </div>
        <br />
      </div>

      <div className="mt-8">
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Checkout;
