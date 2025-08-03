import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 to-blue-600 text-white px-4">
      <h1 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        Welcome to Our Website!!
      </h1>
      <p className="text-lg max-w-md text-center mb-8 drop-shadow-md">
        Your space for peace, meditation, and better mental health.
      </p>
      <button
        onClick={() => alert('button Clicked')}
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
    </div>
  );
}
