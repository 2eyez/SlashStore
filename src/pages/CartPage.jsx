import { useCart } from "../context/CartContext";

const Cart = () => {
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
                className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
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
          <div className="mt-8 flex justify-between items-center">

            <h2 className="text-xl font-bold">
              Total: ₦{total.toLocaleString()}
            </h2>

            <button
              onClick={clearCart}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;