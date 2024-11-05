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
