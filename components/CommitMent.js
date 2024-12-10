import React from "react";

const CommitMent = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        আমাদের প্রতিশ্রুতি
      </h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-green-500 text-xl mr-2">✅</span>
          আমাদের কাছে পাবেন বাছাইকৃত সেরা মানের খেজুরের গুড়, যা আমরা নিজেদের
          তত্ত্বাবধানে গাছিদের থেকে সংগ্রহ করে থাকি।
        </li>
        <li className="flex items-start">
          <span className="text-green-500 text-xl mr-2">✅</span>
          শতভাগ হাইড্রোজেন বা অন্যান্য রাসায়নিক মুক্ত গুড়ের নিশ্চয়তা।
        </li>
        <li className="flex items-start">
          <span className="text-green-500 text-xl mr-2">✅</span>
          প্রোডাক্ট হাতে পেয়ে, দেখে, কোয়ালিটি চেক করে পেমেন্ট করার সুবিধা।
        </li>
        <li className="flex items-start">
          <span className="text-green-500 text-xl mr-2">✅</span>
          ক্যাশ অন ডেলিভারি, অর্ডার করতে অগ্রীম কোন পেমেন্ট করা লাগবে না।
        </li>
      </ul>
    </div>
  );
};

export default CommitMent;
