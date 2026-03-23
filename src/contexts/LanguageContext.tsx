import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  const setLanguage = (lang: Language) => {
    setIsLoading(true);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Preload images
    const imagesToPreload = [
      '/icon-2.png',
      '/phone-budgy.png'
    ];
    
    const preloadPromises = imagesToPreload.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Continue even if image fails
        img.src = src;
      });
    });
    
    Promise.all(preloadPromises).then(() => {
      setTimeout(() => {
        setLanguageState(lang);
        setIsLoading(false);
      }, 800);
    });
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const value: LanguageContextType = {
    language: language || 'en',
    setLanguage,
    t: translations[language || 'en'],
    dir,
  };

  if (!language) {
    return <LanguageSelector onSelect={setLanguage} isLoading={isLoading} />;
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

function LanguageSelector({ onSelect, isLoading }: { onSelect: (lang: Language) => void; isLoading: boolean }) {
  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'fr' as Language, name: 'French', flag: '🇫🇷', nativeName: 'Français' },
    { code: 'ar' as Language, name: 'Arabic', flag: '🇹🇳', nativeName: 'العربية' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6 animate-pulse">
            <img src="/icon-2.png" alt="Budgy Logo" className="w-16 h-16 object-contain" />
          </div>
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h2>
          <p className="text-gray-600">Preparing your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <img src="/icon-2.png" alt="Budgy Logo" className="w-12 h-12 object-contain" />
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
