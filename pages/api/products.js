// pages/api/products.js

const products = [
  {
    id: 1,
    name: "হিমসাগর আম",
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু   এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment:  01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
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
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু   এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment:  01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳1,440.00 – ৳2,640.00",
    prices: [1440, 2640],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/khisshapat.jpg",
  },
  {
    id: 3,
    name: "ল্যাংড়া",
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু   এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment:  01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳1,620.00 – ৳2,970.00",
    prices: [1620, 2970],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/ল্যাংড়া.jpg",
  },
  {
    id: 4,
    name: "লক্ষনভোগ",
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু   এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment:  01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳1,200.00 – ৳2,200.00",
    prices: [1200, 2200],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/লক্ষনভোগ.jpg",
  },
  {
    id: 5,
    name: "ফজলি",
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment: 01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳1,200.00 – ৳2,200.00",
    prices: [1200, 2200],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/ফজলি.jpg",
  },
  {
    id: 6,
    name: "গোপালভোগ আম",
    description:
      "আম কাঁচা পন্য হওয়ায় বুকিং এর জন্য কিছু এডভান্স করে বাকি টাকা ক্যাশ অন ডেলিভারিতে নিতে পারবেন। জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ কেজি প্রতি ১০ টাকা করে আলাদা যুক্ত হবে। ১২ কেজির জন্য ৪০০ টাকা, ২২ কেজির জন্য ৬০০ টাকা। Contact/Payment: 01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳1,440.00 – ৳2,640.00 (Not Available)",
    prices: [1440, 2640],
    weights: ["12KG", "22KG"],
    selectedWeight: "22KG",
    quantity: 1,
    image: "/images/gopalvog.jpg",
  },
  {
    id: 7,
    name: "আচার",
    description:
      "জেলা শহরে হোম ডেলিভারি করা হয়। হোম ডেলিভারি চার্জ 150 টাকা করে আলাদা যুক্ত হবে। Contact/Payment: 01303546501 বিকাশ, নগদ, রকেট  (পারসোনাল)।",
    priceRange: "৳530.00 – ৳1000.00",
    prices: [530, 1000],
    weights: ["0.8KG", "1.6KG"],
    selectedWeight: "1.6KG",
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
