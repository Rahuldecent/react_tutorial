import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 text-blue-600 text-2xl font-extrabold tracking-tight">
            MyApp
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className={`text-lg transition-all duration-200 hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600 font-semibold underline' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/offices"
              className={`text-lg transition-all duration-200 hover:text-blue-600 ${
                isActive('/offices') ? 'text-blue-600 font-semibold underline' : 'text-gray-700'
              }`}
            >
              Offices
            </Link>
          </div>

          {/* Right: Mobile Menu Placeholder (optional) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
