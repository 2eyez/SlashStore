import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import { categoriesData } from "../data/categoriesData";

import Products from "../components/Products";

import Banner from "../components/Banner";
import { bannerData } from "../data/bannerData";

import { useCart } from "../context/CartContext";

import { getProducts } from "../redux/apiCalls";

const Home = () => {
  const dispatch = useDispatch();

  const { search } = useCart();

  const { products, isFetching, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <h2 className="text-2xl font-semibold">
          Loading Products...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <h2 className="text-2xl font-semibold text-red-500">
          Failed To Load Products
        </h2>
      </div>
    );
  }

  return (
    <div>
      <Banner slides={bannerData} />

      <Categories categories={categoriesData} />

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No products found for "{search}"
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for another product
          </p>
        </div>
      ) : (
        <Products products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;