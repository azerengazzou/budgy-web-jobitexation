import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, PiggyBank } from 'lucide-react';

export default function PhoneShowcase() {
  const { t } = useLanguage();

  return (
    <div className="relative animate-fade-in-up animation-delay-100 flex justify-center items-center mt-12 lg:mt-16 px-4">
      {/* Financial Stats Cards */}
      <div className="absolute -top-4 sm:-top-8 left-2 sm:left-4 md:left-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-2xl animate-float z-20 border border-green-400/20">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
          <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          <p className="text-[8px] sm:text-[10px] font-bold text-white">{t.hero.notifications.budgetSaved}</p>
        </div>
        <p className="text-sm sm:text-base font-bold text-white">$2,450</p>
        <p className="text-[8px] sm:text-[9px] text-green-100">{t.hero.notifications.budgetSavedDesc}</p>
      </div>

      <div className="absolute top-1/3 -right-2 sm:-right-4 md:-right-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-2xl animate-float-delayed z-20 border border-blue-400/20">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
          <PiggyBank className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          <p className="text-[8px] sm:text-[10px] font-bold text-white">{t.hero.notifications.goalReached}</p>
        </div>
        <p className="text-sm sm:text-base font-bold text-white">85%</p>
        <p className="text-[8px] sm:text-[9px] text-blue-100">{t.hero.notifications.goalReachedDesc}</p>
      </div>

      <div className="absolute bottom-1/4 -left-2 sm:-left-4 md:-left-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-2xl animate-float z-20 border border-purple-400/20">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
          <DollarSign className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          <p className="text-[8px] sm:text-[10px] font-bold text-white">{t.hero.notifications.spendingAlert}</p>
        </div>
        <p className="text-sm sm:text-base font-bold text-white">$1,230</p>
        <p className="text-[8px] sm:text-[9px] text-purple-100">{t.hero.notifications.spendingAlertDesc}</p>
      </div>

      {/* Single Phone with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full"></div>

        {/* Table/Stand Base */}
        <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-transparent via-black/30 to-transparent blur-sm"></div>
        <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[450px] h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-black/10 to-transparent blur-[2px]"></div>

        <div className="relative flex gap-2 sm:gap-4 md:gap-6 items-center">
          <img
            src="/phone-budgy.png"
            alt="Budget App"
            className="w-[100px] h-[200px] xs:w-[120px] xs:h-[240px] sm:w-[160px] sm:h-[320px] md:w-[200px] md:h-[400px] lg:w-[240px] lg:h-[480px] object-contain drop-shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 opacity-80 hover:opacity-100"
          />
          <img
            src="/phone-budgy.png"
            alt="Budget App"
            className="w-[150px] h-[300px] xs:w-[180px] xs:h-[360px] sm:w-[240px] sm:h-[440px] md:w-[280px] md:h-[560px] lg:w-[320px] lg:h-[640px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 z-10"
          />
          <img
            src="/phone-budgy.png"
            alt="Budget App"
            className="w-[100px] h-[200px] xs:w-[120px] xs:h-[240px] sm:w-[160px] sm:h-[320px] md:w-[200px] md:h-[400px] lg:w-[240px] lg:h-[480px] object-contain drop-shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 opacity-80 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
