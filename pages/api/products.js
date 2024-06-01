// pages/api/products.js
const products = [
  {
    id: 1,
    name: "Himsagor",
    description: "Sweet and juicy mangoes.",
    price: "1440 - 2640",
    image: "../images/himsagor.jpg",
  },
  {
    id: 2,
    name: "Khisshapat",
    description: "Delicious khisshapat mangoes.",
    price: "1440 - 2640",
    image: "../images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "Gopalvog Mango",
    description: "Tasty gopalvog mangoes.",
    price: "1440 - 2640",
    image: "../images/gopalvog.jpg",
  },
  {
    id: 4,
    name: "Aachar",
    description: "Tasty Aachar.",
    price: "1440 - 2640",
    image: "../images/Aachar.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
