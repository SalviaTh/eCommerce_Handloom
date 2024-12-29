import React, { useState, useEffect } from "react";
import SellerSidebarLayout from "./SellerSidebar";
import { Box, ScrollArea, Table } from "@mantine/core";

const mockOrders = [
  { id: 1, customerName: "John Doe", status: "Pending", totalAmount: 100 },
  { id: 2, customerName: "Jane Smith", status: "Shipped", totalAmount: 150 },
  { id: 3, customerName: "Alice Brown", status: "Pending", totalAmount: 200 },
  { id: 4, customerName: "John Doe", status: "Pending", totalAmount: 100 },
  { id: 5, customerName: "Jane Smith", status: "Shipped", totalAmount: 150 },
];

const SellerOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(mockOrders);
  }, []);

  const handleOrderStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <SellerSidebarLayout pageTitle="Seller Order">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Seller Order Page
          </h1>
        </div>

        <ScrollArea type="auto">
          <Box>
            {/* Table View for Larger Screens */}
            <Table
              striped
              highlightOnHover
              className="hidden sm:table w-full min-w-[700px] text-left"
            >
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center">Order ID</th>
                  <th className="px-4 py-2 text-center">Customer Name</th>
                  <th className="px-4 py-2 text-center">Status</th>
                  <th className="px-4 py-2 text-center">Total Amount</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-2 text-center">{order.id}</td>
                    <td className="px-4 py-2 text-center">
                      {order.customerName}
                    </td>
                    <td className="px-4 py-2 text-center">{order.status}</td>
                    <td className="px-4 py-2 text-center">
                      ₹{order.totalAmount}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {order.status === "Pending" ? (
                        <button
                          onClick={() =>
                            handleOrderStatusChange(order.id, "Shipped")
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                          Mark as Shipped
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleOrderStatusChange(order.id, "Cancelled")
                          }
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                          Cancel Order
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Card View for Mobile Screens */}
            <div className="sm:hidden block bg-red-100 mr-2 space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-md shadow-sm p-4 bg-white"
                >
                  <div className="flex justify-between">
                    <span className="font-semibold">Order ID:</span>
                    <span>{order.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Customer Name:</span>
                    <span>{order.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Status:</span>
                    <span>{order.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total Amount:</span>
                    <span>₹{order.totalAmount}</span>
                  </div>
                  <div className="mt-4">
                    {order.status === "Pending" ? (
                      <button
                        onClick={() =>
                          handleOrderStatusChange(order.id, "Shipped")
                        }
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full"
                      >
                        Mark as Shipped
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleOrderStatusChange(order.id, "Cancelled")
                        }
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full"
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </ScrollArea>
      </div>
    </SellerSidebarLayout>
  );
};

export default SellerOrder;
