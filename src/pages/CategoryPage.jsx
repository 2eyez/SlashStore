import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "../components/Products";

const CategoryPage = () => {
  const { category } = useParams();

  const products = useSelector(
    (state) => state.product.products
  );

  const filteredProducts = products.filter(
    (item) =>
      item.category.toLowerCase() ===
      category.toLowerCase()
  );

  return (
    <div className="px-6 md:px-16 py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <Products products={filteredProducts} />
      )}
    </div>
  );
};

export default CategoryPage;