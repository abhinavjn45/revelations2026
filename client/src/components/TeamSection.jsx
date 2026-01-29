
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import { TEAMS_DATA } from '../data/teamData';
import './styles/TeamSection.css';

// Reveal date: January 31, 2026 at 12:00 PM IST
const REVEAL_DATE = new Date('2026-01-31T12:00:00+05:30');

export default function TeamSection() {
  const [openCard, setOpenCard] = useState(null); // for mobile overlay
  const [hovered, setHovered] = useState(null); // for desktop hover
  const [buttonGlow, setButtonGlow] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Check if team details should be revealed
  useEffect(() => {
    const checkRevealDate = () => {
      const now = new Date();
      setIsRevealed(now >= REVEAL_DATE);
    };

    // Check immediately
    checkRevealDate();

    // Check every minute in case page is left open
    const interval = setInterval(checkRevealDate, 60000);

    return () => clearInterval(interval);
  }, []);

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
    <section id="teams" className="relative w-full py-16 sm:py-20 bg-[#050505] overflow-hidden">
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
          {TEAMS_DATA.map((team) => {
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
                style={{ perspective: 800, minHeight: 280 }}
              >
                <div className={`flip-card-inner w-full h-full transition-transform duration-500 ${isFlipped ? 'flipped' : ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
                  {/* Front Side */}
                  <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg z-10" style={{ backfaceVisibility: 'hidden', minHeight: 240 }}>
                    <img
                      src={team.logo}
                      alt={team.name + ' logo'}
                      className="w-20 h-20 object-contain mb-4 drop-shadow-lg team-logo"
                      draggable="false"
                    />
                    <h3 className="font-stranger text-2xl text-red-600 mb-1 tracking-wider">{team.name}</h3>
                    <div className="font-typewriter text-xs text-gray-400 mb-2">{team.tagline}</div>
                    <p className="font-typewriter text-gray-300 mb-3">Members: <span className="text-white font-bold">{team.students.length}</span></p>

                    {/* View Team Button - only visible after reveal date */}
                    {isRevealed && (
                      <Link
                        to={`/team/${team.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-800/60 to-red-700/60 hover:from-red-700 hover:to-red-600 text-white font-typewriter text-xs tracking-wider rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] group/btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>VIEW TEAM</span>
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="group-hover/btn:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg z-20 px-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', minHeight: 240 }}>
                    <p className="font-typewriter text-gray-200 mb-4 text-center">{team.description}</p>
                    <p className="font-typewriter text-sm text-gray-400 mb-4">{team.students.length} Members</p>

                    {/* View Team Button on Back - only visible after reveal date */}
                    {isRevealed && (
                      <Link
                        to={`/team/${team.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-typewriter text-sm tracking-wider rounded-lg border border-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] group/btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>VIEW ALL MEMBERS</span>
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="group-hover/btn:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
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
