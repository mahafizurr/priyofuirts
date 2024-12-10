export default function handler(req, res) {
  if (req.method === "GET") {
    // Define a list of recommended products
    const recommendedProducts = [
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
        price: [1150],
        weights: ["1KG"],
        selectedWeight: "1KG",
        quantity: 1,
        image: "/images/akher-patali-gur.jpg",
      },
    ];

    // Respond with the list of recommended products
    res.status(200).json(recommendedProducts);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
