import { useTranslation } from "react-i18next";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";

const RestaurantWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Slider />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default RestaurantWebsite;

