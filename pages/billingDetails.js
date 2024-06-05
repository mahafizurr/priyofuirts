// pages/billingDetails.js
import { useEffect, useState } from "react";

const BillingDetails = () => {
  const [billingDetails, setBillingDetails] = useState([]);

  useEffect(() => {
    const fetchBillingDetails = async () => {
      const response = await fetch(
        "https://www.priyofruits.com/api/getBillingDetails"
      );
      const data = await response.json();
      setBillingDetails(data);
    };

    fetchBillingDetails();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
      {billingDetails.length === 0 ? (
        <p>No billing details found.</p>
      ) : (
        <div className="grid gap-4">
          {billingDetails.map((detail) => (
            <div key={detail.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{detail.fullName}</h2>
              <p>Mobile Number: {detail.mobileNumber}</p>
              <p>District: {detail.district}</p>
              <p>Full Address: {detail.fullAddress}</p>
              <p>Transaction Number: {detail.transactionNumber}</p>
              <p>Country: {detail.country}</p>
              <p>Created At: {new Date(detail.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BillingDetails;
