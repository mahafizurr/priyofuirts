// pages/_app.js
import "../styles/globals.css";
import { CartProvider } from "../contexts/CartContext";

import Layout from "../components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
