import { Link, Routes, Route } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 to-blue-600 text-white px-4">
      
      {/* Top bar with Contact button as Link */}
      <div className="w-full flex justify-end py-4 px-6 max-w-screen-xl mx-auto">
        <Link
          to="/contact"
          className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
        >
          Contact
        </Link>
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Our Website!!
        </h1>
        <p className="text-lg max-w-md mb-8 drop-shadow-md">
          Your space for peace, meditation, and better mental health.
        </p>
        <button
          className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </button>
        <Link
          to="/login"
          className="mt-6 text-white underline hover:text-gray-200 transition"
        >
          Login
        </Link>

        <Routes>
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </div>
  );
}
