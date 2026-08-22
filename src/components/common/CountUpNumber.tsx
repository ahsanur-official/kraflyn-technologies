import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpNumberProps {
  end: number;
  start?: number;
  duration?: number; // duration in seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  formatCommas?: boolean;
  isBengali?: boolean;
  className?: string;
}

export const toBengaliDigits = (val: string | number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(val).replace(/[0-9]/g, (digit) => bnDigits[parseInt(digit, 10)]);
};

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  formatCommas = true,
  isBengali = false,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    let formatted = start.toFixed(decimals);
    if (formatCommas && decimals === 0) {
      formatted = Math.floor(start).toLocaleString('en-US');
    }
    if (isBengali) {
      formatted = toBengaliDigits(formatted);
    }
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) {
      // Optional: reset to start when scrolled away so it re-triggers on scroll
      let formatted = start.toFixed(decimals);
      if (formatCommas && decimals === 0) {
        formatted = Math.floor(start).toLocaleString('en-US');
      }
      if (isBengali) {
        formatted = toBengaliDigits(formatted);
      }
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const currentNumber = start + (end - start) * easedProgress;

      let formattedNumber: string;
      if (decimals > 0) {
        formattedNumber = currentNumber.toFixed(decimals);
      } else {
        const rounded = Math.round(currentNumber);
        formattedNumber = formatCommas ? rounded.toLocaleString('en-US') : rounded.toString();
      }

      if (isBengali) {
        formattedNumber = toBengaliDigits(formattedNumber);
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, start, duration, decimals, prefix, suffix, formatCommas, isBengali]);

  return (
    <span ref={ref} className={`inline-block tabular-nums transition-transform ${className}`}>
      {displayValue}
    </span>
  );
};
