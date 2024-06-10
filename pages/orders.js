// pages/orders.js
import { useState, useEffect } from "react";

const OrdersPage = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/get-orders");
      const data = await res.json();
      setOrders(data.orders);
    };

    if (!initialOrders) {
      fetchOrders();
    }
  }, [initialOrders]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Full Name</th>
            <th className="py-2">Mobile Number</th>
            <th className="py-2">District</th>
            <th className="py-2">Full Address</th>
            <th className="py-2">Transaction Number</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{order.fullName}</td>
              <td className="py-2">{order.mobileNumber}</td>
              <td className="py-2">{order.district}</td>
              <td className="py-2">{order.fullAddress}</td>
              <td className="py-2">{order.transactionNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get-orders");
  const data = await res.json();

  return {
    props: {
      initialOrders: data.orders || null,
    },
  };
}

export default OrdersPage;
