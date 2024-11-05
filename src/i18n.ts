
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      "Signature Burgers": "İmza Burgerler",
      "Fresh Ingredients": "Taze Malzemeler",
      "Cozy Atmosphere": "Rahat Atmosfer",
      "MENU": "MENÜ",
      "ABOUT": "HAKKINDA",
      "CONTACT": "İLETİŞİM",
      "Experience culinary excellence": "Müthiş burgerlerimizi deneyimleyin",
      "Our Menu": "Menümüz",
      "Signature Dish": "İmza Yemek",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "About Us": "Hakkımızda",
      "We are a burger restaurant dedicated to providing the best experience in the city.": "Şehirdeki en iyi deneyimi sunmaya adanmış bir burger restoranıyız.",
      "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Şeflerimiz, sizi tekrar tekrar geri getirecek ağız sulandıran yemekler yaratmak için sadece en taze malzemeleri kullanır.",
      "Contact Us": "Bize Ulaşın",
      "Have any questions or feedback? We'd love to hear from you!": "Herhangi bir sorunuz veya geri bildiriminiz mi var? Sizden haber almak isteriz!",
      "&copy; 2024 BISTRO. All rights reserved.": "&copy; 2024 BISTRO. Tüm hakları saklıdır."
    }
  },
  fr: {
    translation: {
      "Signature Burgers": "Burgers Signature",
      "Fresh Ingredients": "Ingrédients Frais",
      "Cozy Atmosphere": "Atmosphère Conviviale",
      "MENU": "MENU",
      "ABOUT": "À PROPOS",
      "CONTACT": "CONTACT",
      "Experience culinary excellence": "Découvrez l'excellence culinaire",
      "Our Menu": "Notre Menu",
      "Signature Dish": "Plat Signature",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "About Us": "À Propos de Nous",
      "We are a burger restaurant dedicated to providing the best experience in the city.": "Nous sommes un restaurant de burgers dédié à offrir la meilleure expérience en ville.",
      "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Nos chefs n'utilisent que les ingrédients les plus frais pour créer des plats délicieux qui vous feront revenir encore et encore.",
      "Contact Us": "Contactez-Nous",
      "Have any questions or feedback? We'd love to hear from you!": "Vous avez des questions ou des commentaires ? Nous serions ravis de vous entendre !",
      "&copy; 2024 BISTRO. All rights reserved.": "&copy; 2024 BISTRO. Tous droits réservés."
    }
  },
  ru: {
    translation: {
      "Signature Burgers": "Фирменные Бургеры",
      "Fresh Ingredients": "Свежие Ингредиенты",
      "Cozy Atmosphere": "Уютная Атмосфера",
      "MENU": "МЕНЮ",
      "ABOUT": "О НАС",
      "CONTACT": "КОНТАКТЫ",
      "Experience culinary excellence": "Испытайте кулинарное совершенство",
      "Our Menu": "Наше Меню",
      "Signature Dish": "Фирменное Блюдо",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "About Us": "О Нас",
      "We are a burger restaurant dedicated to providing the best experience in the city.": "Мы - ресторан бургеров, стремящийся предоставить лучший опыт в городе.",
      "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Наши повара используют только самые свежие ингредиенты для создания аппетитных блюд, которые заставят вас возвращаться снова и снова.",
      "Contact Us": "Свяжитесь с Нами",
      "Have any questions or feedback? We'd love to hear from you!": "Есть вопросы или отзывы? Мы будем рады услышать вас!",
      "&copy; 2024 BISTRO. All rights reserved.": "&copy; 2024 BISTRO. Все права защищены."
    }
  },
  ar: {
    translation: {
      "Signature Burgers": "برجر مميز",
      "Fresh Ingredients": "مكونات طازجة",
      "Cozy Atmosphere": "جو مريح",
      "MENU": "قائمة الطعام",
      "ABOUT": "حول",
      "CONTACT": "اتصل",
      "Experience culinary excellence": "تجربة التميز في الطهي",
      "Our Menu": "قائمتنا",
      "Signature Dish": "طبق مميز",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسشينغ إيليت.",
      "About Us": "معلومات عنا",
      "We are a burger restaurant dedicated to providing the best experience in the city.": "نحن مطعم برجر مكرس لتقديم أفضل تجربة في المدينة.",
      "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "يستخدم طهاتنا فقط المكونات الطازجة لخلق أطباق لذيذة ستجعلك تعود للمزيد.",
      "Contact Us": "اتصل بنا",
      "Have any questions or feedback? We'd love to hear from you!": "هل لديك أي أسئلة أو ملاحظات؟ نود أن نسمع منك!",
      "&copy; 2024 BISTRO. All rights reserved.": "&copy; 2024 BISTRO. جميع الحقوق محفوظة."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
