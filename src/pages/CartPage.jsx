import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow p-4 rounded-lg gap-4"
              >
                {/* IMAGE + INFO */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* QUANTITY CONTROL */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                {/* TOTAL + REMOVE */}
                <div className="text-right">
                  <p className="font-semibold">
                    ₦{(item.price * item.qty).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Total</h2>

              <span className="text-xl font-bold">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>

              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;