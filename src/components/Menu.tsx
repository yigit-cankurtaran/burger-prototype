import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMemo } from "react";


const Menu = () => {
  const { t } = useTranslation();

  const burgers = useMemo(() => [
    { url: "/foodpics/1.jpg", title: t("Chef's Burger"), description: t("2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce") },
    { url: "/foodpics/2.jpg", title: t("Gourmet Burger"), description: t("Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce") },
    { url: "/foodpics/3.jpg", title: t("Crispy Chicken Burger"), description: t("150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce") },
    { url: "/foodpics/4.jpg", title: t("Cheeseburger"), description: t("Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce") },
    { url: "/foodpics/5.jpg", title: t("Classic Burger"), description: t("Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce") },
    { url: "/foodpics/6.jpg", title: t("Barbecue Burger"), description: t("Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce") },
    { url: "/foodpics/7.jpg", title: t("Anatolia Burger"), description: t("Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce") },
    { url: "/foodpics/8.jpg", title: t("Eggy Burger"), description: t("Chef's meatballs, cheddar cheese, ranch sauce, ham, egg") },
    { url: "/foodpics/9.jpg", title: t("Hellim Burger"), description: t("Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce") },
    { url: "/foodpics/10.jpg", title: t("El Toro Burger"), description: t("Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce") },
    { url: "/foodpics/11.jpg", title: t("Ottoman Burger"), description: t("Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce") },
    { url: "/foodpics/12.jpg", title: t("Grilled Chicken Burger"), description: t("Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce") },
  ], [t]);

  return (
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
              loading="lazy"
              fetchPriority="low"
            />
            <h3 className="text-xl font-light mb-2">{burger.title}</h3>
            <p className="text-gray-600">{burger.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
