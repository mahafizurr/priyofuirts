import { useState, useEffect } from "react";

const OrdersPage = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [loading, setLoading] = useState(!initialOrders);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/get-orders");
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await res.json();
        setOrders(data.orders);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!initialOrders) {
      fetchOrders();
    }
  }, [initialOrders]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4">Full Name</th>
                <th className="py-2 px-4">Mobile Number</th>
                <th className="py-2 px-4">District</th>
                <th className="py-2 px-4">Full Address</th>
                <th className="py-2 px-4">Transaction Number</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{order.fullName}</td>
                  <td className="py-2 px-4">{order.mobileNumber}</td>
                  <td className="py-2 px-4">{order.district}</td>
                  <td className="py-2 px-4">{order.fullAddress}</td>
                  <td className="py-2 px-4">{order.transactionNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch("https://www.priyofruits.com/api/get-orders");
    const data = await res.json();
    return {
      props: {
        initialOrders: data.orders || null,
      },
    };
  } catch (error) {
    console.error("Failed to fetch orders on the server:", error);
    return {
      props: {
        initialOrders: null,
      },
    };
  }
}

export default OrdersPage;
