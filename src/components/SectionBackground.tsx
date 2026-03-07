import { LucideIcon } from 'lucide-react';

interface SectionBackgroundProps {
  icons?: Array<{ Icon: LucideIcon; position: string; size: string }>;
  variant?: 'default' | 'light';
}

export default function SectionBackground({ icons = [], variant = 'default' }: SectionBackgroundProps) {
  return (
    <>
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Floating decorative icons */}
      {icons.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {icons.map((item, index) => (
            <item.Icon
              key={index}
              className={`absolute ${item.position} ${item.size} text-white opacity-5 ${
                index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
              }`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
