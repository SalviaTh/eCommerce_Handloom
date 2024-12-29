import React from "react";
import SellerBanner from "./SellerBanner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const HowToSellOn = () => {
  const steps = [
    {
      title: "STEP 1: Register your account",
      description:
        "Register on eyongkart with personal details and an active bank account.",
      image: "/r1.svg",
    },
    {
      title: "STEP 2: Choose storage & shipping",
      description: "Choose storage, packaging, and delivery options.",
      image: "/r2.svg",
    },
    {
      title: "STEP 3: Product Listing",
      description: "List your products by providing product and brand details.",
      image: "/r3.svg",
    },
    {
      title: "STEP 4: Complete orders & get paid",
      description:
        "Deliver orders to customers on time and get paid within 7 days of delivery.",
      image: "/r4.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <SellerBanner />
      <div className="bg-white p-8">
        <h1 className="sm:text-4xl text-2xl font-bold text-center mb-12 text-gray-800">
          How to sell on eyongkart.com?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="p-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 w-36 h-36 flex items-center justify-center mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h2>
              <p className="text-gray-600 mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToSellOn;
