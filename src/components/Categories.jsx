import { Link } from "react-router-dom";

const Categories = ({ categories = [] }) => {
  return (
    <section 
    id="categories"
    className="px-6 md:px-16 py-12 bg-gray-50"
    >

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-500 mt-1">
          Your all in one store...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((cat, index) => (
          <Link
            to={`/category/${cat.name.toLowerCase()}`}  // ✅ FIXED ROUTE
            key={index}
          >
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">

              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[250px] object-cover 
                transition duration-500 ease-in-out 
                group-hover:scale-110 group-hover:rotate-1"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <h3 className="text-2xl font-bold tracking-wide">
                  {cat.name}
                </h3>

                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500 bg-orange-500 px-5 py-2 rounded-lg flex items-center gap-2">
                  Explore
                  <i className="ri-arrow-right-long-fill"></i>
                </div>

              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Categories;