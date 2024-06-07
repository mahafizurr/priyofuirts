// pages/billingDetails.js
import axios from "axios";
import { useEffect, useState } from "react";

const BillingDetails = () => {
  const [billingDetails, setBillingDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBillingDetails = async () => {
      try {
        const response = await axios.get("/api/getBillingDetails");
        setBillingDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch billing details", error);
        setError("Failed to fetch billing details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBillingDetails();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
      {billingDetails.length === 0 ? (
        <p className="text-center">No billing details found.</p>
      ) : (
        <div className="grid gap-4">
          {billingDetails.map((detail) => (
            <div key={detail.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{detail.fullName}</h2>
              <p className="mb-1">
                <strong>Mobile Number:</strong> {detail.mobileNumber}
              </p>
              <p className="mb-1">
                <strong>District:</strong> {detail.district}
              </p>
              <p className="mb-1">
                <strong>Full Address:</strong> {detail.fullAddress}
              </p>
              <p className="mb-1">
                <strong>Transaction Number:</strong> {detail.transactionNumber}
              </p>
              <p className="mb-1">
                <strong>Country:</strong> {detail.country}
              </p>
              <p className="mb-1">
                <strong>Created At:</strong>{" "}
                {new Date(detail.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BillingDetails;
