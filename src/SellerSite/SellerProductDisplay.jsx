import { Box, ScrollArea } from "@mantine/core";
import React, { useEffect, useState } from "react";

const SellerProductDisplay = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await fetch(`${BASE_URL}/customers`);
    const data = await response.json();
    setCustomers(data.customers);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };
  return (
    <>
      <div className="flex flex-col flex-grow p-3">
        <div className="w-full rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-4 border-b">
            Product List
          </h2>
          <ScrollArea type="never">
            <Box>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        ID
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Image
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Product Name
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Category
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Quantity
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Rating (Total Reviews)
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Price
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Discount (%)
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Discounted Price
                      </th>
                      <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.length > 0 ? (
                      customers.map((customer) => (
                        <tr
                          key={customer.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">{customer.name}</td>
                          <td className="py-3 px-4">{customer.email}</td>
                          <td className="py-3 px-4">{customer.phone}</td>
                          <td className="py-3 px-4 flex gap-2 justify-center">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(customer.id)}
                              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="10"
                          className="text-center py-4 text-gray-600"
                        >
                          No products list
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Box>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default SellerProductDisplay;
