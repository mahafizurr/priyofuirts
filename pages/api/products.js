// pages/api/products.js
const products = [
  {
    id: 1,
    name: "হিমসাগর আম ",
    priceRange: "৳1,440.00 – ৳2,640.00",
    price: 2640,
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/himsagor.jpg",
  },
  {
    id: 2,
    name: "খিরসাপাত আম",

    priceRange: "৳1,440.00 – ৳2,640.00",
    price: 2640,
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "গোপালভোগ আম",
    priceRange: "৳1,440.00 – ৳2,640.00",
    price: 2640,
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/gopalvog.jpg",
  },
  {
    id: 4,
    name: "আচার",

    priceRange: "৳1,440.00 – ৳2,640.00",
    price: 2640,
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/Aachar.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
