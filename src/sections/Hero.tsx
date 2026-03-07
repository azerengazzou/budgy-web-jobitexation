import { Download, ArrowRight, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PhoneMockup from '../components/PhoneMockup';
import SectionBackground from '../components/SectionBackground';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: Shield, position: 'top-[20%] left-[10%]', size: 'w-24 h-24' },
    { Icon: Download, position: 'bottom-[25%] right-[8%]', size: 'w-28 h-28' },
  ];

  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
      <SectionBackground icons={floatingIcons} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-blue-700 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-lg">
              <Shield className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              {t.hero.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <button
                onClick={scrollToDownload}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToFeatures}
                className="bg-white/90 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white transition-all shadow-md hover:shadow-lg border border-white/50"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white/50" />
                ))}
              </div>
              <span>{t.hero.trustBadge}</span>
            </div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative animate-fade-in-up animation-delay-400 flex justify-center items-center mt-8 lg:mt-0">
            <div className="transform -rotate-12 hover:scale-90 transition-transform duration-300 scale-75 opacity-80">
              <PhoneMockup />
            </div>
            <div className="transform rotate-0 hover:scale-105 transition-transform duration-300 -ml-6 sm:-ml-8 md:-ml-12 lg:-ml-16 z-10">
              <PhoneMockup />
            </div>
            <div className="transform rotate-12 hover:scale-90 transition-transform duration-300 -ml-6 sm:-ml-8 md:-ml-12 lg:-ml-16 scale-75 opacity-80">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
