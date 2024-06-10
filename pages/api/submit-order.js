// pages/api/submit-order.js
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { fullName, mobileNumber, district, fullAddress, transactionNumber } =
      req.body;

    try {
      const client = await clientPromise;
      const db = client.db("checkoutDB");
      const collection = db.collection("orders");

      const result = await collection.insertOne({
        fullName,
        mobileNumber,
        district,
        fullAddress,
        transactionNumber,
        country: "Bangladesh",
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Order submitted successfully", result });
    } catch (error) {
      console.error("Error inserting order:", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
