export default function HeroBackground() {
  return (
    <>
      {/* Base Multi-Layer Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950"></div>
      
      {/* Secondary Gradient Layer for Depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/50 via-transparent to-purple-900/30"></div>
      
      {/* Radial Glow - Left Side (Darker for Text Readability) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-slate-900/60 via-transparent to-transparent"></div>
      
      {/* Radial Glow - Right Side (Brighter for Phone Focus) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl animate-pulse-slow"></div>
      
      {/* Accent Glow - Cyan */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-float-slow"></div>
      
      {/* Accent Glow - Purple */}
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/15 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Spotlight Effect Behind Phones */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-blue-400/10 to-transparent blur-2xl"></div>
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
           }}>
      </div>
      
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/40"></div>
    </>
  );
}
