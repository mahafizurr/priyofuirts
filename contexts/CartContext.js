// contexts/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const isProductInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCart,
        isProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
