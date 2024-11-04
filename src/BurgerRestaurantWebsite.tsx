import React, { useState } from "react";
import { motion } from "framer-motion";

const RestaurantWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: "../public/foodpics/chefsburger.jpg", title: "Signature Burgers" },
    { url: "../public/foodpics/gurme.jpg", title: "Fresh Ingredients" },
    { url: "../public/foodpics/tavuk.jpg", title: "Cozy Atmosphere" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light">BISTRO</h1>
            <div className="space-x-8 text-sm">
              <a href="#menu" className="hover:text-gray-600 transition">
                MENU
              </a>
              <a href="#about" className="hover:text-gray-600 transition">
                ABOUT
              </a>
              <a href="#contact" className="hover:text-gray-600 transition">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 
                ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
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
            <p className="text-xl font-light">Experience culinary excellence</p>
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

      <section id="menu" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <img
                src={"../public/foodpics/chefsburger.jpg"}
                alt={`Dish ${item}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-light mb-2">Signature Dish {item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">&copy; 2024 BISTRO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantWebsite;
