// components/ProductCard.js
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Tk {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
