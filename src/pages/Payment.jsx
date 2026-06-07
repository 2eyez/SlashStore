import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    // This is where real payment integration (Paystack/Stripe) will go later
    console.log("Payment confirmed:", {
      cart,
      total,
      paymentMethod,
    });

    // Redirect to success page
    navigate("/success");
  };

  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Payment
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* PAYMENT OPTIONS */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-5">
            Choose Payment Method
          </h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Card Payment
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Bank Transfer
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Cash on Delivery
            </label>
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
                className="flex items-center gap-3 border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.qty}
                  </p>
                </div>

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
              onClick={handlePayment}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;