import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [showFull, setShowFull] = useState(false);

  const products = useSelector(
    (state) => state.product.products
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">
          Product not found
        </h2>
      </div>
    );
  }

  const shortText =
    product.description.length > 120
      ? product.description.slice(0, 120) + "..."
      : product.description;

  return (
    <div className="px-6 md:px-16 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="w-full h-[400px] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">

          <p className="text-sm text-gray-400 uppercase mb-2">
            {product.category}
          </p>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-xl font-semibold mb-4">
            ₦{Math.round(
              product.price * 1500
            ).toLocaleString()}
          </p>

          <p className="text-gray-500 mb-2">
            {showFull
              ? product.description
              : shortText}
          </p>

          {product.description.length > 120 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-orange-500 text-sm mb-6 w-fit"
            >
              {showFull
                ? "Show Less"
                : "Read More"}
            </button>
          )}

          <div className="w-fit">
            <i
              onClick={() => addToCart(product)}
              className="ri-shopping-cart-2-line text-3xl cursor-pointer hover:text-orange-500 transition"
            ></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;