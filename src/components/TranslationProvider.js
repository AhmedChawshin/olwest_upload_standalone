import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import pt from '../locales/pt.json';

const isClient = typeof window !== 'undefined';
const lng = isClient ? localStorage.getItem('language') || 'en' : 'en';

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      lng,
      fallbackLng: 'en',
      resources: {
        en: { translation: en },
        es: { translation: es },
        fr: { translation: fr },
        pt: { translation: pt },
      },
    })
    .catch((error) => {
      console.error('i18next initialization failed:', error);
    });
}

function TranslationProvider({ children }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default TranslationProvider;
