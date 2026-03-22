import { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  gradient: string;
  position: string;
  delay?: string;
}

export default function FloatingCard({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  gradient, 
  position,
  delay = '0s'
}: FloatingCardProps) {
  return (
    <div 
      className={`absolute ${position} z-20 group cursor-pointer`}
      style={{ animationDelay: delay }}
    >
      <div className={`
        relative backdrop-blur-xl bg-white/10 
        rounded-2xl px-4 py-3 
        border border-white/20
        shadow-2xl shadow-black/10
        transition-all duration-300
        hover:scale-105 hover:bg-white/15
        hover:shadow-2xl hover:shadow-blue-500/20
        animate-float
      `}>
        <div className={`absolute inset-0 ${gradient} opacity-10 rounded-2xl`}></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <div className={`p-1.5 rounded-lg ${gradient}`}>
              <Icon className="w-3 h-3 text-white" />
            </div>
            <p className="text-[10px] font-semibold text-white/90">{title}</p>
          </div>
          <p className="text-xl font-bold text-white mb-0.5">{value}</p>
          <p className="text-[9px] text-white/70">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
