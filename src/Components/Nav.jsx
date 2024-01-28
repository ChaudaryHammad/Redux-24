import  { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
function Nav() {
  const cart = useSelector((state)=> state.cart)


    const [isMenuOpen, setMenuOpen] = useState(false);
    

    
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="">
        <div className="container mx-auto flex justify-between items-center fixed  bg-black p-4 " style={{zIndex:'1'}}>
          <Link to="/" className="text-white font-bold text-xl">MobilX</Link>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 mr-5">
            <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
            <Link to="/cart" className="text-white hover:text-gray-300 relative">
        <FaShoppingCart size={20} className="inline-block mr-1" />
        {cart.length> 0 && (
          <span className="cart-count bg-red-500 text-white rounded-full px-1 absolute top-0 text-[10px] left-4">
            {cart.length}
          </span>
        )}
      </Link>
           
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="focus:outline-none bg-black text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <RxCross2 size={30} />
              ) : (
                <IoMenuSharp size={30} />
              
              )}
            </button>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black transition-opacity duration-300 ease-in-out opacity-100">
              <div className="flex flex-col items-center space-y-4 p-4">
              <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
              <Link to="/cart" className="text-white hover:text-gray-300 relative">
        <FaShoppingCart size={20} className="inline-block mr-1" />
        {cart.length > 0 && (
          <span className="cart-count bg-red-500 text-white rounded-full px-1 absolute top-0 text-[10px] left-4">
            {cart.length}
          </span>
        )}
      </Link>
           
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
  

export default Nav