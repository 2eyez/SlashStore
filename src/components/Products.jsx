import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = ({ products = [] }) => {
  const { addToCart } = useCart();

  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-center text-2xl font-semibold mb-10 tracking-wide">
        COLLECTIONS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div key={item.id} className="text-center group">
            {/* IMAGE */}
            <Link to={`/product/${item.id}`}>
              <div className="w-full h-[250px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* TITLE */}
            <h3 className="mt-4 text-sm font-medium line-clamp-2">
              {item.title}
            </h3>

            {/* CATEGORY */}
            <p className="text-gray-500 text-xs mt-1 capitalize">
              {item.category}
            </p>

            {/* PRICE */}
            <p className="text-gray-700 font-semibold mt-2">
              ₦{Math.round(item.price * 1500).toLocaleString()}
            </p>

            {/* CART ICON */}
            <div className="flex justify-center mt-3">
              <i
                onClick={() => addToCart(item)}
                className="ri-shopping-cart-2-line text-xl cursor-pointer hover:text-orange-500 transition"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;