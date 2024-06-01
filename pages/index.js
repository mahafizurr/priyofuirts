// pages/index.js
import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = storedCart.find((item) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      storedCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Our Products</h1>
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
