import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RestaurantWebsite = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: "../foodpics/chefsburger.jpg", title: t("Signature Burgers") },
    { url: "../foodpics/gurme.jpg", title: t("Fresh Ingredients") },
    { url: "../foodpics/tavuk.jpg", title: t("Cozy Atmosphere") },
  ];

  // TODO: update the descriptions with the actual
  // ingredients once yemeksepeti reopens
  // then translate them
  const burgers = [
    { url: "../foodpics/chefsburger.jpg", title: t("Chef's Burger"), description: t("testing chef") },
    { url: "../foodpics/gurme.jpg", title: t("Gourmet Burger"), description: t("testing gourmet") },
    { url: "../foodpics/tavuk.jpg", title: t("Crispy Chicken Burger"), description: t("testing chicken") },
    { url: "../foodpics/cheeseburger.jpg", title: t("Cheeseburger"), description: t("testing cheese") },
    { url: "../foodpics/classicburger.jpg", title: t("Classic Burger"), description: t("testing classic") },
    { url: "../foodpics/barbecue.jpg", title: t("Barbecue Burger"), description: t("testing barbecue") },
    { url: "../foodpics/anadolu.jpg", title: t("Anatolia Burger"), description: t("testing anatolia") },
    { url: "../foodpics/eggy.jpg", title: t("Eggy Burger"), description: t("testing eggy") },
    { url: "../foodpics/hellim.jpg", title: t("Hellim Burger"), description: t("testing hellim") },
    { url: "../foodpics/eltoro.jpg", title: t("El Toro Burger"), description: t("testing toro") },
    { url: "../foodpics/ottoman.jpg", title: t("Ottoman Burger"), description: t("testing ottoman") },
    { url: "../foodpics/grilled.jpg", title: t("Grilled Chicken Burger"), description: t("testing grilled") },


    // TODO: more burgers to be added
    // finish their entire menu by hand...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // changing slides every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);
  // changes when slides.length changes

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light">Chef's Buffalo Burger</h1>
            <div className="space-x-8 text-sm">
              <a href="#menu" className="hover:text-gray-600 transition">
                {t("MENU")}
              </a>
              <a href="#about" className="hover:text-gray-600 transition">
                {t("ABOUT")}
              </a>
              <a href="#contact" className="hover:text-gray-600 transition">
                {t("CONTACT")}
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


      <section id="menu" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">{t("Our Menu")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {burgers.map((burger, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <img
                src={burger.url}
                alt={burger.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-light mb-2">{burger.title}</h3>
              <p className="text-gray-600">
                {burger.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="about" className="container mx-auto px-6 py-24 bg-gray-100">
        <h2 className="text-4xl font-light mb-16 text-center">{t("About Us")}</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-light mb-4">
            {t("We are a burger restaurant dedicated to providing the best experience in the city.")}
          </p>
          <p className="text-lg font-light">
            {t("Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.")}
          </p>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">{t("Contact Us")}</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-light mb-4">
            {t("Have any questions or feedback? We'd love to hear from you!")}
          </p>
          {/* phone number and email address */}
          <p className="text-lg font-light">phone number</p>
          <a className="text-green-600" href="mailto:random@mail.com">e-mail</a>
          <p className="text-pretty text-lg font-extralight">address</p>
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">&copy; {t("2024 Yiğit Cankurtaran. All rights reserved.")}</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantWebsite;
