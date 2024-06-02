// pages/api/initiate-payment.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Mock payment request
    const { amount, currency } = req.body;

    // Mock response from payment gateway
    res.status(200).json({
      success: true,
      message: "Payment initiated",
      paymentUrl: "",
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
