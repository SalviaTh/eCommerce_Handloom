import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { toast } from "react-toastify";

const SellerBanner = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [signupOpened, { open: openSignup, close: closeSignup }] =
    useDisclosure(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email or mobile number.");
    } else {
      setLoading(true);
      toast.success("Successfully signed in!");
      setTimeout(() => {
        setLoading(false);
        navigate("/sellerform");
      }, 2000);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email or mobile number.");
    } else {
      setLoading(true);
      toast.success("Successfully signed up!");
      setTimeout(() => {
        setLoading(false);
        navigate("/sellerform");
      }, 2000);
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-orange-500 via-orange-400 to-red-600 text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center shadow-lg relative">
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-orange-300 opacity-20 rounded-full blur-xl"></div>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 opacity-20 rounded-full blur-xl"></div>

      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Become an eyongkart.com Seller
        </h1>
        <p className="sm:text-lg text-sm mb-6 leading-relaxed">
          Unlock savings with reduced selling fees for every order on Manipur's
          go-to online store. Start your journey today and grow with us!
        </p>
        <Button
          type="button"
          onClick={open}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Sign up
        </Button>

        <Modal opened={opened} onClose={close} centered>
          <div className="flex items-center justify-center ">
            <div className="w-96 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h1 className="sm:text-2xl text-xl font-semibold text-center mb-6">
                Sign In
              </h1>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email or mobile number
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none mb-6"
                required
              />

              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-400 focus:ring focus:ring-red-300 mb-4"
              >
                Continue
              </button>

              <p className="text-center text-sm text-gray-500">
                <span>New to eyongkart? </span>
                <a
                  href="#"
                  onClick={openSignup} // Open the signup modal when clicked
                  className="text-red-600 hover:underline"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </Modal>

        {/* Sign Up Modal */}
        <Modal opened={signupOpened} onClose={closeSignup} centered>
          <div className="flex items-center justify-center">
            <div className="w-96 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h1 className="sm:text-2xl text-xl font-semibold text-center mb-6">
                Create an Account
              </h1>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none mb-6"
                required
              />
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Mobile number
              </label>
              <input
                type="text"
                id="number"
                placeholder="Enter number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none mb-6"
                required
              />
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none mb-6"
                required
              />

              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

              <button
                type="button"
                onClick={handleSignup}
                disabled={loading}
                className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-400 focus:ring focus:ring-red-300 mb-4"
              >
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-500">
                <span>Already have an account? </span>
                <a
                  href="#"
                  onClick={closeSignup}
                  className="text-red-600 hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </Modal>

        <p className="text-sm mt-4 opacity-90">
          Sell more and pay less in fees.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <div className="relative group">
          <div className="w-60 h-60 lg:w-80 lg:h-80 bg-white rounded-full flex items-center justify-center relative overflow-hidden shadow-xl transition-transform transform group-hover:scale-105">
            <img
              src="/seller.svg"
              alt="Seller illustration"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-[-10px] left-[-20px] w-6 h-6 bg-indigo-600 clip-star shadow-md animate-pulse"></div>
          <div className="absolute top-[-10px] right-[-20px] w-6 h-6 bg-green-400 clip-star shadow-md animate-pulse"></div>
          <div className="absolute top-[-10px] left-[-10px] w-6 h-6 bg-indigo-600 clip-star shadow-md animate-bounce"></div>
          <div className="absolute bottom-[-10px] right-[-10px] w-6 h-6 bg-green-400 clip-star shadow-md animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default SellerBanner;
