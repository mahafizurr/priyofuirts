import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="  flex justify-between items-center p-2">
        <div className="  items-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
          <a href="tel:+8801303546501" className="hover:underline">
            +8801303546501
          </a>
        </div>
        <div className="flex space-x-4">
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
        </div>
      </div>

      <header className="bg-green-950 text-white p-4 sticky top-0 z-75">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Priyo Fruits</Link>
          </div>
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/cart" className="hover:underline">
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
