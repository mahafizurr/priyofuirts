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
  const router = useRouter();

  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram (Chittagong)",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore (Jessore)",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      fullName,
      mobileNumber,
      district,
      fullAddress,
      transactionNumber,
      country: "Bangladesh",
    };

    try {
      const response = await axios.post("/api/submitBillingForm", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        router.push("/thank-you");
      } else {
        console.error("Failed to submit billing form", response.statusText);
        alert("Failed to submit billing form: " + response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(number);
  };

  const validateTransactionNumber = (number) => {
    // Assuming transaction number has similar validation
    const regex = /^[0-9a-zA-Z]{10,15}$/;
    return regex.test(number);
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
          {!validateMobileNumber(mobileNumber) && mobileNumber && (
            <span className="text-red-500 text-sm">Invalid mobile number</span>
          )}
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
          {!validateTransactionNumber(transactionNumber) &&
            transactionNumber && (
              <span className="text-red-500 text-sm">
                Invalid transaction number
              </span>
            )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value="Bangladesh"
            readOnly
            className="p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded disabled:bg-gray-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
};

export default BillingForm;
