import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <img
        src="/images/heading-banner.jpg"
        alt="Banner"
        className="w-full rounded shadow-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Address:</span>
            <p className="text-gray-700">
              Sabek Lavanga, Ranihati, Shibganj, Chapainawabganj-6300
            </p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Phone:</span>
            <a
              href="tel:+8801303546501"
              className="text-blue-500 hover:underline"
            >
              01303546501
            </a>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">WhatsApp:</span>
            <a
              href="https://wa.me/8801918167161"
              className="text-blue-500 hover:underline"
            >
              01303546501
            </a>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-700 mr-4 text-xl"
          />
          <div>
            <span className="font-semibold block">Email:</span>
            <a
              href="mailto:priyofruits@gmail.com"
              className="text-blue-500 hover:underline"
            >
              priyofruits@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
