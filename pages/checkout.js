import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const router = useRouter();
  const { query } = router;
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [weights, setWeights] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (query.id) {
      fetch(`/api/products?id=${query.id}`)
        .then((res) => res.json())
        .then((data) => {
          const productData = data.find(
            (item) => item.id === parseInt(query.id)
          );
          setProduct(productData);
          setWeights(productData.weights);
          setSelectedWeight(query.selectedWeight || productData.weights[0]);
        });
    }
  }, [query.id, query.selectedWeight]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product) {
      const cartProduct = {
        id: product.id,
        name: product.name,
        priceRange: product.priceRange,
        price: product.prices[weights.indexOf(selectedWeight)],
        selectedWeight,
        quantity,
        image: product.image,
      };
      addToCart(cartProduct);
      router.push("/cart"); // Redirect to cart page after adding to cart
    }
  };

  const handleBillingForm = () => {
    router.push("/billingform"); // Redirect to billing form page
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid gap-4">
        <div className="border p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-80 h-80 rounded"
          />
          <div className="flex-1 mt-4 md:mt-0 md:ml-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600 text-2xl font-bold">
              {product.priceRange}
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
              Total Amount:{" "}
              {product.prices[weights.indexOf(selectedWeight)] * quantity}৳
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
