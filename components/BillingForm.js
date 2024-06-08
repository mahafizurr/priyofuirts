import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const BillingForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const districts = ["chapai"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      fullName,
      mobileNumber,
      district,
      fullAddress,
      transactionNumber,
      country: "Bangladesh",
    };

    try {
      const response = await axios.post(
        "https://priyofood-backend.vercel.app/billingDetails",
        formData
      );
      if (response.status === 201) {
        router.push("/thank-you");
      } else {
        setError("Failed to submit form");
      }
    } catch (error) {
      setError("There was an error submitting the form");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">BILLING DETAILS</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            পুরো নাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            মোবাইল নাম্বার <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            জেলা <span className="text-red-500">*</span>
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Select your district
            </option>
            {districts.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            পূর্ণ ঠিকানা <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            Transaction or Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={transactionNumber}
            onChange={(e) => setTransactionNumber(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value="Bangladesh"
            readOnly
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
};

export default BillingForm;
