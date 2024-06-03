// pages/api/products.js
const products = [
  {
    id: 1,
    name: "হিমসাগর আম ",
    priceRange: "৳1,560.00 – ৳2,990.00",
    price: 2990,
    weights: ["12KG", "23KG"],
    selectedWeight: "23KG",
    quantity: 1,
    image: "/images/himsagor.jpg",
  },
  {
    id: 2,
    name: "খিরসাপাত আম",

    priceRange: "৳1,560.00 – ৳2,990.00",
    price: 2990,
    weights: ["12KG", "23KG"],
    selectedWeight: "23KG",
    quantity: 1,
    image: "/images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "গোপালভোগ আম",
    priceRange: "৳1,560.00 – ৳2,990.00",
    price: 2990,
    weights: ["12KG", "23KG"],
    selectedWeight: "23KG",
    quantity: 1,
    image: "/images/gopalvog.jpg",
  },
  {
    id: 4,
    name: "আচার",

    priceRange: "৳1,560.00 – ৳2,990.00",
    price: 2990,
    weights: ["12KG", "23KG"],
    selectedWeight: "23KG",
    quantity: 1,
    image: "/images/Aachar.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
