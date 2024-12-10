import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  products: [],
  cart: [],
  recommendedProducts: [],
  loading: false,
  error: null,

  // Fetch all products
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/api/products");
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Error fetching products", loading: false });
    }
  },

  // Fetch single product by id
  fetchSingleProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/products/${id}`);
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Error fetching product", loading: false });
    }
  },

  // Add a new product
  addProduct: async (newProduct) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/products", newProduct);
      set((state) => ({
        products: [...state.products, response.data],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error adding product", loading: false });
    }
  },

  // Update an existing product
  updateProduct: async (updatedProduct) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(
        `/api/products/${updatedProduct.id}`,
        updatedProduct
      );
      set((state) => ({
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? response.data : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error updating product", loading: false });
    }
  },

  // Delete a product by id
  deleteProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/products/${id}`);
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error deleting product", loading: false });
    }
  },

  // Fetch cart items
  getCart: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/api/cart");
      set({ cart: response.data, loading: false });
    } catch (error) {
      set({ error: "Error fetching cart", loading: false });
    }
  },
  // Fetch products by search query
  fetchProductsBySearch: async (query) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/products?q=${query}`);
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Error searching products", loading: false });
    }
  },

  // Add an item to the cart
  addToCart: async (product) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/cart", product);
      set((state) => ({
        cart: [...state.cart, response.data],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error adding to cart", loading: false });
    }
  },

  // Remove an item from the cart by id
  removeFromCart: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete("/api/cart", { data: { id } });
      set((state) => ({
        cart: state.cart.filter((product) => product.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error removing from cart", loading: false });
    }
  },

  // Clear the cart
  clearCart: async () => {
    set({ loading: true, error: null });
    try {
      await axios.delete("/api/cart");
      set({ cart: [], loading: false });
    } catch (error) {
      set({ error: "Error clearing cart", loading: false });
    }
  },

  // Update the quantity of an item in the cart
  updateQuantity: async (id, quantity) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.patch("/api/cart", { id, quantity });
      set((state) => ({
        cart: state.cart.map((product) =>
          product.id === id ? response.data : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Error updating quantity", loading: false });
    }
  },

  // Checkout process
  checkout: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/api/checkout");
      set({ cart: [], loading: false });
      alert(response.data.message);
    } catch (error) {
      set({
        error: error.response.data.message || "Error during checkout",
        loading: false,
      });
    }
  },
  // recommended products
  fetchRecommendedProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/api/recommended-products");
      set({ recommendedProducts: response.data, loading: false });
    } catch (error) {
      set({ error: "Error fetching recommended products", loading: false });
    }
  },
}));

export default useStore;
