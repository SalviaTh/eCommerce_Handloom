import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const BecomeSeller = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "individual",
    businessRegNumber: "",
    storeName: "",
    businessAddress: "",
    website: "",
    bankAccountName: "",
    bankAccountNumber: "",
    bankName: "",
    branchName: "",
    paymentMethod: "bank-transfer",
    description: "",
    termsAccepted: false,
    privacyPolicyAccepted: false,
    idProof: null,
    businessRegProof: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add API submission logic here
  };

  const handleRedirectToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/sellerdashboard");
    }, 3000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="mt-16 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="sm:text-2xl text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
              Become a Seller
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side - Personal Details */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-1 sm:text-sm text-[14px] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Enter your business name"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    >
                      <option value="individual">Individual</option>
                      <option value="small-business">Small Business</option>
                      <option value="company">Company</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="businessRegNumber"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Business Registration Number
                    </label>
                    <input
                      type="text"
                      id="businessRegNumber"
                      name="businessRegNumber"
                      value={formData.businessRegNumber}
                      onChange={handleChange}
                      placeholder="Enter your business registration number"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessAddress"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Business Address
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      placeholder="Enter your business address"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="storeName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Store Name
                    </label>
                    <input
                      type="text"
                      id="storeName"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      placeholder="Enter your store name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Store Description
                    </label>
                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Provide a brief description of your store"
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    ></textarea>
                  </div>
                </div>

                {/* Right Side  */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="website"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Enter your website URL"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bankAccountName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Bank Account Name
                    </label>
                    <input
                      type="text"
                      id="bankAccountName"
                      name="bankAccountName"
                      value={formData.bankAccountName}
                      onChange={handleChange}
                      placeholder="Enter your bank account name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bankAccountNumber"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Bank Account Number
                    </label>
                    <input
                      type="text"
                      id="bankAccountNumber"
                      name="bankAccountNumber"
                      value={formData.bankAccountNumber}
                      onChange={handleChange}
                      placeholder="Enter your bank account number"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bankName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="Enter your bank name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="branchName"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Branch Name
                    </label>
                    <input
                      type="text"
                      id="branchName"
                      name="branchName"
                      value={formData.branchName}
                      onChange={handleChange}
                      placeholder="Enter your branch name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="paymentMethod"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    >
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="paypal">UPI</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="termsAccepted"
                      className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      I accept the terms and conditions
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacyPolicyAccepted"
                      name="privacyPolicyAccepted"
                      checked={formData.privacyPolicyAccepted}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="privacyPolicyAccepted"
                      className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      I accept the privacy policy
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="idProof"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      ID Proof (File)
                    </label>
                    <input
                      type="file"
                      id="idProof"
                      name="idProof"
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessRegProof"
                      className="block sm:text-sm text-[14px] font-medium text-gray-700 dark:text-gray-300"
                    >
                      Business Registration Proof (File)
                    </label>
                    <input
                      type="file"
                      id="businessRegProof"
                      name="businessRegProof"
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[14px] dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center col-span-2 mt-6">
                <button
                  type="submit"
                  onClick={handleRedirectToLogin}
                  className="w-full bg-green-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 sm:text-sm transition duration-300"
                >
                  {loading ? <span>Loading...</span> : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeSeller;
