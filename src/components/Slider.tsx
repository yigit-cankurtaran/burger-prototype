import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => [
    { url: "/foodpics/1.jpg", title: t("Signature Burgers") },
    { url: "/foodpics/2.jpg", title: t("Fresh Ingredients") },
    { url: "/foodpics/3.jpg", title: t("Cozy Atmosphere") },
  ], [t]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {(index === currentSlide || index === (currentSlide + 1) % slides.length) && (
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
              />
            )}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-6xl font-light mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl font-light">{t("Experience culinary excellence")}</p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
