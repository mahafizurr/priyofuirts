import { useCart } from "../contexts/CartContext";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const { cart, addToCart, isProductInCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleCheckout = async () => {
    router.push("/checkout");
  };

  const inCart = isProductInCart(product.id);

  return (
    <div className="border p-4 rounded-lg flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-auto rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-gray-900 font-bold">৳{product.price}</p>
      {inCart ? (
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Checkout
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
