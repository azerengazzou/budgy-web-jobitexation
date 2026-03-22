import { Shield, Lock, RefreshCw, Headphones, Download, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Trust() {
  const { t } = useLanguage();

  const icons = [Shield, Lock, RefreshCw, Headphones];

  const floatingIcons = [
    { Icon: Shield, position: 'top-[10%] right-[8%]', size: 'w-28 h-28' },
    { Icon: Lock, position: 'bottom-[15%] left-[10%]', size: 'w-24 h-24' },
    { Icon: Download, position: 'top-[45%] left-[5%]', size: 'w-20 h-20' },
  ];

  return (
    <section id="download" className="relative py-20 px-4 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2854] mb-4">
            {t.trust.title}
          </h2>
          <p className="text-xl text-[#1C4D8D] max-w-3xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.trust.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2854] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#1C4D8D]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Download className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F2854] mb-4">
              {t.trust.whyApk.title}
            </h3>
            <p className="text-[#1C4D8D] leading-relaxed">
              {t.trust.whyApk.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-lg text-white border border-blue-400/50">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {t.trust.howTo.title}
            </h3>
            <ol className="space-y-3">
              {t.trust.howTo.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-blue-50 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
              <Download className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Take Control?
            </h3>
            <p className="text-xl text-green-50 mb-8">
              Join thousands of users who are already managing their money better
            </p>
            <button className="bg-white text-green-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-3">
              <Download className="w-6 h-6" />
              Download Free APK Now
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                10 MB
              </span>
            </button>
            <p className="text-sm text-green-100 mt-4">
              Version 1.2.0 • Updated Feb 2024 • Android 6.0+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
