// pages/orders.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

const OrdersPage = ({ initialOrders }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
          {initialOrders.map((order, index) => (
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
  const res = await fetch("https://www.priyofruits.com/api/get-orders");
  const data = await res.json();

  return {
    props: {
      initialOrders: data.orders || null,
    },
  };
}

export default OrdersPage;
