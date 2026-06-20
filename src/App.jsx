import Navbar from "./components/Navbar";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import Announcement from "./components/Announcement";
import Banner from "./components/Banner";
import { bannerData } from "./data/bannerData";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

function App() {
  const Layout = () => {
    return (
      <>
        <ScrollToTop />
        <Announcement
          words={[
            "Free Shipping on Orders Above ₦550,000!",
            "Unleash Your Signature Fragrance...",
            "New Arrivals Just Dropped!!",
            "Your New Obsession Awaits",
          ]}
          bgColor="orange"
        />

        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",   
          element: <CartPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
         
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/category/:category",
          element: <CategoryPage />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
       },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/success",
          element: <Success />,
        }
      ],
    },
  ]);

  return (
    <CartProvider>  
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;