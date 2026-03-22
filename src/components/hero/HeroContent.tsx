import { Download, ArrowRight, Shield } from 'lucide-react';

interface HeroContentProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustBadge: string;
  onDownloadClick: () => void;
  onFeaturesClick: () => void;
}

export default function HeroContent({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  trustBadge,
  onDownloadClick,
  onFeaturesClick
}: HeroContentProps) {
  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-cyan-500/5">
        <Shield className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-medium text-white/90">{badge}</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
        {title}
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
        {subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onDownloadClick}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold 
                     flex items-center justify-center gap-2
                     shadow-lg shadow-cyan-500/25
                     hover:shadow-2xl hover:shadow-cyan-500/40
                     transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                     overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Download className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{ctaPrimary}</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button 
          onClick={onFeaturesClick}
          className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl font-semibold
                     border border-white/10
                     hover:bg-white/10 hover:border-white/20
                     transition-all duration-300 hover:scale-105
                     shadow-lg shadow-black/5"
        >
          {ctaSecondary}
        </button>
      </div>

      {/* Trust Badge */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 border-2 border-slate-900/50 shadow-lg"
            />
          ))}
        </div>
        <span className="text-sm text-white/60">{trustBadge}</span>
      </div>
    </div>
  );
}
