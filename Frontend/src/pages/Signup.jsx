import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const navigate = useNavigate();
  const handleSignup = async(e) => {
    e.preventDefault();
    
    try {
      if (!name || !email || !password) {
        setError("Please fill in all fields.");
      } else {
        setError("");
      }
      setLoading(true);
      const input = {
        name: name,
        email: email,
        password: password,
      }
      const res = await axios.post(`${baseUrl}/user/register`, input, {
        withCredentials: true,
      });
      if (res.data.success) { 
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again");
    } finally {
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    }
    
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Sign Up for QuizGenie
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-3xl text-center">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            {
              loading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" />Please wait...</span>: "Sign Up"
            }
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:text-purple-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
