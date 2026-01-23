import React from 'react';
import styles from '../styles/animations.module.css';

// Eleven Component
export function Eleven({ delay = 0 }) {
  return (
    <div 
      className={`absolute top-[10%] left-[5%] opacity-20 ${styles.characterFloat}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <ellipse cx="40" cy="25" rx="18" ry="22" fill="#b91c1c" />
        {/* Short hair/buzz cut */}
        <path d="M 22 20 Q 22 10 40 10 Q 58 10 58 20" fill="#7f1d1d" />
        {/* Body/dress */}
        <path d="M 30 45 L 25 80 L 35 115 L 45 115 L 55 80 L 50 45 Z" fill="#b91c1c" />
        {/* Arms */}
        <rect x="18" y="45" width="8" height="35" rx="4" fill="#b91c1c" />
        <rect x="54" y="45" width="8" height="35" rx="4" fill="#b91c1c" />
        {/* Nosebleed detail */}
        <line x1="35" y1="28" x2="35" y2="35" stroke="#ff0000" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Demogorgon Component
export function Demogorgon({ delay = 1 }) {
  return (
    <div 
      className={`absolute top-[15%] right-[8%] opacity-15 ${styles.characterFloat}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <path d="M 50 30 L 35 130 L 45 130 L 50 100 L 55 130 L 65 130 Z" fill="#7f1d1d" />
        {/* Flower head petals */}
        <path d="M 50 25 L 45 10 L 42 20 L 38 8 L 37 20 L 32 10 L 35 25 Z" fill="#991b1b" />
        <path d="M 50 25 L 55 10 L 58 20 L 62 8 L 63 20 L 68 10 L 65 25 Z" fill="#991b1b" />
        {/* Center mouth */}
        <ellipse cx="50" cy="25" rx="8" ry="10" fill="#450a0a" />
        {/* Teeth */}
        <path d="M 45 20 L 47 25 L 45 30 M 50 20 L 50 30 M 55 20 L 53 25 L 55 30" stroke="#7f1d1d" strokeWidth="2" />
        {/* Arms */}
        <rect x="28" y="40" width="6" height="40" rx="3" fill="#7f1d1d" />
        <rect x="66" y="40" width="6" height="40" rx="3" fill="#7f1d1d" />
      </svg>
    </div>
  );
}

// Vecna Component
export function Vecna({ delay = 2 }) {
  return (
    <div 
      className={`absolute bottom-[20%] left-[10%] opacity-15 ${styles.characterFloat}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="90" height="130" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body with vines */}
        <path d="M 45 30 L 35 120 L 40 120 L 45 90 L 50 120 L 55 120 Z" fill="#7f1d1d" />
        {/* Head */}
        <ellipse cx="45" cy="20" rx="15" ry="18" fill="#991b1b" />
        {/* Creepy hand reaching out */}
        <path d="M 20 60 L 15 65 L 12 63 M 15 65 L 15 70 L 13 68 M 15 65 L 18 70 L 16 72" stroke="#b91c1c" strokeWidth="2.5" fill="none" />
        {/* Vine tentacles */}
        <path d="M 40 40 Q 25 50 20 60" stroke="#7f1d1d" strokeWidth="3" fill="none" />
        <path d="M 45 50 Q 15 70 10 85" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
        <path d="M 50 45 Q 70 55 75 70" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
        {/* Eyes */}
        <circle cx="40" cy="18" r="2" fill="#ff0000" />
        <circle cx="50" cy="18" r="2" fill="#ff0000" />
      </svg>
    </div>
  );
}

// Mind Flayer Component
export function MindFlayer({ delay = 1.5 }) {
  return (
    <div 
      className={`absolute bottom-[15%] right-[12%] opacity-12 ${styles.characterFloat}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main shadow body */}
        <ellipse cx="60" cy="40" rx="35" ry="25" fill="#450a0a" />
        {/* Spider-like head */}
        <path d="M 60 15 L 55 30 L 65 30 Z" fill="#7f1d1d" />
        {/* Multiple legs/tentacles */}
        <path d="M 30 50 Q 20 80 15 110 L 18 110 Q 23 80 33 52" fill="#7f1d1d" />
        <path d="M 40 50 Q 35 85 32 120 L 35 120 Q 38 85 43 52" fill="#7f1d1d" />
        <path d="M 50 52 Q 48 90 45 130 L 48 130 Q 51 90 53 54" fill="#7f1d1d" />
        <path d="M 60 52 Q 60 95 58 135 L 62 135 Q 60 95 63 54" fill="#7f1d1d" />
        <path d="M 70 52 Q 72 90 75 130 L 72 130 Q 69 90 67 54" fill="#7f1d1d" />
        <path d="M 80 50 Q 85 85 88 120 L 85 120 Q 82 85 77 52" fill="#7f1d1d" />
        <path d="M 90 50 Q 100 80 105 110 L 102 110 Q 97 80 87 52" fill="#7f1d1d" />
        {/* Lightning around it */}
        <path d="M 25 35 L 28 42 L 25 48" stroke="#ff3333" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 95 35 L 92 42 L 95 48" stroke="#ff3333" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
}

// Will Component
export function Will({ delay = 0.5 }) {
  return (
    <div 
      className={`absolute top-[45%] left-[3%] opacity-18 ${styles.characterFloat}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="70" height="110" viewBox="0 0 70 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <ellipse cx="35" cy="20" rx="14" ry="16" fill="#b91c1c" />
        {/* Bowl cut hair */}
        <path d="M 20 15 Q 20 8 35 8 Q 50 8 50 15 L 48 18 L 22 18 Z" fill="#7f1d1d" />
        {/* Body */}
        <rect x="28" y="35" width="14" height="40" rx="3" fill="#b91c1c" />
        {/* Arms */}
        <rect x="18" y="38" width="8" height="30" rx="4" fill="#b91c1c" />
        <rect x="44" y="38" width="8" height="30" rx="4" fill="#b91c1c" />
        {/* Legs */}
        <rect x="28" y="75" width="6" height="30" rx="3" fill="#b91c1c" />
        <rect x="36" y="75" width="6" height="30" rx="3" fill="#b91c1c" />
      </svg>
    </div>
  );
}

// Spore Component
export function Spore({ delay = 0.3, variant = 1 }) {
  const positions = [
    { top: '30%', right: '25%' },
    { bottom: '35%', left: '30%' }
  ];

  const pos = variant === 1 ? positions[0] : positions[1];

  return (
    <div 
      className={`absolute opacity-20 ${styles.sporeFloat}`}
      style={{ 
        ...pos, 
        animationDelay: `${delay}s` 
      }}
    >
      <svg width={variant === 1 ? "40" : "35"} height={variant === 1 ? "40" : "35"} viewBox={variant === 1 ? "0 0 40 40" : "0 0 35 35"}>
        {variant === 1 ? (
          <>
            <circle cx="20" cy="20" r="3" fill="#ff3333" opacity="0.6" />
            <circle cx="10" cy="15" r="2" fill="#ff3333" opacity="0.4" />
            <circle cx="30" cy="25" r="2.5" fill="#ff3333" opacity="0.5" />
            <circle cx="15" cy="30" r="1.5" fill="#ff3333" opacity="0.7" />
          </>
        ) : (
          <>
            <circle cx="17.5" cy="17.5" r="2.5" fill="#b91c1c" opacity="0.5" />
            <circle cx="8" cy="12" r="2" fill="#b91c1c" opacity="0.4" />
            <circle cx="26" cy="22" r="1.8" fill="#b91c1c" opacity="0.6" />
          </>
        )}
      </svg>
    </div>
  );
}

// Grid Pattern Component
export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff3333" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
