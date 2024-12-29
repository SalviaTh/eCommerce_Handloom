import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";

const CancellationAndRefund = () => {
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
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="sm:text-3xl text-2xl mt-9 font-bold text-gray-800">
              Cancellation and Refund Policy
            </h1>
          </header>

          <main className="space-y-6 text-gray-700">
            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                We are committed to ensuring customer satisfaction and have a
                clear cancellation and refund policy in place. This document
                outlines the conditions under which orders can be canceled and
                refunds processed.
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Cancellation Policy
              </h2>
              <p className="leading-relaxed">
                Orders can be canceled within <strong>24 hours</strong> of
                placement. Cancellations beyond this timeframe will not be
                accepted. To cancel an order:
              </p>
              <ul className="list-disc pl-6">
                <li>Log into your account.</li>
                <li>
                  Navigate to your order history and select the order you wish
                  to cancel.
                </li>
                <li>
                  Click the "Cancel Order" button and confirm your action.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                For any issues, please contact our support team at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@example.com" className="text-blue-500">
                  support@example.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Refund Policy
              </h2>
              <p className="leading-relaxed">
                Refunds are processed for orders canceled within the allowed
                period. Refunds are issued to the original payment method and
                may take <strong>7-10 business days</strong> to reflect in your
                account.
              </p>
              <p className="leading-relaxed">
                Refund requests may be declined if:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  The cancellation request is made after the allowed time.
                </li>
                <li>
                  The product has been used, opened, or is non-returnable as per
                  specific terms.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                How to Request a Refund
              </h2>
              <p className="leading-relaxed">To request a refund:</p>
              <ul className="list-disc pl-6">
                <li>Log into your account and visit the "Orders" section.</li>
                <li>Select the order for which you want a refund.</li>
                <li>Click "Request Refund" and provide necessary details.</li>
                <li>
                  Our support team will review and notify you of the outcome.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Non-Refundable Items
              </h2>
              <p className="leading-relaxed">
                The following items are non-refundable:
              </p>
              <ul className="list-disc pl-6">
                <li>Gift cards</li>
                <li>Personalized or customized items</li>
                <li>Perishable goods (e.g., food or beverages)</li>
                <li>Intimate products (e.g., underwear, cosmetics)</li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-700 mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                For questions or concerns about our policies, reach out to our
                customer support team:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@example.com" className="text-blue-500">
                  support@example.com
                </a>
              </p>
              <p>
                Phone: <span className="text-blue-500">+1 234 567 890</span>
              </p>
            </section>
          </main>
        </div>
      </div>
      <ChatBox />
      <Footer />
    </>
  );
};

export default CancellationAndRefund;
