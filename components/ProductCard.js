import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="border p-4 rounded-lg flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-auto rounded"
        onClick={handleCheckout}
      />
      <h2 className="text-xl font-semibold mt-2" onClick={handleCheckout}>
        {product.name}
      </h2>

      <p className="text-gray-900 font-bold">৳{product.priceRange}</p>
    </div>
  );
};

export default ProductCard;
