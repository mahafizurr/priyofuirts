// pages/api/getBillingDetails.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const billingDetails = await prisma.billingDetail.findMany();
      res.status(200).json(billingDetails);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch billing details" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
