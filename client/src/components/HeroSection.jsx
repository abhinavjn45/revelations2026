
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import leaderboardData from '../data/leaderboardData';

function LeaderboardPopup({ open, onClose }) {
  // Sort leaderboard in descending order by points
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.points - a.points);
  // Compute ranks with ties
  let lastPoints = null;
  let lastRank = 0;
  let skip = 1;
  const rankedRows = sortedLeaderboard.map((row, idx) => {
    if (row.points !== lastPoints) {
      lastRank = idx;
      skip = 1;
    } else {
      skip++;
    }
    lastPoints = row.points;
    return { ...row, rank: lastRank };
  });

  // Check if all teams have 0 points
  const allZero = rankedRows.every(row => row.points === 0);
  // Count unique nonzero point ranks
  const nonZeroRanks = rankedRows.filter(row => row.points > 0).map(row => row.rank);
  const uniqueNonZeroRanks = Array.from(new Set(nonZeroRanks));
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#1a0505ee] via-[#0a0a0acc] to-[#18181bee] backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#18181b] via-[#1a0505] to-[#18181b] border-2 border-red-700 rounded-3xl shadow-[0_8px_48px_8px_rgba(220,38,38,0.25)] p-8 w-[95vw] max-w-lg mx-auto flex flex-col items-center"
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ boxShadow: '0 0 60px 0 #dc2626cc, 0 0 0 2px #b91c1c44' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-red-900/40 hover:bg-red-700/90 text-red-200 hover:text-white transition-all duration-200 focus:outline-none shadow-lg"
              aria-label="Close leaderboard"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <h2 className="font-stranger text-3xl text-red-500 mb-6 text-center tracking-wider drop-shadow-lg animate-pulse">Leaderboard</h2>
            <div className="w-full">
              <table className="w-full text-left font-typewriter text-lg text-gray-200 mb-6">
                <tbody>
                  <thead>
                  </thead>
                  {rankedRows.map((row, idx) => {
                    let colorClass = '';
                    let icon = null;
                    let style = {};
                    if (!allZero && row.points > 0) {
                      // Only show gold/silver/bronze for as many unique nonzero ranks as exist (max 3)
                      if (row.rank === 0 && uniqueNonZeroRanks.length >= 1) {
                        colorClass = 'bg-gradient-to-r from-yellow-400/20 to-yellow-200/10 font-extrabold text-yellow-300 shadow-[0_0_24px_2px_rgba(255,215,0,0.25)] relative rounded-xl';
                        style = { boxShadow: '0 0 24px 2px #ffd70055, 0 0 0 2px #ffd70044' };
                        icon = (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400/80 text-yellow-900 shadow-lg animate-bounce mr-2">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                            </svg>
                          </span>
                        );
                      } else if (row.rank === 1 && uniqueNonZeroRanks.length >= 2) {
                        colorClass = 'bg-gradient-to-r from-gray-300/20 to-gray-100/10 font-bold text-gray-200 shadow-[0_0_18px_2px_rgba(180,180,180,0.18)] relative rounded-xl';
                        style = { boxShadow: '0 0 18px 2px #b0b0b055, 0 0 0 2px #b0b0b044' };
                        icon = (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-300/80 text-gray-700 shadow-lg animate-bounce mr-2">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                            </svg>
                          </span>
                        );
                      } else if (row.rank === 2 && uniqueNonZeroRanks.length >= 3) {
                        colorClass = 'bg-gradient-to-r from-amber-700/20 to-amber-400/10 font-bold text-amber-300 shadow-[0_0_14px_2px_rgba(205,127,50,0.18)] relative rounded-xl';
                        style = { boxShadow: '0 0 14px 2px #cd7f3255, 0 0 0 2px #cd7f3244' };
                        icon = (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400/80 text-amber-900 shadow-lg animate-bounce mr-2">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                            </svg>
                          </span>
                        );
                      } else {
                        colorClass = 'hover:bg-red-900/10';
                      }
                    } else {
                      colorClass = 'hover:bg-red-900/10';
                    }
                    return (
                      <tr
                        key={row.team}
                        className={`transition-all ${colorClass} mb-2 flex items-center`}
                        style={style}
                      >
                        <td className="py-2 pl-2 flex items-center gap-2 w-3/4">
                          {icon}
                          {row.team}
                        </td>
                        <td className="py-2 pr-2 text-right w-1/4">{row.points}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button
              className="mt-2 w-full py-2 rounded-lg bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-yellow-400 hover:to-yellow-500 hover:text-red-900 text-white font-stranger text-base tracking-wide shadow-md transition-all duration-200 border border-red-800 hover:border-yellow-400"
              style={{ maxWidth: '260px', margin: '0 auto', display: 'block' }}
              onClick={() => window.open('/leaderboard', '_blank')}
            >
              View Full Leaderboard
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { Link } from 'react-router-dom';

import vecnaImg from '../assets/images/homepage/vecna.png';
import henryImg from '../assets/images/homepage/henry001-removebg.png';
import willImg from '../assets/images/homepage/will.png';
import strangerThingsBg from '../assets/images/strngrthings bg.png';


function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { total, days, hours, minutes, seconds };
}

export default function HeroSection({ startAnimation }) {
  // Set your event date here
  const eventDate = '2026-01-31T09:00:00';
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(eventDate));
  const [spotlightAngle, setSpotlightAngle] = useState(0);
  const spotlightRef = useRef(null);
  const shouldStopRef = useRef(false);
  const canvasRef = useRef(null);
  const [animationActive, setAnimationActive] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState('main');
  const [autoCycle, setAutoCycle] = useState(true);
  const characterOrder = ['vecna', 'main', 'henry'];
  const cycleIndex = useRef(0);

  // Auto-cycle images every 1.5s
  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      cycleIndex.current = (cycleIndex.current + 1) % characterOrder.length;
      setActiveCharacter(characterOrder[cycleIndex.current]);
    }, 1500);
    return () => clearInterval(interval);
  }, [autoCycle]);

  // Pause auto-cycle on mouse move, resume after 4s idle
  useEffect(() => {
    let resumeTimeout;
    const handleMouseMove = (e) => {
      const width = window.innerWidth;
      const x = e.clientX;
      setAutoCycle(false);
      if (x < width / 3) {
        setActiveCharacter('vecna');
      } else if (x > (width * 2) / 3) {
        setActiveCharacter('henry');
      } else {
        setActiveCharacter('main');
      }
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => setAutoCycle(true), 4000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(resumeTimeout);
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      // Defer setState to avoid cascading renders warning
      Promise.resolve().then(() => setAnimationActive(true));
      shouldStopRef.current = false;
      const timer = setTimeout(() => {
        shouldStopRef.current = true;
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(eventDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  // Spotlight pendulum animation
  useEffect(() => {
    if (!animationActive) return;
    let startTime;
    let raf;
    const animate = (timestamp) => {
      if (!animationActive) return;
      if (startTime === undefined) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds

      // Responsive amplitude: higher for larger screens
      let amplitude = 35;
      if (window.innerWidth >= 1024) amplitude = 55; // desktop/laptop
      else if (window.innerWidth >= 768) amplitude = 50; // tablet

      // Speed factor calculation to match original ~60fps speed:
      // Original: 0.8 (freq) * frame * 0.025
      // Rate per frame = 0.8 * 0.025 = 0.02
      // Rate per second (60fps) = 0.02 * 60 = 1.2
      const speed = 1.2;

      const sineVal = Math.sin(speed * elapsed);
      const angle = amplitude * sineVal;
      setSpotlightAngle(angle);
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `rotate(${angle}deg)`;
        spotlightRef.current.style.transformOrigin = '50% 0%';
      }

      if (shouldStopRef.current && Math.abs(sineVal) < 0.05) {
        setAnimationActive(false);
        setSpotlightAngle(0);
        if (spotlightRef.current) spotlightRef.current.style.transform = `rotate(0deg)`;
        return;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [animationActive]);


  // Canvas spotlight overlay logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function drawSpotlight(angle) {
      ctx.clearRect(0, 0, width, height);
      // Draw fully opaque dark overlay
      ctx.fillStyle = 'rgba(10,10,10,1)';
      ctx.fillRect(0, 0, width, height);
      // Spotlight cone params
      const cx = width / 2;
      const cy = 0;
      const coneWidth = 40; // px at top
      const coneSpread = 100; // px at bottom (narrower to match SVG beam)
      const coneHeight = height;
      // Points before rotation
      const points = [
        [cx - coneWidth / 2, cy],
        [cx + coneWidth / 2, cy],
        [cx + coneSpread / 2, coneHeight],
        [cx - coneSpread / 2, coneHeight],
      ];
      // Rotate points around (cx, cy)
      const rad = (Math.PI / 180) * angle;
      const rotate = ([x, y]) => [
        Math.cos(rad) * (x - cx) - Math.sin(rad) * (y - cy) + cx,
        Math.sin(rad) * (x - cx) + Math.cos(rad) * (y - cy) + cy,
      ];
      const rotated = points.map(rotate);
      // Clear cone area (make transparent)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rotated[0][0], rotated[0][1]);
      for (let i = 1; i < rotated.length; i++) ctx.lineTo(rotated[i][0], rotated[i][1]);
      ctx.closePath();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.restore();
    }

    function animateCanvas() {
      if (!animationActive) {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      drawSpotlight(spotlightAngle);
      animationFrameId = requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
    return () => cancelAnimationFrame(animationFrameId);
  }, [spotlightAngle, animationActive]);

  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('${strangerThingsBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Spotlight beam: topmost layer, always visible */}
      {/* Spotlight beam: topmost layer, always visible */}
      <div
        className={`absolute left-1/2 top-0 z-40 pointer-events-none transition-opacity duration-1000 ${animationActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateX(-50%)', width: '100vw', height: '100vh' }}
      >
        <svg
          ref={spotlightRef}
          width="100vw"
          height="100vh"
          viewBox="0 0 1000 1800"
          style={{ width: '100vw', height: '100vh', display: 'block' }}
        >
          <defs>
            <linearGradient id="hero-spotlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#fff" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points="480,0 520,0 700,1800 300,1800"
            fill="url(#hero-spotlight)"
            style={{ filter: 'blur(4px)' }}
          />
        </svg>
      </div>
      {/* Masked hero content: only visible under spotlight */}
      {/* Hero content (z-10) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center mt-0 -translate-y-8 md:-translate-y-12 lg:-translate-y-16">
            <span className="block text-center text-base md:text-lg lg:text-xl font-typewriter text-gray-300 mb-2 tracking-widest uppercase" style={{ letterSpacing: '0.18em' }}>
              The World Upside Down
            </span>
            <h1
              className="font-stranger text-5xl md:text-7xl lg:text-8xl mt-2 mb-2 text-center drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--stranger-red)',
                textStroke: '2px var(--stranger-red)',
                fontWeight: 900,
              }}
            >
              REVELATIONS
            </h1>
            <div className="flex flex-row items-center justify-center gap-4 text-white font-typewriter text-xl md:text-2xl mb-4">
              <span className="">{String(timeLeft.days).padStart(2, '0')}</span>
              <span>:</span>
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-8 text-s text-gray-400 font-typewriter mb-2">
              <span>DAYS</span>
              <span>HRS</span>
              <span>MIN</span>
              <span>SEC</span>
            </div>
          </div>
          {/* Hero Main Image at Bottom Center */}
          {/* Hero Main Image at Bottom Center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-30">
            <div className="grid place-items-end relative">
              {/* Vecna */}
              <img
                src={vecnaImg}
                alt="Vecna"
                className={`col-start-1 row-start-1 max-w-[140px] w-auto h-[180px] md:h-[220px] lg:h-[260px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'vecna' ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
              />
              {/* Will */}
              <img
                src={willImg}
                alt="Will"
                className={`col-start-1 row-start-1 max-w-[140px] w-auto h-[180px] md:h-[220px] lg:h-[260px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'main' ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
              />
              {/* Henry */}
              <img
                src={henryImg}
                alt="Henry"
                className={`col-start-1 row-start-1 max-w-[140px] w-auto h-[180px] md:h-[220px] lg:h-[260px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'henry' ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Canvas overlay for spotlight effect (z-20) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${animationActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
      />

      {/* Netflix-like video play button bottom left */}
      <div className="absolute bottom-6 left-6 z-40 flex flex-col items-start gap-1 select-none">
        <button
          className="flex items-center gap-1 p-0 bg-transparent border-none shadow-none text-white font-semibold text-sm md:text-base hover:bg-transparent focus:outline-none"
          style={{ boxShadow: 'none', background: 'none', border: 'none' }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-red-600 text-red-600 mr-1 md:mr-2 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </span>
          <span className="text-red-600 font-typewriter">Watch Now</span>
        </button>
        <span className="text-white text-xs font-typewriter mt-1 mx-auto tracking-wide opacity-80 self-center">2026 Theme Reveal</span>
      </div>

      {/* leaderboard button bottom right */}
      <div className="absolute bottom-6 right-6 z-40 flex flex-col items-start gap-1 select-none">
        <Link
          to="/leaderboard"
          className="flex items-center gap-1 p-0 bg-transparent border-none shadow-none text-white font-semibold text-sm md:text-base hover:bg-transparent focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-red-600 text-red-600 mr-1 md:mr-2 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
            </svg>
          </span>
          <span className="text-red-600 font-typewriter">Leaderboard</span>
        </Link>
        <span className="text-white text-xs font-typewriter mt-1 mx-auto tracking-wide opacity-80 self-center">Check Team Rankings</span>
      </div>

      {/* Leaderboard Popup */}
      <LeaderboardPopup open={showLeaderboard} onClose={() => setShowLeaderboard(false)} />
    </section>
  );
}
