import  { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">Home</Link>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
            <Link to="/cart" className="text-white hover:text-gray-300">cart(0)</Link>
           
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black">
              <div className="flex flex-col items-center space-y-4 p-4">
              <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
            <Link to="/cart" className="text-white hover:text-gray-300">cart(0)</Link>
           
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
  

export default Nav