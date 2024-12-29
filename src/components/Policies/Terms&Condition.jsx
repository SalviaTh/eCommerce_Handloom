import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";

const TermsAndConditions = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mt-6">
              Terms and Conditions
            </h1>
          </header>

          <main className="space-y-6 text-gray-700 text-sm sm:text-base">
            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Introduction
              </h2>
              <p>
                Welcome to Eyongkart! By accessing or using our services, you
                agree to comply with these terms and conditions. If you do not
                agree with any part of these terms, please refrain from using
                our platform.
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Your Responsibilities
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Provide accurate and up-to-date information when registering.
                </li>
                <li>
                  Maintain the confidentiality of your Eyongkart account
                  credentials.
                </li>
                <li>
                  Ensure that your use of our platform complies with applicable
                  laws and regulations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Restrictions
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Do not engage in activities that harm or disrupt Eyongkart's
                  operations.
                </li>
                <li>
                  Unauthorized access to our systems is strictly prohibited.
                </li>
                <li>
                  Avoid using bots or other automated tools to interact with our
                  platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Payments and Refunds
              </h2>
              <ul className="list-disc pl-5">
                <li>All payments must be completed at the time of purchase.</li>
                <li>
                  Refunds are processed in accordance with our{" "}
                  <span className="font-medium">Refund Policy</span>. Refer to
                  the policy for detailed terms.
                </li>
                <li>
                  Eyongkart reserves the right to cancel or modify orders at its
                  discretion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Liability
              </h2>
              <p>
                Eyongkart is not liable for any direct, indirect, incidental, or
                consequential damages arising from the use of our platform or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these terms or engage in activities deemed harmful to
                Eyongkart or its users.
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Privacy
              </h2>
              <p>
                Your privacy is important to us. Please review our{" "}
                <span className="font-medium">Privacy Policy</span> to
                understand how we handle your data.
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Updates
              </h2>
              <p>
                These terms may be updated periodically to reflect changes in
                our policies or legal requirements. Please check this page
                regularly for the latest updates.
              </p>
            </section>

            <section>
              <h2 className="sm:text-2xl text-xl font-semibold text-gray-800 mb-2">
                Contact
              </h2>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, feel free to contact us at{" "}
                <a
                  href="mailto:support@eyongkart.com"
                  className="text-blue-600 underline"
                >
                  support@eyongkart.com
                </a>
                . Our team will be happy to assist you.
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

export default TermsAndConditions;
