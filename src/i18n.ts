import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      "Signature Burgers": "İkonik Burgerler",
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
      "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. Tüm hakları saklıdır.",
      "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "2 adet Chef's Buffalo köftesi, 2 adet cheddar peyniri, karamelize mantar, karamelize soğan, patates kızartması, özel Chef's sos",
      "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "Kömür ateşinde suyu hapsedilerek pişmiş Buffalo köftesi, halka soğan, domates dilimleri, 40 gr. löp antrikot, barbekü sos",
      "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 gr. çıtır tavuk but, kıvırcık marul, halka soğan, dilim domatesler, çıtır salatalık turşusu, ranch sos",
      "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "Ev yapımı köfte, kıvırcık, halka soğan, küp domates dilimleri, cheddar peyniri, sos, dilimlenmiş salatalık turşusu, ranch sos",
      "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Chefs köfte, kıvırcık marul, halka soğan, domates dilimleri, salatalık turşusu, ranch sos",
      "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "Kasap köfte, kasap sucuk, soğan halkaları, iki dilim domates, tatlı kapya biber, barbekü sos",
      "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "Ev köftesi, kolot peyniri, halka soğan, domates dilimleri, kıvırcık marul, ranch sos",
      "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "Chefs köfte, cheddar peyniri, ranch sos, jambon, yumurta",
      "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "Kömürde demlenerek pişmiş köfte, marul parçaları, soğan halkaları, domates dilimleri, kornişon turşu parçaları, közde kızarmış hellim peyniri, mix sos",
      "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "Meksika baharatlarıyla harmanlanmış Chef's köftesi, parçalanmış soğan halkaları, kıvırcık marul, dilim domates, kapya biber jalapeno biber, hot sos",
      "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "Kasap baton sucuk, kıvırcık marul, domates dilimleri, küp kornişon turşu, halka soğan, kibrit patates cips, ranch sos",
      "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Mangal tadında 150 gr. ızgara tavuk but, kıvırcık marul, halka soğan, domates dilimleri, kornişon turşu, ranch sos",
    }
  },
  en: {
    translation: {
      "Signature Burgers": "Signature Burgers",
      "Fresh Ingredients": "Fresh Ingredients",
      "Cozy Atmosphere": "Cozy Atmosphere",
      "MENU": "MENU",
      "ABOUT": "ABOUT",
      "CONTACT": "CONTACT",
      "Experience culinary excellence": "Experience culinary excellence",
      "Our Menu": "Our Menu",
      "Signature Dish": "Signature Dish",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "About Us": "About Us",
      "We are a burger restaurant dedicated to providing the best experience in the city.": "We are a burger restaurant dedicated to providing the best experience in the city.",
      "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.": "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.",
      "Contact Us": "Contact Us",
      "Have any questions or feedback? We'd love to hear from you!": "Have any questions or feedback? We'd love to hear from you!",
      "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. All rights reserved.",
      "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce": "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce",
      "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce": "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce",
      "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce": "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce",
      "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce": "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce",
      "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce",
      "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce": "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce",
      "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce": "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce",
      "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg": "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg",
      "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce": "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce",
      "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce": "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce",
      "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce": "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce",
      "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce": "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce",
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
      "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. Tous droits réservés."
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
      "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. Все права защищены."
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
      "2024 Yiğit Cankurtaran. All rights reserved.": "2024 Yiğit Cankurtaran. جميع الحقوق محفوظة."
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
