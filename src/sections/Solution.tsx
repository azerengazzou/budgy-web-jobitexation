import { TrendingUp, Target, PiggyBank, Coins, Wifi, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();

  const icons = [TrendingUp, Target, PiggyBank, Coins, Wifi, Lock];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.solution.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.solution.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
