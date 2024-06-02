import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white w-full p-8">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start md:items-center space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3626.631976049487!2d88.19783062481943!3d24.636366154189094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSabek%20Lavanga%2C%20Ranihati%2C%20Shiganj%2C%20Chapainawabganj-6300.!5e0!3m2!1sen!2sbd!4v1717239038896!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/3 pl-4">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline block">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mt-2">
            Sabek Lavanga, Ranihati, Shiganj, Chapainawabganj-6300.
            <br />
            Phone:{" "}
            <a href="tel:+8801303546501" className="hover:underline">
              01303546501
            </a>
            <br />
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801303546501"
              target="_blank"
              className="hover:underline"
            >
              01303546501
            </a>
            <br />
            Email:{" "}
            <a href="mailto:priyofruits@gmail.com" className="hover:underline">
              priyofruits@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Priyo Fruits. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
