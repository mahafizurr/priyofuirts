import React from "react";

const SocialMediaLinks = () => (
  <div className="flex justify-center space-x-6 mt-2 mb-2">
    <a
      href="https://www.facebook.com/Priyofruits"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800"
      aria-label="Facebook"
    >
      <i className="fab fa-facebook text-2xl"></i>
    </a>
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-800"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram text-2xl"></i>
    </a>
    <a
      href="https://x.com/Priyofruits"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-600"
      aria-label="Twitter"
    >
      <i className="fab fa-twitter text-2xl"></i>
    </a>
    <a
      href="https://wa.me/8801303546501"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-700"
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  </div>
);

const TopContactLink = () => {
  return (
    <div>
      <SocialMediaLinks />
    </div>
  );
};

export default TopContactLink;
