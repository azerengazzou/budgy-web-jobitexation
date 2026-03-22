import { AlertCircle, TrendingDown, Settings, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  const icons = [AlertCircle, TrendingDown, Settings, Globe];

  const floatingIcons = [
    { Icon: AlertCircle, position: 'top-[15%] left-[10%]', size: 'w-24 h-24' },
    { Icon: TrendingDown, position: 'top-[60%] right-[15%]', size: 'w-32 h-32' },
    { Icon: Settings, position: 'bottom-[20%] left-[20%]', size: 'w-28 h-28' },
    { Icon: Globe, position: 'top-[40%] right-[8%]', size: 'w-20 h-20' },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2854] mb-4">
            {t.problem.title}
          </h2>
          <p className="text-xl text-[#1C4D8D] max-w-3xl mx-auto">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.problem.problems.map((problem, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-slate-200"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2854] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#1C4D8D] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
