import { TrendingUp, Target, PiggyBank, Coins, Wifi, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();

  const icons = [TrendingUp, Target, PiggyBank, Coins, Wifi, Lock];

  return (
    <section id="features" className="relative py-20 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2854] mb-4">
            {t.solution.title}
          </h2>
          <p className="text-xl text-[#1C4D8D] max-w-3xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        {/* ✅ 4 per row responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solution.features.map((feature, index) => {
            // ✅ safe icon cycling
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-[#0F2854] mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#1C4D8D] leading-relaxed">
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