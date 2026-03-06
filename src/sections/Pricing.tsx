import { Check, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.pricing.free.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900">{t.pricing.free.price}</span>
                <span className="text-gray-600">{t.pricing.currency}</span>
              </div>
              <p className="text-gray-600 mt-2">{t.pricing.free.period}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToDownload}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.pricing.cta}
            </button>
          </div>

          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl border-2 border-blue-500 transform hover:scale-105 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Sparkles className="w-4 h-4" />
              {t.pricing.popular}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.pricing.premium.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">{t.pricing.premium.price}</span>
                <span className="text-blue-100">{t.pricing.currency}</span>
              </div>
              <p className="text-blue-100 mt-2">{t.pricing.premium.period}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.premium.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToDownload}
              className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t.pricing.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
