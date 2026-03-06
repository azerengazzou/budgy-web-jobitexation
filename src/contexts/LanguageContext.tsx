import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const value: LanguageContextType = {
    language: language || 'en',
    setLanguage,
    t: translations[language || 'en'],
    dir,
  };

  if (!language) {
    return <LanguageSelector onSelect={setLanguage} />;
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

function LanguageSelector({ onSelect }: { onSelect: (lang: Language) => void }) {
  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'fr' as Language, name: 'French', flag: '🇫🇷', nativeName: 'Français' },
    { code: 'ar' as Language, name: 'Arabic', flag: '🇹🇳', nativeName: 'العربية' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Choose Your Language
          </h1>
          <p className="text-lg text-gray-600">
            Select your preferred language to continue
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{lang.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {lang.nativeName}
                </h3>
                <p className="text-sm text-gray-500">{lang.name}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity" />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            You can change the language anytime from the navigation menu
          </p>
        </div>
      </div>
    </div>
  );
}
