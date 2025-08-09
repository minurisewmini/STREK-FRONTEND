import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { MdShoppingCart, MdPeople } from "react-icons/md";
import { Routes, Route } from "react-router-dom";
import AdminProductsPage from "./admin/adminProduct";

export default function AdminHomePage() {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-blue-500 text-white flex flex-col items-center py-10 space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <Link
          to="/admin/dashboard"
          className="hover:bg-blue-600 px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2"
        >
          <GoGraph className="text-xl" />
          Dashboard
        </Link>
        <Link
          to="/admin/products"
          className="hover:bg-blue-600 px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2"
        >
          <FiBox className="text-xl" />
          Products
        </Link>
        <Link
          to="/admin/orders"
          className="hover:bg-blue-600 px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2"
        >
          <MdShoppingCart className="text-xl" />
          Orders
        </Link>
        <Link
          to="/admin/customers"
          className="hover:bg-blue-600 px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2"
        >
          <MdPeople className="text-xl" />
          Customers
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] bg-gray-100 p-10 overflow-y-auto">
        <Routes path="/*">
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductsPage/>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 error</h1>} />
        </Routes>
      </div>
    </div>
  );
}
