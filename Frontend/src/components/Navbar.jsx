import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/slices/authSlice";
import { setQuizHistory } from "../redux/slices/quizSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = async() => { 
    try {
      const res =await axios.get(`${baseUrl}/user/logout`, {
        withCredentials: true,
      });
      if (res.data.success) { 
        dispatch(setUser(null));
        dispatch(setQuizHistory([]));
        toast.success(res.data.message);
        setIsOpen(false);
        navigate("/");

      }
    } catch (error) {
      toast.error("Error logging out");
      
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-white via-purple-100 to-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-purple-700 tracking-wide drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
        >
          Quiz<span className="text-black">Genie</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-semibold text-lg items-center">
          <Link
            to="/"
            className="hover:text-purple-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            className="hover:text-purple-600 transition duration-300"
          >
            Test Yourself
          </Link>
          

          {!user && (
            <Link
              to="/login"
              className="hover:text-purple-600 transition duration-300"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="relative" ref={profileRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-purple-700 hover:text-purple-900"
              >
                <FaUserCircle size={26} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 text-sm z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-2xl text-purple-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-6 pb-4 shadow-md animate-fade-down">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-purple-600"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-purple-600"
          >
            Test Yourself
          </Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="block py-2 text-gray-700 hover:text-purple-600"
              >
                Dashboard
              </Link>
              
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 text-gray-700 hover:text-purple-600"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
