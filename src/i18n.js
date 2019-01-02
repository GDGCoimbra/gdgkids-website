import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    whitelist: ["en", "pt"],
    nonExplicitWhitelist: true,
    fallbackLng: "pt",
    load: "languageOnly",
    debug: false,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain"
      ],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  });

export default i18n;
