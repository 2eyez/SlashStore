import { useState, useEffect } from "react";

const Banner = ({
  slides = [],
  autoPlay = true,
  interval = 4000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [slides, autoPlay, interval]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  if (!slides.length) return null;

  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">

      {/* IMAGE */}
      <img
        src={slides[current].image}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 flex items-center">

        <div className="px-6 md:px-16 lg:px-24 max-w-2xl text-white animate-fadeIn">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {slides[current].title}
          </h1>

          <p className="mt-4 text-lg">
            {slides[current].desc}
          </p>

         <button
  onClick={() => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
>
  Explore
</button>

        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2  flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="ri-arrow-left-long-fill text-xl text-white"></i>
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2  flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="ri-arrow-right-long-fill text-xl text-white"></i>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Banner;