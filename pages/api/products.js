const products = [
  {
    id: 1,
    name: "খেজুরের গোল পাটালি গুড়",
    description: "abccufdvhufijovfijvfpojvojp",
    price: [380],
    weights: ["1KG"],
    selectedWeight: "1KG",
    quantity: 1,
    image: "/images/round-gur.jpg",
  },
  {
    id: 2,
    name: "খেজুরের দানাদার গুড়",
    description: "abccufdvhufijovfijvfpojvojp",
    price: [380],
    weights: ["1KG"],
    selectedWeight: "1KG",
    quantity: 1,
    image: "/images/danadar-gur.jpg",
  },
  {
    id: 3,
    name: "খেজুরের বীজ/চকলেট গুড়",
    description: "abccufdvhufijovfijvfpojvojp",
    price: [480],
    weights: ["1KG"],
    selectedWeight: "1KG",
    quantity: 1,
    image: "/images/choklet-gur.jpg",
  },
  {
    id: 4,
    name: "খেজুরের গোল পাটালি + ফয়েল পাটালি",
    description: "abccufdvhufijovfijvfpojvojp",
    price: [1150],
    weights: ["3KG"],
    selectedWeight: "1KG",
    quantity: 1,
    image: "/images/foyel-fataly.jpg",
  },
  {
    id: 5,
    name: "আখের ফয়েল পাটালি গুড়",
    description: "abccufdvhufijovfijvfpojvojp",
    price: [260],
    weights: ["1KG"],
    selectedWeight: "1KG",
    quantity: 1,
    image: "/images/akher-patali-gur.jpg",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { q } = req.query;

    if (!q) {
      res.status(200).json(products);
      return;
    }

    // Decode the query and handle special characters
    const query = decodeURIComponent(q).toLowerCase();

    // Filter products if `q` is provided, otherwise return all products
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    res.status(200).json(filteredProducts);
  } else {
    // Respond with a 405 for unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
