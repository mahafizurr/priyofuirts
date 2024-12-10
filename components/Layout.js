import React from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import HeaderComponent from "./HeaderComponent";
import HeroImage from "./HeroImage";
import Navbar from "./Navbar";
import TopContactLink from "./TopContactLink";

const Layout = ({ children }) => {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <>
      <TopContactLink />
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <HeaderComponent />
        <Navbar />
      </header>

      <main>
        {router.pathname === "/" && <HeroImage />} {/* Conditional rendering */}
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
