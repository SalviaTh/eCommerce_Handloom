import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";

const ShippingAndDelivery = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto mt-8">
          <h1 className="sm:text-3xl text-2xl font-semibold text-center text-gray-800 mb-12">
            Shipping and Delivery Information
          </h1>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700 ">
              Introduction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed ">
              Our goal is to provide a smooth and efficient shipping experience.
              Below you'll find our shipping policies, methods, costs, and
              delivery times.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Shipping Methods and Processing Time
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer a variety of shipping methods based on your location.
              Orders are processed within <strong>1-3 business days</strong> and
              shipped using your selected method.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Standard Shipping: Estimated delivery in 5-7 business days.
              </li>
              <li>
                Expedited Shipping: Estimated delivery in 2-3 business days.
              </li>
              <li>
                Overnight Shipping: Next business day delivery for orders placed
                before 12 PM.
              </li>
            </ul>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Shipping Costs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Shipping costs depend on your shipping address and selected method
            </p>
            {/* <ul className="list-disc pl-6 text-gray-600">
              <li>
                Standard Shipping: Free for orders above $50; $5 flat charge for
                orders under $50.
              </li>
              <li>Expedited Shipping: $15 flat charge.</li>
              <li>Overnight Shipping: $25 flat charge.</li>
            </ul> */}
            <p className="text-lg text-gray-600 mt-4">
              Additional fees may apply for remote areas or special shipping
              requests.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Order Tracking
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You will receive a tracking number by email once your order is
              shipped. Track your order on the carrier’s website.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              If you don't receive a tracking number within 48 hours, please
              contact customer support.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Delivery Times
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Delivery times depend on your location and the chosen shipping
              method.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Domestic Orders: 5-7 business days (Standard), 2-3 business days
                (Expedited), Next business day (Overnight).
              </li>
              <li>
                International Orders: 7-14 business days, depending on
                destination and customs clearance.
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-4">
              Delays may occur due to unforeseen circumstances such as weather
              or holidays.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Shipping Restrictions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At this time, we are unable to ship to the following locations:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>PO Boxes</li>
              <li>Military Addresses (APO/FPO)</li>
              <li>Certain international regions due to customs restrictions</li>
            </ul>
            <p className="text-lg text-gray-600 mt-4">
              Please contact customer support if you’re unsure about shipping to
              your location.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Lost or Damaged Items
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If your order is lost or damaged, please contact our customer
              support team within <strong>7 days</strong> of receiving the
              package.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Retain all packaging and labels for inspection by the carrier.
            </p>
          </section>

          <section className="space-y-6 mb-3">
            <h2 className="sm:text-2xl text-xl font-medium text-gray-700">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For any shipping or delivery-related queries, please contact our
              customer support:
            </p>
            <p className="text-lg text-gray-600">
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Phone: <span className="text-blue-600">+1 234 567 890</span>
            </p>
          </section>
        </div>
      </div>
      <ChatBox />
      <Footer />
    </>
  );
};

export default ShippingAndDelivery;
