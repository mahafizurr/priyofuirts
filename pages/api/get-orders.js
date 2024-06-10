// pages/api/get-orders.js
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("checkoutDB");
      const collection = db.collection("orders");
      const orders = await collection.find({}).toArray();

      res.status(200).json({ orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
