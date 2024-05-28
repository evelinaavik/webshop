import i18n from "i18next";
import { initReactI18next } from "react-i18next";


    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   const resources = {
      en: {
        translation: {
          "maintain-categories": "Maintain categories",
          "maintain-shops": "Maintain shops",
          "maintain-products": "Maintain products",
          "edit-categories": "Edit categories",
          "edit-products": "Edit products",
          "supplier": "Supplier",
          "book-supplier": "Book supplier",
          "cart": "To Cart View",
          "shops": "Our Shops",
          "admin": "To admin view",
          "contact": "Contact us",
        }
      },
      ee: {
        translation: {
          "maintain-categories": "Halda kategooriaid",
          "maintain-shops": "Halda poode",
          "maintain-products": "Halda tooted",
          "edit-categories": "Muuda kategooriad",
          "edit-products": "Muuda tooted",
          "supplier": "Tarnija",
          "book-supplier": "Raamatute tarnija",
          "cart": "Sinu ostukorv",
          "shops": "Meie poed",
          "admin": "Admin vaatesse",
          "contact": "Võta meie ühendust",
        }
      },
      de: {
        translation: {
          "maintain-categories": "Kategorien verwalten",
          "maintain-shops": "Im Laden verwalten",
          "maintain-products": "Produkte verwalten",
          "edit-categories": "Kategorien ändern",
          "edit-products": "Produkte ändern",
          "supplier": "Anbieter",
          "book-supplier": "Buchlieferant",
          "cart": "Dein Einkaufswagen",
          "shops": "Unsere Läden",
          "admin": "Zur Admin-Ansicht",
          "contact":  "Kontaktiere uns",
        }
      },

    ru: {
        translation: {
          "maintain-categories": "Сохранять категории",
          "maintain-shops": "Поддерживать магазины",
          "maintain-products": "Сохранить продукты",
          "edit-categories": "Редактировать категории",
          "edit-products": "Редактировать товары",
          "supplier": "Поставщик",
          "book-supplier": "Поставщик книг",
          "cart": "В просмотр корзины",
          "shops": "Наши магазины",
          "admin": "В режиме администратора",
          "contact":  "Свяжитесь с нами",
        }
      }



    };

    
  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;




  //  kodus lisada 2 keelt 
  // uudised projektile Bootstrap ja tõlge
  // 