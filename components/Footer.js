import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-green-950 text-white w-full p-8">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start md:flex-col md:items-center sm:flex-col sm:items-center space-y-4 lg:space-y-0">
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
          <ul className="space-y-2">
            <li className="my-2 md:my-0">
              <Link href="/" className="hover:underline block">
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/about" className="hover:underline block">
                About
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link href="/contact" className="hover:underline block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="mt-2">
            Sabek Lavanga, Ranihati, Shiganj, Chapainawabganj-6300.
            <br />
            Phone: 01303546501 <br />
            WhatsApp: 01303546501 <br />
            priyofruits@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Priyo Fruits</p>
      </div>
    </div>
  );
};

export default Footer;
