// pages/api/products.js
const products = [
  {
    id: 1,
    name: "হিমসাগর আম  / Himsagor",
    description: "Sweet and juicy mangoes.",
    price: "1440 - 2640",
    image: "/images/himsagor.jpg",
  },
  {
    id: 2,
    name: "খিরসাপাত আম / Kirshapat",
    description: "Delicious khisshapat mangoes.",
    price: "1440 - 2640",
    image: "/images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "গোপালভোগ আম / Gopalvog",
    description: "Tasty gopalvog mangoes.",
    price: "Not Available",
    image: "/images/gopalvog.jpg",
  },
  {
    id: 4,
    name: "আচার",
    description: "Tasty Aachar.",
    price: "1440 - 2640",
    image: "/images/Aachar.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
