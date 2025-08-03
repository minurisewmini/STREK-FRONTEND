import { Link } from "react-router-dom"
import { GoGraph } from "react-icons/go";
export default function AdminHomePage(){
    return(
        <div className="bg-blue-200 w-full h-screen flex">
            <div className="w-[20%] h-screen bg-blue-500  flex flex-col items-center justify-center">
                <Link to="/admin/dashboard"><GoGraph />Dashboard</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/customers">Customers</Link>
            </div>
            
            <div className="w-[78%] h-screen bg-red-600"></div>
        </div>
    )
}