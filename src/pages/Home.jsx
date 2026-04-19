import Categories from "../components/Categories";
import { categoriesData } from "../data/categoriesData";
import Products from "../components/Products";
import { productsData } from "../data/productsData";
import Banner from "../components/Banner";
import { bannerData } from "../data/bannerData";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { search } = useCart();

  // FILTER PRODUCTS
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Banner slides={bannerData} />
      <Categories categories={categoriesData} />

      {/* NO RESULTS UI */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No products found for "{search}"
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching for: Men, Women, Polo, Boss
          </p>
        </div>
      ) : (
        <Products products={filteredProducts} />
      )}

    </div>
  );
};

export default Home;