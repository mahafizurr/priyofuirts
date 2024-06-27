// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CartProvider } from "../contexts/CartContext";
import Layout from "../components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
import { initFacebookPixel, trackPageView } from "@/lib/facebookPixel";

const PIXEL_ID = "1617813329066715"; // Replace with your actual Pixel ID
const GTM_ID = "GTM-TBQNSKBG";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!PIXEL_ID) {
        console.error("Facebook Pixel ID is missing");
        return;
      }
      initFacebookPixel(PIXEL_ID);
      trackPageView(); // Track the first page load

      const handleRouteChange = () => {
        trackPageView();
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        window.dataLayer.push({ event: "pageview" });
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </Head>
      <CartProvider>
        <Layout>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </Layout>
      </CartProvider>
    </>
  );
}

export default MyApp;
