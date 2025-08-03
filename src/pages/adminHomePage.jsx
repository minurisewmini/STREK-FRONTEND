import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { MdShoppingCart, MdPeople, MdDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";

export default function AdminHomePage() {
  return (
    <div className="bg-gray-100 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-full bg-indigo-700 text-white flex flex-col py-10 px-4 space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>

        <Link
          to="/admin/dashboard"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-4 py-2 rounded transition"
        >
          <MdDashboard className="text-xl" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-4 py-2 rounded transition"
        >
          <FiBox className="text-xl" />
          <span>Products</span>
        </Link>

        <Link
          to="/admin/orders"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-4 py-2 rounded transition"
        >
          <MdShoppingCart className="text-xl" />
          <span>Orders</span>
        </Link>

        <Link
          to="/admin/customers"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-4 py-2 rounded transition"
        >
          <MdPeople className="text-xl" />
          <span>Customers</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-full p-10">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Admin Dashboard</h1>
        {/* You can render other nested routes here */}
      </div>
    </div>
  );
}
