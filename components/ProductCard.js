import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push({
      pathname: "/checkout",
      query: {
        id: product.id,
        name: product.name,
        priceRange: product.priceRange,
        price: product.price,
        weights: JSON.stringify(product.weights),
        selectedWeight: product.selectedWeight,
        image: product.image,
      },
    });
  };

  return (
    <div
      className="border p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer"
      onClick={handleCheckout}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-auto rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-900 font-bold">{product.priceRange}</p>
    </div>
  );
};

export default ProductCard;
