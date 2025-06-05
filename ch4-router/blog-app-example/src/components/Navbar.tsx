import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-300 mb-4 pb-2 flex gap-3 items-center">
      <Link to="/" className="hover:text-blue-600 transition">
        Home
      </Link>
      <Link to="/posts" className="hover:text-blue-600 transition">
        Posts
      </Link>
      <Link to="/about" className="hover:text-blue-600 transition">
        About
      </Link>
      <Link to="/login" className="hover:text-blue-600 transition">
        Login
      </Link>
      <Link to="/search" className="hover:text-blue-600 transition">
        Search
      </Link>
    </nav>
  );
}
