import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";

const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-10">
        <Navbar />
        <div className="mt-12 pb-10">
          <h1 className="sm:text-3xl text-2xl font-bold text-center text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 max-w-6xl mx-auto">
            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Eyongkart, your privacy is of utmost importance to us. This
                Privacy Policy explains how we collect, use, and protect your
                personal information when you interact with our platform. By
                using Eyongkart, you agree to the practices described in this
                policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-4">
                <li>
                  Personal details such as your name, email address, phone
                  number, and delivery address when you create an account or
                  place an order.
                </li>
                <li>
                  Technical data including your IP address, browser type, device
                  details, and browsing behavior on our platform.
                </li>
                <li>
                  Information collected via cookies to enhance user experience
                  and for analytics purposes.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-4">
                <li>
                  To provide seamless shopping experiences, including processing
                  your orders and managing your account.
                </li>
                <li>
                  To enhance the functionality and performance of Eyongkart,
                  ensuring a user-friendly and personalized platform.
                </li>
                <li>
                  To keep you informed about exclusive offers, new arrivals, and
                  updates, provided you have opted in to receive such
                  communications.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Data Protection Measures
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Eyongkart, we prioritize the security of your personal
                information. We implement advanced encryption, secure servers,
                and regularly update our security practices to prevent
                unauthorized access, misuse, or data breaches.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Sharing Information with Third Parties
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell or rent your personal information to third
                parties. However, we may share your information with trusted
                partners, such as delivery services and payment gateways, to
                fulfill your orders and improve service efficiency. These
                partners adhere to strict confidentiality agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have full control over your personal data. You can request
                to access, update, or delete your information by reaching out to
                us. To exercise these rights, please contact us using the
                details provided below.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Policy Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Privacy Policy is subject to periodic updates to reflect
                changes in our practices or comply with legal requirements. We
                encourage you to review this page regularly to stay informed
                about how we protect your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns regarding our Privacy
                Policy, please feel free to contact us at:
              </p>
              <p className="text-gray-700 font-semibold">
                Email: support@eyongkart.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <ChatBox />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
