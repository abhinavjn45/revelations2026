
import React, { useEffect, useRef, useState } from 'react';
import vecnaImg from '../assets/images/homepage/vecna.png';
import henryImg from '../assets/images/homepage/henry001-removebg.png';
import willImg from '../assets/images/homepage/will.png';

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const width = window.innerWidth;
      const x = e.clientX;

      if (x < width / 3) {
        setActiveCharacter('vecna');
      } else if (x > (width * 2) / 3) {
        setActiveCharacter('henry');
      } else {
        setActiveCharacter('main');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      setAnimationActive(true);
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

  return (
    <section className="relative w-full h-screen min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
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
              className="font-stranger text-5xl md:text-7xl lg:text-8xl mt-2 mb-2 text-center"
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
            <div className="flex flex-row items-center justify-center gap-2 text-xs text-gray-400 font-typewriter mb-2">
              <span>DAYS</span>
              <span>HRS</span>
              <span>MIN</span>
              <span>SEC</span>
            </div>
          </div>
          {/* Hero Main Image at Bottom Center */}
          {/* Hero Main Image at Bottom Center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center z-30 pb-4">
            <div className="grid place-items-end relative">
              {/* Vecna */}
              <img
                src={vecnaImg}
                alt="Vecna"
                className={`col-start-1 row-start-1 max-w-[180px] w-auto h-[250px] md:h-[300px] lg:h-[350px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'vecna' ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
              />
              {/* Will */}
              <img
                src={willImg}
                alt="Will"
                className={`col-start-1 row-start-1 max-w-[180px] w-auto h-[250px] md:h-[300px] lg:h-[350px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'main' ? 'opacity-100' : 'opacity-0'}`}
                draggable="false"
              />
              {/* Henry */}
              <img
                src={henryImg}
                alt="Henry"
                className={`col-start-1 row-start-1 max-w-[180px] w-auto h-[250px] md:h-[300px] lg:h-[350px] object-contain select-none pointer-events-none transition-opacity duration-700 ease-in-out ${activeCharacter === 'henry' ? 'opacity-100' : 'opacity-0'}`}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
            </svg>
          </span>
          <span className="text-red-600 font-normal">Watch Now</span>
        </button>
        <span className="text-white text-xs font-normal mt-1 mx-auto tracking-wide opacity-80 self-center">2026 Theme Reveal</span>
      </div>

      {/* leaderboard button bottom right */}
      <div className="absolute bottom-6 right-6 z-40 flex flex-col items-start gap-1 select-none">
        <button
          className="flex items-center gap-1 p-0 bg-transparent border-none shadow-none text-white font-semibold text-sm md:text-base hover:bg-transparent focus:outline-none"
          style={{ boxShadow: 'none', background: 'none', border: 'none' }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-red-600 text-red-600 mr-1 md:mr-2 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
            </svg>
          </span>
          <span className="text-red-600 font-normal">Leaderboard</span>
        </button>
        <span className="text-white text-xs font-normal mt-1 mx-auto tracking-wide opacity-80 self-center">Check Team Rankings</span>
      </div>
    </section>
  );
}
