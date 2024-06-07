// pages/api/submitBillingForm.js
import { PrismaClient } from "@prisma/client";
import withCors from "../../middleware/withCors";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    mobileNumber,
    district,
    fullAddress,
    transactionNumber,
    country,
  } = req.body;

  if (
    !fullName ||
    !mobileNumber ||
    !district ||
    !fullAddress ||
    !transactionNumber ||
    !country
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^[0-9]{10,15}$/.test(mobileNumber)) {
    return res.status(400).json({ error: "Invalid mobile number" });
  }

  if (!/^[0-9a-zA-Z]{10,15}$/.test(transactionNumber)) {
    return res.status(400).json({ error: "Invalid transaction number" });
  }

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

    return res.status(200).json(billingDetail);
  } catch (error) {
    console.error("Error saving billing details:", error);
    return res.status(500).json({ error: "Failed to save billing details" });
  }
};

export default withCors(handler);
