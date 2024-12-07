import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 py-4 md:py-8">
      <img
        src="/images/heading-banner.jpg"
        alt="Banner"
        className="w-full rounded shadow-md"
      />

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-justify text-sm md:text-base leading-relaxed md:leading-loose">
          Priyo Fruits is a leading business that provides natural, healthy and
          chemical free food to people. Priyo Fruits is a reliable company, all
          the products of Priyo Fruits are directly tested and then delivered to
          the customer. Priyo Fruits is committed to providing authentic
          products
        </p>
      </div>
    </div>
  );
};

export default About;
