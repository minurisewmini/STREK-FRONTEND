export default function AddProductForm(){

    


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
      /></div>

      <div className="flex flex-col gap-4">
        <label>Product Name</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Alternative names</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Image URLs</label>
      <input
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Product Price</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

      <div className="flex flex-col gap-4">
        <label>Last Price</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

    <div className="flex flex-col gap-4">
        <label>Stock</label>
      <input
        type="number"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

        <div className="flex flex-col gap-4">
        <label>Product Description</label>
      <textarea
        type="text"
        className="p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      /></div>

      <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition">
  Add Product
</button>

    </div>
  </div>


    )
        
}