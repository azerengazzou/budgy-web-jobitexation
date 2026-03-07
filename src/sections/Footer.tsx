import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540]/95 backdrop-blur-sm text-gray-300 py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">BudgetPro</span>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.product}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  {t.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-blue-400 transition-colors">
                  {t.footer.download}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} BudgetPro. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
