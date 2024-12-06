import React, { createContext, useContext, useState } from "react";
import { db, storage } from "../lib/firebaseConfig"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Create the FormContext
const FormContext = createContext();

// Create a FormProvider component
const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    priceFirstQuantity: "",
    quantityFirstPrice: "",
    priceSecondQuantity: "",
    quantitySecondPrice: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        // Upload image to Firebase Storage
        let imageUrl = "";
        if (formData.image) {
          const imageRef = ref(storage, `products/${formData.image.name}`);
          const snapshot = await uploadBytes(imageRef, formData.image);
          imageUrl = await getDownloadURL(snapshot.ref);
        }

        // Save product data to Firestore
        await addDoc(collection(db, "products"), {
          ...formData,
          image: imageUrl,
        });

        alert("Product added successfully!");
        setFormData({
          name: "",
          image: null,
          priceFirstQuantity: "",
          quantityFirstPrice: "",
          priceSecondQuantity: "",
          quantitySecondPrice: "",
          description: "",
        });
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Failed to add product!");
      }
    };

    // Perform further actions, e.g., API call
  };

  return (
    <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

// Create a custom hook for easy access
const useForm = () => {
  return useContext(FormContext);
};

// ProductForm Component
const ProductForm = () => {
  const { formData, handleChange, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product Control Panel
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1">Product Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Upload Image:
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Price for First Quantity:
            </label>
            <input
              type="text"
              name="priceFirstQuantity"
              value={formData.priceFirstQuantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Quantity for First Price:
            </label>
            <input
              type="text"
              name="quantityFirstPrice"
              value={formData.quantityFirstPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Price for Second Quantity:
            </label>
            <input
              type="text"
              name="priceSecondQuantity"
              value={formData.priceSecondQuantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Quantity for Second Price:
            </label>
            <input
              type="text"
              name="quantitySecondPrice"
              value={formData.quantitySecondPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Product Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Wrap the ProductForm with FormProvider
const App = () => {
  return (
    <FormProvider>
      <ProductForm />
    </FormProvider>
  );
};

export default App;
