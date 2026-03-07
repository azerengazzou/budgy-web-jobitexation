import { useLanguage } from '../contexts/LanguageContext';

export default function PhoneShowcase() {
  const { t } = useLanguage();

  return (
    <div className="relative animate-fade-in-up animation-delay-100 flex justify-center items-center mt-8 lg:mt-5">
      {/* Notification Blobs */}
      <div className="absolute top-1 left-2 sm:left-2 md:left-2 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 shadow-lg animate-float z-10">
        <p className="text-xs sm:text-sm font-semibold text-gray-900">{t.hero.notifications.budgetSaved}</p>
        <p className="text-[10px] sm:text-xs text-gray-600">{t.hero.notifications.budgetSavedDesc}</p>
      </div>
      
      <div className="absolute top-1/3 -right-2 sm:-right-4 md:-right-6 lg:-right-4 bg-green-500/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg animate-float-delayed z-20">
        <p className="text-xs sm:text-sm font-semibold text-white">{t.hero.notifications.goalReached}</p>
        <p className="text-[10px] sm:text-xs text-green-100">{t.hero.notifications.goalReachedDesc}</p>
      </div>
      
      <div className="absolute bottom-1/4 -left-2 sm:-left-6 md:-left-8 bg-blue-500/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg animate-float z-20">
        <p className="text-xs sm:text-sm font-semibold text-white">{t.hero.notifications.spendingAlert}</p>
        <p className="text-[10px] sm:text-xs text-blue-100">{t.hero.notifications.spendingAlertDesc}</p>
      </div>

      {/* Phone Images */}
      <div className="transform -rotate-12 hover:scale-90 transition-transform duration-300 scale-75 opacity-80">
        <img 
          src="/phone-2.png" 
          alt="Budget App" 
          className="w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px] object-contain drop-shadow-2xl"
        />
      </div>
      <div className="transform rotate-0 hover:scale-105 transition-transform duration-300 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 z-10">
        <img 
          src="/phone-2.png" 
          alt="Budget App" 
          className="w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px] object-contain drop-shadow-2xl"
        />
      </div>
      <div className="transform rotate-12 hover:scale-90 transition-transform duration-300 scale-75 opacity-80">
        <img 
          src="/phone-2.png" 
          alt="Budget App" 
          className="w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[300px] lg:h-[600px] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
