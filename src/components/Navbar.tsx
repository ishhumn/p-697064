
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Code, Cpu, Laptop, BookOpen, BookText } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Karuna Writes
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link to="/programming" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center">
              <Code className="h-4 w-4 mr-1" />
              Programming
            </Link>
            <Link to="/tech" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center">
              <Cpu className="h-4 w-4 mr-1" />
              Tech
            </Link>
            <Link to="/resources" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center">
              <BookText className="h-4 w-4 mr-1" />
              Resources
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/programming" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Programming
            </Link>
            <Link to="/tech" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Tech
            </Link>
            <Link to="/resources" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
