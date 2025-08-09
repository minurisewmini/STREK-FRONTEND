export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 flex items-center justify-center text-white px-4">
      <div className="bg-white text-purple-700 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
