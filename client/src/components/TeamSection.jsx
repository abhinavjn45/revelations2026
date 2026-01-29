
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import './styles/TeamSection.css';

// Import images for reliable build output
import henryImg from '../assets/images/homepage/henry001-removebg.png';
import vecnaImg from '../assets/images/homepage/vecna.png';
import willImg from '../assets/images/homepage/will.png';
import heroMainImg from '../assets/images/homepage/hero-main.png';

const TEAMS = [
  {
    id: 1,
    name: 'Mind Flayers',
    tagline: 'We control the system.',
    logo: henryImg,
    students: 18,
    description: 'We control the system.',
  },
  {
    id: 2,
    name: 'Hawkins Labs',
    tagline: 'Experiment. Break. Innovate.',
    logo: vecnaImg,
    students: 17,
    description: 'Experiment. Break. Innovate.',
  },
  {
    id: 3,
    name: 'The Demogorgans',
    tagline: 'Code. Conquer. Consume.',
    logo: willImg,
    students: 19,
    description: 'Code. Conquer. Consume.',
  },
  {
    id: 4,
    name: 'The Upside Down',
    tagline: 'We live in the parallel network',
    logo: heroMainImg,
    students: 16,
    description: 'We live in the parallel network',
  },
  {
    id: 5,
    name: 'The Signal Seekers',
    tagline: 'Searching for hidden signals.',
    logo: henryImg,
    students: 20,
    description: 'Searching for hidden signals.',
  },
  {
    id: 6,
    name: 'Starcourt Squad',
    tagline: 'Style meets science.',
    logo: vecnaImg,
    students: 15,
    description: 'Style meets science.',
  },
];

export default function TeamSection() {
  const [openCard, setOpenCard] = useState(null); // for mobile overlay
  const [hovered, setHovered] = useState(null); // for desktop hover
  const [buttonGlow, setButtonGlow] = useState(null);

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // Close overlay on outside tap (mobile)
  useEffect(() => {
    if (!isMobile || openCard === null) return;
    const handler = (e) => {
      if (!e.target.closest('.team-card')) setOpenCard(null);
    };
    document.addEventListener('touchstart', handler);
    return () => document.removeEventListener('touchstart', handler);
  }, [openCard, isMobile]);

  // Button glow on hover entry
  useEffect(() => {
    let t;
    if (hovered !== null) {
      setButtonGlow(hovered);
      t = setTimeout(() => setButtonGlow(null), 700);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [hovered]);

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#050505] overflow-hidden">
      {/* Cinematic background noise/texture REPLACE with Atmosphere */}
      <AtmosphereBackground />
      {/* Vein Overlays - Top Right & Bottom Left */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <VeinOverlay className="top-0 right-0 w-48 h-48 md:w-96 md:h-96 translate-x-1/3 -translate-y-1/3" delay={0} rotate={90} />
        <VeinOverlay className="bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 -translate-x-1/3 translate-y-1/3" delay={0.5} rotate={-90} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-stranger text-3xl sm:text-4xl md:text-6xl text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
            LAB DIVISIONS
          </h2>
          <p className="font-typewriter text-gray-500 mt-2 tracking-widest text-xs sm:text-sm md:text-base">
            MEET THE SIX DIVISIONS OF REVELATIONS
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAMS.map((team) => {
            // Overlay visible if: (desktop & hover) or (mobile & openCard === team.id)
            const isFlipped = !isMobile ? hovered === team.id : openCard === team.id;
            return (
              <div
                key={team.id}
                className={`team-card group relative bg-black/40 border p-6 rounded-lg flex flex-col items-center text-center overflow-hidden transition-colors ${isFlipped ? 'border-red-600 shadow-[0_0_24px_0_#b91c1c55]' : 'border-red-900/30 hover:border-red-600'}`}
                onMouseEnter={!isMobile ? () => setHovered(team.id) : undefined}
                onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
                onTouchStart={isMobile ? (e) => {
                  e.stopPropagation();
                  if (openCard !== team.id) setOpenCard(team.id);
                } : undefined}
                style={{ perspective: 800, minHeight: 260 }}
              >
                <div className={`flip-card-inner w-full h-full transition-transform duration-500 ${isFlipped ? 'flipped' : ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
                  {/* Front Side */}
                  <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg z-10" style={{ backfaceVisibility: 'hidden', minHeight: 220 }}>
                    <img
                      src={team.logo}
                      alt={team.name + ' logo'}
                      className="w-20 h-20 object-contain mb-4 drop-shadow-lg team-logo"
                      draggable="false"
                    />
                    <h3 className="font-stranger text-2xl text-red-600 mb-1 tracking-wider">{team.name}</h3>
                    <div className="font-typewriter text-xs text-gray-400 mb-2">{team.tagline}</div>
                    <p className="font-typewriter text-gray-300 mb-2">Students: <span className="text-white font-bold">{team.students}</span></p>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg z-20 px-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', minHeight: 220 }}>
                    <p className="font-typewriter text-gray-200 mb-4">{team.tagline}</p>

                  </div>
                </div>
                <style>{`
                  .flip-card-inner {
                    transition: transform 2s cubic-bezier(.4,2,.6,1);
                    transform-style: preserve-3d;
                  }
                  .flip-card-inner.flipped {
                    transform: rotateY(180deg);
                  }
                  .flip-card-front, .flip-card-back {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0; left: 0;
                  }
                `}</style>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
