import { Download, ArrowRight, Shield, TrendingUp, DollarSign, PiggyBank, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PhoneShowcase from '../components/PhoneShowcase';
import SectionBackground from '../components/SectionBackground';
import { heroStyles } from '../styles/heroStyles';

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
    { Icon: TrendingUp, position: 'top-[60%] left-[5%]', size: 'w-20 h-20' },
    { Icon: DollarSign, position: 'top-[35%] right-[15%]', size: 'w-32 h-32' },
    { Icon: PiggyBank, position: 'bottom-[10%] left-[20%]', size: 'w-24 h-24' },
    { Icon: Wallet, position: 'top-[10%] right-[5%]', size: 'w-20 h-20' },
  ]; 

  return (
    <section className={heroStyles.sectionClasses}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#3B82F6]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-40 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#8B5CF6]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-[#10B981]/10 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <SectionBackground icons={floatingIcons} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <div className={heroStyles.badgeClasses}>
              <Shield className="w-4 h-4   text-[#0F2854]" />
              <span className="text-xs sm:text-sm text-[#0F2854] font-medium">{t.hero.badge}</span>
            </div>

            <h1 className={heroStyles.titleClasses}>{t.hero.title}</h1>
            <p className={heroStyles.subtitleClasses}>{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <button onClick={scrollToDownload} className={heroStyles.primaryBtnClasses}>
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToFeatures} className={heroStyles.secondaryBtnClasses}>
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D1D5DB] justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] border-2 border-gray-800" />
                ))}
              </div>
              <span className="text-[#0F2854]">{t.hero.trustBadge}</span>
            </div>
          </div>

          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}
