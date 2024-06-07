// pages/api/getBillingDetails.js
import { PrismaClient } from "@prisma/client";
import withCors from "../../middleware/withCors";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const billingDetails = await prisma.billingDetail.findMany();
    return res.status(200).json(billingDetails);
  } catch (error) {
    console.error("Error fetching billing details:", error);
    return res.status(500).json({ error: "Failed to fetch billing details" });
  }
};

export default withCors(handler);
