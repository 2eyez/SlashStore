import { useCart } from "../context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    console.log({
      customer,
      cart,
      total,
    });
  };

  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* CUSTOMER DETAILS */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-5">
            Shipping Details
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={customer.address}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded"
            />
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-5">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center justify-between border-b pb-3"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image} // change if needed: item.img or item.images?.[0]
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />

                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <p className="font-semibold">
                  ₦
                  {(item.price * item.qty).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;