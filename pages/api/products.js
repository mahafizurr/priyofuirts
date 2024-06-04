// pages/api/products.js

const products = [
  {
    id: 1,
    name: "হিমসাগর আম",
    description: "হিমসাগর আম বাংলাদেশের অন্যতম জনপ্রিয় ও মিষ্টি আম।",
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
    description: "খিরসাপাত আম বাংলাদেশের আরেকটি সুস্বাদু ও মিষ্টি আম।",
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
    description: "গোপালভোগ আম এর অনন্য স্বাদ ও গন্ধের জন্য বিখ্যাত।",
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
    description: "স্বাদু এবং মজাদার আচার, যেকোনো খাবারের সঙ্গে খেতে ভালো।",
    priceRange: "৳1,440.00 – ৳2,640.00",
    price: 2640,
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/Aachar.jpg",
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
