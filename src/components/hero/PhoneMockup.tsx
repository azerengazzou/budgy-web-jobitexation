interface PhoneMockupProps {
  src: string;
  alt: string;
  size?: 'small' | 'large';
  rotation?: number;
  className?: string;
}

export default function PhoneMockup({ 
  src, 
  alt, 
  size = 'large', 
  rotation = 0,
  className = ''
}: PhoneMockupProps) {
  const sizeClasses = size === 'large' 
    ? 'w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] lg:w-[320px] lg:h-[640px]'
    : 'w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] lg:w-[220px] lg:h-[440px]';

  return (
    <div 
      className={`
        relative transition-all duration-300
        hover:scale-105 hover:-translate-y-2
        ${size === 'small' ? 'opacity-70 hover:opacity-100' : 'z-10'}
        ${className}
      `}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem]"></div>
      <img 
        src={src} 
        alt={alt} 
        className={`relative ${sizeClasses} object-contain drop-shadow-2xl`}
      />
    </div>
  );
}
