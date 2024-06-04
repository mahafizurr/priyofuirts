// components/BillingForm.js
import { useState } from "react";
import { useRouter } from "next/router";

const BillingForm = () => {
  const [district, setDistrict] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
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

  const handleThanks = (e) => {
    e.preventDefault();
    router.push("/thank-you"); // Redirect to thank-you page after form submission
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">BILLING DETAILS</h2>
      <form className="space-y-4" onSubmit={handleThanks}>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            পুরো নাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
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
            className="p-2 border border-gray-300 rounded"
            value="Bangladesh"
            readOnly
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="shipToDifferentAddress"
            className="h-4 w-4"
          />
          <label htmlFor="shipToDifferentAddress" className="font-semibold">
            Ship to a different address?
          </label>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Order notes (optional)</label>
          <textarea
            className="p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BillingForm;
