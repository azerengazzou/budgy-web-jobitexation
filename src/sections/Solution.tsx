import { TrendingUp, Target, PiggyBank, Coins, Wifi, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionBackground from '../components/SectionBackground';

export default function Solution() {
  const { t } = useLanguage();

  const icons = [TrendingUp, Target, PiggyBank, Coins, Wifi, Lock];

  const floatingIcons = [
    { Icon: TrendingUp, position: 'top-[10%] right-[10%]', size: 'w-28 h-28' },
    { Icon: PiggyBank, position: 'bottom-[15%] left-[8%]', size: 'w-24 h-24' },
    { Icon: Lock, position: 'top-[50%] right-[5%]', size: 'w-20 h-20' },
  ];

  return (
    <section id="features" className="relative py-20 px-4 overflow-hidden">
      <SectionBackground icons={floatingIcons} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2854] mb-4">
            {t.solution.title}
          </h2>
          <p className="text-xl text-[#1C4D8D] max-w-3xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.solution.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2854] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#1C4D8D] leading-relaxed">
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
