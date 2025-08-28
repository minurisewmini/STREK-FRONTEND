import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded]=useState(false);

  useEffect(() => {
    if(!productsLoaded){
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log("Use effect is running");
        setProducts(res.data);
        setProductsLoaded(true);
      })

    }}, [productsLoaded]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
        <Link to={"/admin/products/addProduct"}
  className="absolute right-8 bottom-15 
             flex items-center justify-center 
             w-16 h-16 
             rounded-full 
             text-white text-2xl 
             shadow-lg shadow-indigo-400/50
             bg-gradient-to-r from-[#6b73ff] to-[#5a62e6]
             hover:from-[#5a62e6] hover:to-[#4a50d6]
             transition-all duration-300 transform hover:scale-110"
>
  <FaPlus />
</Link>


      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Admin Product Page
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Last Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={product._id || index}
                  className={`border-b border-gray-200 hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.productId}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-sm line-through text-red-500">
                    ${product.lastprice}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 text-center flex justify-center gap-4">
                    <button className="text-blue-500 hover:text-blue-700 transition"
                    title="Edit">
                      <FaPencilAlt />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition"
                    title="Delete"
                    
                    onClick={()=>{
                        alert(product.productId)
                        const token=localStorage.getItem("token");

                        
                        axios.delete(`http://localhost:5000/api/products/${product.productId}`, {
  headers: { Authorization: `Bearer ${token}` },
})
.then(res => {
  toast.success("Product deleted successfully");
  setProductsLoaded(false);
})
.catch(err => toast.error("Failed to delete product"));


                    }}
                    
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
