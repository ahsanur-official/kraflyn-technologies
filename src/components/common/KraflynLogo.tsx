import React from 'react';

interface KraflynLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showSlogan?: boolean;
  showPillars?: boolean;
  variant?: 'full' | 'emblem' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
}

export const KraflynLogo: React.FC<KraflynLogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = true,
  variant = 'horizontal'
}) => {
  const emblemSizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-11 sm:h-11',
    lg: 'w-13 h-13 sm:w-16 sm:h-16',
    xl: 'w-18 h-18 sm:w-24 sm:h-24',
    '2xl': 'w-24 h-24 sm:w-36 sm:h-36',
    hero: 'w-36 h-36 sm:w-60 sm:h-60 md:w-72 md:h-72'
  };

  const titleSizes = {
    xs: 'text-[11px] font-black',
    sm: 'text-xs sm:text-sm font-black',
    md: 'text-sm sm:text-base md:text-lg lg:text-xl font-black',
    lg: 'text-lg sm:text-xl md:text-2xl font-black',
    xl: 'text-2xl sm:text-3xl font-black',
    '2xl': 'text-3xl sm:text-4xl font-black',
    hero: 'text-3xl sm:text-5xl md:text-6xl font-black'
  };

  const sloganSizes = {
    xs: 'text-[6.5px] tracking-wider',
    sm: 'text-[7.5px] sm:text-[8.5px] tracking-wider sm:tracking-widest',
    md: 'text-[8px] sm:text-[9.5px] tracking-[0.12em] sm:tracking-[0.16em]',
    lg: 'text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.22em]',
    xl: 'text-xs sm:text-sm tracking-[0.22em]',
    '2xl': 'text-sm sm:text-base tracking-[0.24em]',
    hero: 'text-base sm:text-lg tracking-[0.28em]'
  };

  // High-Precision Vector Emblem matching the official Kraflyn Technologies 3D Logo
  const EmblemSvg = ({ customSize }: { customSize?: string }) => (
    <div className={`relative shrink-0 ${customSize || emblemSizes[size]} aspect-square flex items-center justify-center`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(0,210,255,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyber Neon Glow Filter */}
          <filter id="kraflynNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Precision Bevel Shadow */}
          <filter id="kraflynShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
          </filter>

          {/* Outer Ring Neon Gradient: Cyan to Electric Blue to Vivid Purple */}
          <linearGradient id="kraflynRingGrad" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="30%" stopColor="#00b4d8" />
            <stop offset="60%" stopColor="#0077b6" />
            <stop offset="80%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          {/* Deep Space Black Disk Gradient */}
          <radialGradient id="kraflynDiskGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a0f1d" />
            <stop offset="70%" stopColor="#03060c" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Upper Cyan/Blue Wing Top Face */}
          <linearGradient id="kraflynUpperWingTop" x1="180" y1="180" x2="400" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Upper Cyan/Blue Wing Lower Bevel */}
          <linearGradient id="kraflynUpperWingBevel" x1="170" y1="240" x2="320" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          {/* Center Silver/White Metallic Blade Top Face */}
          <linearGradient id="kraflynSilverBladeTop" x1="175" y1="350" x2="320" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Center Silver Blade Bottom Bevel */}
          <linearGradient id="kraflynSilverBladeBevel" x1="175" y1="350" x2="310" y2="245" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Lower Purple Wing Top Face */}
          <linearGradient id="kraflynLowerWingTop" x1="220" y1="320" x2="360" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          {/* Lower Purple Wing Bottom Bevel */}
          <linearGradient id="kraflynLowerWingBevel" x1="210" y1="340" x2="340" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>

          {/* Circuit Line Glow */}
          <linearGradient id="circuitGrad" x1="100" y1="360" x2="160" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077b6" />
            <stop offset="50%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
        </defs>

        {/* 1. Outer Deep Black Circular Base */}
        <circle cx="250" cy="250" r="242" fill="#000000" />

        {/* 2. Inner Disk with Subtle Radial Depth */}
        <circle cx="250" cy="250" r="230" fill="url(#kraflynDiskGrad)" />

        {/* Ambient Center Glow */}
        <ellipse cx="250" cy="220" rx="140" ry="110" fill="#0077b6" opacity="0.18" />
        <ellipse cx="300" cy="300" rx="110" ry="90" fill="#7c3aed" opacity="0.16" />

        {/* 3. Outer Glowing Neon Ring & Bevel */}
        <circle cx="250" cy="250" r="185" stroke="url(#kraflynRingGrad)" strokeWidth="22" strokeLinecap="round" opacity="0.9" filter="url(#kraflynNeonGlow)" />
        <circle cx="250" cy="250" r="185" stroke="url(#kraflynRingGrad)" strokeWidth="18" strokeLinecap="round" />
        <circle cx="250" cy="250" r="195" stroke="#00f0ff" strokeWidth="2" opacity="0.6" />
        <circle cx="250" cy="250" r="175" stroke="#0284c7" strokeWidth="2" opacity="0.4" />

        {/* 4. Left PCB Circuit Board Traces with Glowing Nodes */}
        <g id="circuitTraces" filter="url(#kraflynShadow)">
          {/* Trace 1 (Top) */}
          <path
            d="M 106 325 L 126 270 L 126 230 L 148 212"
            stroke="url(#circuitGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="152" cy="212" r="8" fill="#00f0ff" filter="url(#kraflynNeonGlow)" />
          <circle cx="152" cy="212" r="5" fill="#ffffff" />

          {/* Trace 2 (Middle) */}
          <path
            d="M 96 360 L 122 305 L 140 280 L 148 262"
            stroke="url(#circuitGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="262" r="7.5" fill="#00e5ff" filter="url(#kraflynNeonGlow)" />
          <circle cx="150" cy="262" r="4.5" fill="#ffffff" />

          {/* Trace 3 (Bottom) */}
          <path
            d="M 110 395 L 138 350 L 138 322"
            stroke="url(#circuitGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="138" cy="320" r="7" fill="#00b4d8" filter="url(#kraflynNeonGlow)" />
          <circle cx="138" cy="320" r="4" fill="#ffffff" />
        </g>

        {/* 5. Central 3D Dynamic 'K' Wings / Blades */}
        <g id="centralKWings" filter="url(#kraflynShadow)">
          
          {/* A. UPPER CYAN/BLUE WING */}
          {/* Lower 3D Bevel Segment */}
          <path
            d="M 175 285 L 260 215 L 348 215 L 245 288 Z"
            fill="url(#kraflynUpperWingBevel)"
          />
          {/* Main Top Face Blade (Pointing Upper-Right) */}
          <path
            d="M 260 215 L 348 215 L 416 128 L 260 128 Z"
            fill="url(#kraflynUpperWingTop)"
          />
          {/* Top Edge Rim Highlight */}
          <path
            d="M 260 128 L 416 128 L 348 215"
            stroke="#a5f3fc"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Upper Wing Left Diagonal Stem */}
          <path
            d="M 175 285 L 260 128 L 260 215 L 175 285 Z"
            fill="#0284c7"
          />

          {/* B. CENTER METALLIC SILVER / WHITE BLADE */}
          {/* Main Silver Blade Top Face */}
          <path
            d="M 175 355 L 175 285 L 320 225 L 285 270 Z"
            fill="url(#kraflynSilverBladeTop)"
          />
          {/* Bottom Bevel Face */}
          <path
            d="M 175 355 L 285 270 L 250 310 Z"
            fill="url(#kraflynSilverBladeBevel)"
          />
          {/* Silver Highlight Stroke */}
          <path
            d="M 175 285 L 320 225 L 285 270"
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
          />

          {/* C. LOWER RIGHT PURPLE WING */}
          {/* Top Face */}
          <path
            d="M 215 330 L 255 305 L 365 365 L 280 370 Z"
            fill="url(#kraflynLowerWingTop)"
          />
          {/* Bottom Bevel */}
          <path
            d="M 280 370 L 365 365 L 350 378 L 250 380 Z"
            fill="url(#kraflynLowerWingBevel)"
          />
          {/* Purple Glow Highlight */}
          <path
            d="M 255 305 L 365 365"
            stroke="#e9d5ff"
            strokeWidth="2.5"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );

  // Variant: Pure Emblem Circle
  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <EmblemSvg />
      </div>
    );
  }

  // Variant: Full Stacked (Emblem on top + KRAFLYN TECHNOLOGIES + Slogan)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <EmblemSvg />
        <div className="mt-3 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center tracking-tight leading-none text-slate-900 dark:text-white">
            <span className="text-slate-900 font-black text-xl sm:text-2xl tracking-wider">KRAFLYN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 font-black text-xl sm:text-2xl sm:ml-1.5">
              TECHNOLOGIES
            </span>
          </div>
          {showSlogan && (
            <div className="mt-1.5 flex items-center justify-center gap-1.5 text-slate-500 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-slate-500">
                Create • Connect • Grow
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Variant: Horizontal (Default Navbar & Headers)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none shrink-0 ${className}`}>
      {/* Crisp 3D Cyber Emblem */}
      <EmblemSvg />

      {/* Stylized Brand Typography Column */}
      <div className="flex flex-col justify-center min-w-0">
        <div className={`flex items-center tracking-tight leading-none text-slate-900 dark:text-white ${titleSizes[size]}`}>
          <span className="text-slate-900 tracking-tight">KRAFLYN</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 ml-1.5 font-black">
            TECHNOLOGIES
          </span>
        </div>

        {showSlogan && (
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
            <span className={`font-extrabold uppercase tracking-widest text-slate-600 dark:text-slate-400 truncate ${sloganSizes[size]}`}>
              Create • Connect • Grow
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
          </div>
        )}
      </div>
    </div>
  );
};
