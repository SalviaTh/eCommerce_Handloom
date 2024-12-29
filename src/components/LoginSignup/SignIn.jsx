import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Please enter your email.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Set loading to true
      toast.success("Successfully signed in!");

      // Simulating a sign-in process (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay

      // Reset the form fields
      setEmail("");
      setErrors({});

      // Navigate to home page
      navigate("/"); // Redirect to home
      setLoading(false); // Set loading to false
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white mb-16 p-6 rounded-lg shadow-lg sm:w-full sm:max-w-sm">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 mx-auto mb-4 object-contain"
        />

        <h2 className="sm:text-lg font-semibold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold text-[12px] sm:text-[15px] mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full h-8 sm:text-[15px] text-[12px] p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading} // Disable input during loading
            />
            {errors.email && (
              <p className="text-red-600 text-[10px] mt-1">{errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full bg-red-400 text-white p-1 h-8 sm:text-[15px] text-[12px] rounded-md hover:bg-red-500 transition duration-300 font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue"}{" "}
            {/* Change button text during loading */}
          </button>
        </form>

        <div className="border-t border-gray-300 mt-4 pt-4">
          <p className="text-center text-gray-600 text-[12px]">
            <a href="/" className="text-blue-500">
              Shop on Eyongkart Business
            </a>
          </p>
          <p className="text-center text-gray-600 text-[12px]">
            New to Eyongkart?{" "}
            <Link to="/signup" className="text-red-500">
              Create your Eyongkart account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
