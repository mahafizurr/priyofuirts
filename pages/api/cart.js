let cart = [];

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Respond with the list of cart items
      res.status(200).json(cart);
      break;
    case "POST":
      // Add a new item to the cart
      const newItem = req.body;
      cart.push(newItem);
      res.status(201).json(newItem);
      break;
    case "PATCH":
      // Update an item in the cart
      const { id, quantity } = req.body; // Ensure id and quantity are from req.body
      let updatedItem;
      cart = cart.map((item) => {
        if (item.id === id) {
          updatedItem = { ...item, quantity };
          return updatedItem;
        }
        return item;
      });
      res.status(200).json(updatedItem);
      break;
    case "DELETE":
      // Remove an item from the cart
      const { id: removeId } = req.body; // Ensure id is from req.body
      cart = cart.filter((item) => item.id !== removeId);
      res.status(200).json(cart);
      break;
    default:
      // Handle any other HTTP method
      res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
