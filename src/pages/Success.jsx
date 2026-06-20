import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // optional: get payment method if passed via state
  const paymentMethod = location.state?.paymentMethod;

  useEffect(() => {
    // optional redirect if user tries to access directly
    if (!paymentMethod) {
      console.log("No payment method found, still showing success page");
    }
  }, [paymentMethod]);

  const getMessage = () => {
  if (paymentMethod === "pod") {
    return {
      title: "Order Confirmed 🚚",
      text: "Your order has been placed successfully. You will pay when your order is delivered.",
      color: "text-green-600",
    };
  }

  if (paymentMethod === "transfer") {
    return {
      title: "Order Placed",
      text: "Your bank transfer order has been received. Please complete payment to process your order.",
      color: "text-blue-600",
    };
  }

  return {
    title: "Order placed Successfully",
    text: "Your order was successfully placed.",
    color: "text-green-600",
  };
};

  const message = getMessage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
        
        <div className="text-5xl mb-4">✅</div>

        <h1 className={`text-2xl font-bold mb-3 ${message.color}`}>
          {message.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {message.text}
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;