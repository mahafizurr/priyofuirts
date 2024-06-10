import AddToCart from "./AddToCart";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div>
            <ProductCard key={product.id} product={product} />
            <AddToCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
