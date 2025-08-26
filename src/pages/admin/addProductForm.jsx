import { useState } from "react"

export default function AddProductForm(){

    const[productId,setProductID]=useState("");
    const[productName,setProductName]=useState("");
    const[altNames,setaltNames]=useState("");
    const[images,setimages]=useState("");
    const[price,setprice]=useState("");
    const[lastprice,setlastprice]=useState("");
    const[stock,setstock]=useState("");
    const[description,setdescription]=useState("");


    return(
<div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: "#6b73ff" }}>
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Add Product Form
    </h1>

    <div className="flex flex-col gap-4">
        <label>Product ID</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e)=>{setProductID(e.target.value)}}
      /></div>

      <div className="flex flex-col gap-4">
        <label>Product Name</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Product Name"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Alternative names</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Alternative names"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Image URLs</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Image URLs"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Product Price</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Product price"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Last Price</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Last price"
      /></div>

    <div className="flex flex-col gap-4">
        <label>Stock</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the Stock"
      /></div>

        <div className="flex flex-col gap-4">
        <label>Product Description</label>
      <textarea
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter Product Description"
      /></div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition">
  Add Product
</button>

    </div>
  </div>


    )
        
}