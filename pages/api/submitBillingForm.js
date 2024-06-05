// pages/api/submitBillingForm.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fullName,
      mobileNumber,
      district,
      fullAddress,
      transactionNumber,
      country,
    } = req.body;

    try {
      const billingDetail = await prisma.billingDetail.create({
        data: {
          fullName,
          mobileNumber,
          district,
          fullAddress,
          transactionNumber,
          country,
        },
      });

      res.status(200).json(billingDetail);
    } catch (error) {
      res.status(500).json({ error: "Failed to save billing details" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
