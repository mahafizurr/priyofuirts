// pages/api/products.js

const products = [
  {
    id: 1,
    name: "হিমসাগর আম",
    priceRange: "৳1,440.00 – ৳2,640.00",
    prices: [1440, 2640],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/himsagor.jpg",
  },
  {
    id: 2,
    name: "খিরসাপাত আম",
    priceRange: "৳1,440.00 – ৳2,640.00",
    prices: [1440, 2640],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "গোপালভোগ আম",
    priceRange: "৳1,440.00 – ৳2,640.00 (Not Available)",
    prices: [1440, 2640],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/gopalvog.jpg",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Respond with the list of products
    res.status(200).json(products);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
