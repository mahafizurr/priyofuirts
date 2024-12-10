// pages/_app.js
import "../styles/globals.css";

import Layout from "../components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";

//const PIXEL_ID = "1617813329066715";
//const GTM_ID = "GTM-TBQNSKBG";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Layout>
    </>
  );
}

export default MyApp;
