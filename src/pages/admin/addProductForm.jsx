import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const [productId, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [altNames, setaltNames] = useState("");
  const [images, setimages] = useState("");
  const [price, setprice] = useState("");
  const [lastprice, setlastprice] = useState("");
  const [stock, setstock] = useState("");
  const [description, setdescription] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(e) {
  e.preventDefault();

  const alternativeNames = altNames.split(",");
  const imageURLs = images.split(",");

  const product = {
    productId,
    productName,
    altNames: alternativeNames,
    images: imageURLs,
    price,
    lastprice,
    stock,
    description,
  };

  const token = localStorage.getItem("token");

  try {
    await axios.post("http://localhost:5000/api/products", product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/admin/products")
    toast.success("Product added Successfully");
  } catch (err) {
    toast.error("Failed to add product")
  }
}


  return (
    <div
      className="w-full h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#6b73ff" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Product Form
        </h1>

        <div className="space-y-4">
          {/* Product ID */}
          <div className="flex flex-col gap-2">
            <label>Product ID</label>
            <input
              type="text"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductID(e.target.value)}
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label>Product Name</label>
            <input
              type="text"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Alternative Names */}
          <div className="flex flex-col gap-2">
            <label>Alternative Names</label>
            <input
              type="text"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Alternative Names"
              value={altNames}
              onChange={(e) => setaltNames(e.target.value)}
            />
          </div>

          {/* Image URLs */}
          <div className="flex flex-col gap-2">
            <label>Image URLs (comma separated)</label>
            <input
              type="text"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Image URLs"
              value={images}
              onChange={(e) => setimages(e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label>Product Price</label>
            <input
              type="number"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Product Price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>

          {/* Last Price */}
          <div className="flex flex-col gap-2">
            <label>Last Price</label>
            <input
              type="number"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Last Price"
              value={lastprice}
              onChange={(e) => setlastprice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col gap-2">
            <label>Stock</label>
            <input
              type="number"
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Stock"
              value={stock}
              onChange={(e) => setstock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label>Product Description</label>
            <textarea
              className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
