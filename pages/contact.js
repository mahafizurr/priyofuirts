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
    <div className="container mx-auto pt-4 ">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-gray-700 mr-2"
          />
          <span className="font-semibold">Address:</span>
          <p>Sabek Lavanga, Ranihati, Shiganj, Chapainawabganj-6300</p>
        </div>
        <div className="mb-4">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-700 mr-2" />
          <span className="font-semibold">Phone:</span>
          <a
            href="tel:+8801918167161"
            className="text-blue-500 hover:underline ml-1"
          >
            01918-167161
          </a>
        </div>
        <div className="mb-4">
          <FontAwesomeIcon icon={faWhatsapp} className="text-gray-700 mr-2" />
          <span className="font-semibold">WhatsApp:</span>
          <a
            href="https://wa.me/8801918167161"
            className="text-blue-500 hover:underline ml-1"
          >
            01918-167161
          </a>
        </div>
        <div className="mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 mr-2" />
          <span className="font-semibold">Email:</span>
          <a
            href="mailto:chapaiambient@gmail.com"
            className="text-blue-500 hover:underline ml-1"
          >
            chapaiambient@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
