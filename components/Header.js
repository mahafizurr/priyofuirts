// components/Header.js
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row justify-between items-center p-2">
        <div className="flex items-center mb-2 md:mb-0">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
          <a href="tel:+8801303546501" className="hover:underline">
            +8801303546501
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://x.com/Priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com/Priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/message/F2NWRN5I52AUP1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/priyofruits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <header className="bg-green-950 text-white p-4 sticky top-0 z-50">
        <nav className="flex justify-between items-center flex-wrap">
          <div className="text-2xl font-bold">
            <Link href="/">Priyo Fruits</Link>
          </div>
          <div className="block md:hidden">
            <button
              id="menu-toggle"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul
            id="menu"
            className={`w-full md:flex md:items-center md:w-auto md:space-x-8 text-lg ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <li className="my-2 md:my-0">
              <Link
                href="/"
                className="hover:underline block"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link
                href="/about"
                className="hover:underline block"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link
                href="/contact"
                className="hover:underline block"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-2 md:mt-0 flex items-center space-x-4">
            <Link href="/checkout" className="hover:underline">
              <div className="relative">
                <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
                  {cart.length}
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </header>
      {router.pathname === "/" && (
        <div className="container mx-auto mt-4">
          <img
            src="/images/banner.jpg"
            alt="Banner"
            className="w-full rounded shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
