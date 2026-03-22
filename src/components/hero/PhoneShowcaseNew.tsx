import { TrendingUp, Target, Wallet, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import FloatingCard from './FloatingCard';
import PhoneMockup from './PhoneMockup';

export default function PhoneShowcaseNew() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center">
      {/* Floating Cards */}
      <FloatingCard
        icon={TrendingUp}
        title="Monthly Savings"
        value="$2,450"
        subtitle="↑ 24% from last month"
        gradient="bg-gradient-to-br from-green-500 to-emerald-600"
        position="top-4 left-0 lg:left-8"
        delay="0s"
      />

      <FloatingCard
        icon={Target}
        title="Goal Progress"
        value="85%"
        subtitle="$4,250 of $5,000"
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
        position="top-1/3 -right-4 lg:right-0"
        delay="0.2s"
      />

      <FloatingCard
        icon={Wallet}
        title="Available Budget"
        value="$1,230"
        subtitle="For this week"
        gradient="bg-gradient-to-br from-purple-500 to-violet-600"
        position="bottom-24 -left-4 lg:left-4"
        delay="0.4s"
      />

      <FloatingCard
        icon={AlertCircle}
        title="Spending Alert"
        value="-$340"
        subtitle="Dining exceeded by 15%"
        gradient="bg-gradient-to-br from-orange-500 to-red-500"
        position="bottom-32 -right-4 lg:right-8"
        delay="0.6s"
      />

      {/* Phone Mockups */}
      <div className="flex items-center justify-center gap-4 lg:gap-6">
        <PhoneMockup 
          src="/phone-budgy.png" 
          alt="Budgy App" 
          size="small"
          rotation={-8}
        />
        <PhoneMockup 
          src="/phone-budgy.png" 
          alt="Budgy App" 
          size="large"
          rotation={0}
        />
        <PhoneMockup 
          src="/phone-budgy.png" 
          alt="Budgy App" 
          size="small"
          rotation={8}
        />
      </div>

      {/* Table Surface Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] lg:w-[700px] h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"></div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[400px] lg:w-[600px] h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
    </div>
  );
}
