import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // CONTEXT
  const { cart, search, setSearch } = useCart();

  // TOTAL CART ITEMS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">

      {/* MAIN BAR */}
      <div className="flex items-center justify-between h-[80px] px-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/sslogo.jpeg"
            alt="logo"
            className="h-[60px] w-[60px] object-contain"
          />
          <h1 className="text-lg font-bold whitespace-nowrap">
            SPLASH STORE
          </h1>
        </Link>

        {/* SEARCH (DESKTOP) */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 w-[300px] rounded-l-lg outline-none"
          />

          {/* CLEAR BUTTON */}
          {search && (
            <i
              onClick={() => setSearch("")}
              className="ri-close-line text-[20px] bg-gray-200 p-2 cursor-pointer"
            ></i>
          )}

          <i className="ri-search-line text-[20px] bg-orange-500 text-white p-2 rounded-r-lg cursor-pointer"></i>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <Link to="/cart">
            <div className="relative cursor-pointer">
              <i className="ri-shopping-bag-4-line text-2xl"></i>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          {/* LOGIN */}
          <Link to="/login" className="hidden md:block">
            <div className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded-lg hover:bg-gray-100">
              <i className="ri-user-3-fill text-orange-500"></i>
              <span className="text-orange-500 font-semibold">
                Login
              </span>
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t">

          {/* SEARCH (MOBILE) */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border border-gray-300 w-full rounded-l-lg outline-none"
            />

            {search && (
              <i
                onClick={() => setSearch("")}
                className="ri-close-line text-[20px] bg-gray-200 p-2 cursor-pointer"
              ></i>
            )}

            <i className="ri-search-line text-[20px] bg-orange-500 text-white p-2 rounded-r-lg cursor-pointer"></i>
          </div>

          {/* LOGIN */}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;