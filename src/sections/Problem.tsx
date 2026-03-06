import { AlertCircle, TrendingDown, Settings, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  const icons = [AlertCircle, TrendingDown, Settings, Globe];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.problem.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.problem.problems.map((problem, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
