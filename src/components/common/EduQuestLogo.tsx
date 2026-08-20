import React from 'react';

interface EduQuestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  variant?: 'full' | 'icon' | 'white';
}

export const EduQuestLogo: React.FC<EduQuestLogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = true,
  variant = 'full'
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const sloganSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-wider',
    md: 'text-[8px] sm:text-[9px] tracking-wider sm:tracking-widest',
    lg: 'text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em]',
    xl: 'text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em]'
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* 3D Crest Monogram SVG */}
      <div className={`relative shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Arc Glow */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#outerArcGrad)"
            strokeWidth="3"
            strokeDasharray="450 100"
            strokeLinecap="round"
            className="opacity-70"
          />

          {/* Letter E with Book Pages on Base */}
          <path
            d="M 45 55 
               H 95 
               C 98 55, 100 58, 98 62 
               L 94 72 
               C 92 75, 88 77, 84 77 
               H 68 
               V 90 
               H 88 
               C 91 90, 93 93, 92 97 
               L 89 105 
               C 88 108, 85 110, 81 110 
               H 68 
               V 122 
               C 68 126, 70 129, 74 130 
               C 85 132, 95 136, 102 142
               C 92 144, 75 144, 60 138 
               C 50 134, 45 125, 45 115 
               Z"
            fill="url(#eBlueGrad)"
            filter="drop-shadow(0px 2px 4px rgba(15,23,42,0.25))"
          />

          {/* Stylized Open Book at base of E */}
          <path
            d="M 46 128
               C 58 124, 76 126, 88 135
               C 74 139, 58 138, 46 132
               Z"
            fill="#38bdf8"
          />
          <path
            d="M 46 133
               C 58 130, 78 133, 90 142
               C 74 146, 56 144, 46 137
               Z"
            fill="#0284c7"
          />

          {/* Circular Q Ring with depth */}
          <path
            d="M 125 45 
               A 55 55 0 1 0 160 140 
               L 168 152 
               C 171 156, 166 162, 160 159 
               L 145 151 
               A 55 55 0 0 0 125 45 
               Z"
            fill="url(#qBlueGrad)"
            filter="drop-shadow(0px 3px 6px rgba(15,23,42,0.3))"
          />

          {/* Inner Q Cutout with Compass Ring */}
          <circle
            cx="118"
            cy="98"
            r="35"
            fill="#ffffff"
          />
          <circle
            cx="118"
            cy="98"
            r="34"
            fill="url(#compassBgGrad)"
          />

          {/* 8-Pointed Compass Star inside Q */}
          <g transform="translate(118, 98)">
            {/* North-South Primary Star */}
            <polygon points="0,-26 6,-6 0,0 -6,-6" fill="#1e3a8a" />
            <polygon points="0,26 6,6 0,0 -6,6" fill="#1e3a8a" />
            {/* East-West Primary Star */}
            <polygon points="-26,0 -6,-6 0,0 -6,6" fill="#ea580c" />
            <polygon points="26,0 6,-6 0,0 6,6" fill="#f59e0b" />
            {/* Diagonal small points */}
            <polygon points="-14,-14 -3,-3 0,0 -3,-3" fill="#38bdf8" />
            <polygon points="14,14 3,3 0,0 3,3" fill="#38bdf8" />
            <polygon points="14,-14 3,-3 0,0 3,-3" fill="#38bdf8" />
            <polygon points="-14,14 -3,3 0,0 -3,3" fill="#38bdf8" />
            {/* Center Compass Pin */}
            <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* Graduation Cap atop the Q */}
          <g transform="translate(120, 24)">
            {/* Cap Diamond */}
            <polygon
              points="0,15 32,5 0,-5 -32,5"
              fill="#0f172a"
              filter="drop-shadow(0px 2px 3px rgba(0,0,0,0.3))"
            />
            {/* Cap Base / Skullcap */}
            <path
              d="M -16 8 Q 0 16 16 8 L 14 16 Q 0 22 -14 16 Z"
              fill="#1e293b"
            />
            {/* Golden Tassel Button & String */}
            <circle cx="0" cy="5" r="2.5" fill="#f59e0b" />
            <path
              d="M 0 5 Q 18 10 22 22"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
            />
            {/* Golden Tassel Fringe */}
            <polygon points="20,22 24,22 26,32 18,32" fill="#d97706" />
          </g>

          {/* Dynamic Golden-Orange Flying Rocket / Paper Plane Arrow */}
          <path
            d="M 44 146
               C 80 148, 120 130, 165 80
               L 182 68
               L 174 88
               C 135 130, 90 156, 44 146
               Z"
            fill="url(#arrowGrad)"
            filter="drop-shadow(0px 2px 4px rgba(234,88,12,0.4))"
          />
          {/* Arrowhead / Paper Plane detail */}
          <polygon
            points="185,65 160,74 168,88"
            fill="#f97316"
          />
          <polygon
            points="185,65 174,88 178,82"
            fill="#ea580c"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="eBlueGrad" x1="45" y1="55" x2="105" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="60%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            <linearGradient id="qBlueGrad" x1="80" y1="45" x2="170" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="40%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="compassBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <linearGradient id="arrowGrad" x1="44" y1="150" x2="185" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>

            <linearGradient id="outerArcGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography & Slogan */}
      {variant !== 'icon' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-tight">
            <span className={`font-black text-slate-900 ${titleSizes[size]}`}>
              Edu
            </span>
            <span className={`font-black text-blue-600 ml-1.5 ${titleSizes[size]} relative inline-block`}>
              Quest
              {/* Vibrant Orange Underline Accent under Quest */}
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] sm:h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-xs"></span>
            </span>
          </div>

          {showSlogan && (
            <div className="hidden xs:flex sm:flex items-center gap-1.5 mt-1 sm:mt-1.5">
              <span className="h-0.5 w-2 sm:w-3 bg-blue-600 rounded-full"></span>
              <span className={`font-black uppercase text-slate-600 whitespace-nowrap ${sloganSizes[size]}`}>
                YOUR ACADEMIC JOURNEY, OUR SUPPORT
              </span>
              <span className="h-0.5 w-2 sm:w-3 bg-orange-500 rounded-full"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
