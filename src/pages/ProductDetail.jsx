import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../data/productsData";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // toggle state
  const [showFull, setShowFull] = useState(false);

  // find product
  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  // shorten description
  const shortText =
    product.description.length > 80
      ? product.description.slice(0, 80) + "..."
      : product.description;

  return (
    <div className="px-6 md:px-16 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="w-full h-[400px] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">

          {/* CATEGORY */}
          <p className="text-sm text-gray-400 uppercase mb-2">
            {product.category}
          </p>

          {/* NAME */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.name}
          </h1>

          {/* PRICE */}
          <p className="text-xl font-semibold mb-4">
            ₦{product.price.toLocaleString()}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mb-2">
            {showFull ? product.description : shortText}
          </p>

          {/* TOGGLE BUTTON */}
          {product.description.length > 80 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-orange-500 text-sm mb-6 w-fit"
            >
              {showFull ? "Show Less" : "Read More"}
            </button>
          )}

          {/* ADD TO CART */}
          
<div className="w-fit">
  <i
    onClick={() => addToCart(product)}
    className="ri-shopping-cart-2-line text-3xl cursor-pointer text-black hover:text-orange-500 transition"
  ></i>
</div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;