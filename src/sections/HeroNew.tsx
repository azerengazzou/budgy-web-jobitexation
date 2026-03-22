import { useLanguage } from '../contexts/LanguageContext';
import HeroContent from '../components/hero/HeroContent';
import PhoneShowcaseNew from '../components/hero/PhoneShowcaseNew';
import HeroBackground from '../components/hero/HeroBackground';

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent
            badge={t.hero.badge}
            title={t.hero.title}
            subtitle={t.hero.subtitle}
            ctaPrimary={t.hero.cta}
            ctaSecondary={t.hero.ctaSecondary}
            trustBadge={t.hero.trustBadge}
            onDownloadClick={scrollToDownload}
            onFeaturesClick={scrollToFeatures}
          />
          <PhoneShowcaseNew />
        </div>
      </div>
    </section>
  );
}
