import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, PiggyBank } from 'lucide-react';

export default function PhoneShowcase() {
  const { t } = useLanguage();

  return (
    <div className="relative animate-fade-in-up animation-delay-100 flex justify-center items-center mt-12 lg:mt-16">
      {/* Financial Stats Cards */}
      <div className="absolute -top-8 left-4 sm:left-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl px-4 py-3 shadow-2xl animate-float z-20 border border-green-400/20">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">{t.hero.notifications.budgetSaved}</p>
        </div>
        <p className="text-xl font-bold text-white">$2,450</p>
        <p className="text-[10px] text-green-100">{t.hero.notifications.budgetSavedDesc}</p>
      </div>
      
      <div className="absolute top-1/3 -right-4 sm:-right-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl px-4 py-3 shadow-2xl animate-float-delayed z-20 border border-blue-400/20">
        <div className="flex items-center gap-2 mb-1">
          <PiggyBank className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">{t.hero.notifications.goalReached}</p>
        </div>
        <p className="text-xl font-bold text-white">85%</p>
        <p className="text-[10px] text-blue-100">{t.hero.notifications.goalReachedDesc}</p>
      </div>
      
      <div className="absolute bottom-1/4 -left-4 sm:-left-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl px-4 py-3 shadow-2xl animate-float z-20 border border-purple-400/20">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign className="w-4 h-4 text-white" />
          <p className="text-xs font-bold text-white">{t.hero.notifications.spendingAlert}</p>
        </div>
        <p className="text-xl font-bold text-white">$1,230</p>
        <p className="text-[10px] text-purple-100">{t.hero.notifications.spendingAlertDesc}</p>
      </div>

      {/* Single Phone with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          <img 
            src="/phone-2.png" 
            alt="Budget App" 
            className="w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
