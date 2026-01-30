import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import revelationsLogo from '../assets/images/revelations-logo.svg';
import revelationsLogoPng from '../assets/images/revelations-logo.png';
// import christLogo from '../assets/images/christ-logo.svg';
import christLogoPng from '../assets/images/christ-logo.png';
// import christSmallLogo from '../assets/images/christ-small-logo.svg';
import christSmallLogoPng from '../assets/images/christ-small-logo.png';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const torchRef = useRef(null);
  // Torch pendulum animation for spotlight
  useEffect(() => {
    let frame = 0;
    let raf;
    const animate = () => {
      const amplitude = 25; // degrees
      const frequency = 0.1;
      const angle = amplitude * Math.sin(frequency * frame * 0.03);
      if (torchRef.current) {
        torchRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame++;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-4 py-2 md:py-3 transition-all duration-400 bg-black shadow-[0_4px_20px_rgba(220,38,38,0.1)]"
    >
      <div className="max-w-full mx-auto flex items-center justify-between relative" style={{ minHeight: '5rem' }}>
        {/* Left: Christ University Logo */}
        <div className="flex items-center h-full z-10" style={{ minHeight: 'inherit' }}>
          <a
            href="https://christuniversity.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
            style={{ height: '100%' }}
          >
            <picture>
              <source srcSet={christSmallLogoPng} media="(max-width: 767px)" />
              <img
                src={christLogoPng}
                alt="Christ University Logo"
                className="w-12 h-5 md:w-36 md:h-12 lg:w-40 lg:h-12 xl:w-56 xl:h-16 py-1"
                style={{ maxWidth: 'none', height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </picture>
          </a>
        </div>

        {/* Center: Revelations Logo (Coming out of navbar) */}
        <a
          href={typeof window !== 'undefined' ? window.location.origin : '/'}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center hover:opacity-90 transition-opacity duration-300"
        >
          <img
            src={revelationsLogoPng}
            alt="Revelations Logo"
            className="logo-flicker drop-shadow-[0_0_30px_rgba(185,28,28,0.8)] py-1"
            style={{ width: '40vw', minWidth: '140px', maxWidth: '260px', height: 'auto' }}
          />
        </a>

        {/* Right: Inline Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 z-30 mr-2 ml-auto" style={{ height: '100%' }}>
          {[ 
            { name: 'Events', path: '/events' },
            { name: 'About', path: '/about' },
            { name: 'Schedule', path: '/schedule' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-stranger text-base lg:text-lg text-gray-300 hover:text-red-500 transition-colors tracking-wide drop-shadow-md whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Toggle Button (Mobile Only) */}
        <div className="lg:hidden flex items-center h-full z-10" style={{ minHeight: 'inherit' }}>
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className={`transition-all duration-300 ${isMenuOpen ? 'portal-active' : ''}`} style={{ display: 'block' }}>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#b91c1c" strokeWidth="2" opacity="0.6" />
              <line
                x1="12" y1="15" x2="28" y2="15"
                stroke="#ff3333" strokeWidth="2.5" strokeLinecap="round"
                className={`transition-all duration-300 origin-center ${isMenuOpen ? 'translate-y-[5px] rotate-45' : ''}`}
              />
              <line
                x1="12" y1="20" x2="28" y2="20"
                stroke="#ff3333" strokeWidth="2.5" strokeLinecap="round"
                className={`transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <line
                x1="12" y1="25" x2="28" y2="25"
                stroke="#ff3333" strokeWidth="2.5" strokeLinecap="round"
                className={`transition-all duration-300 origin-center ${isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Dropdown (All Devices) */}
      {isMenuOpen && (
        <div className="mt-6 px-4 py-6 bg-gradient-to-b from-[#1a0505] to-[#0a0a0a] border-t border-red-900/30 rounded-b-lg shadow-[0_10px_30px_rgba(185,28,28,0.4)] poster-unroll">
          {/* Decorative top border */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <svg width="20" height="20" viewBox="0 0 20 20" className="mx-3">
              <circle cx="10" cy="10" r="8" fill="none" stroke="#b91c1c" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3" fill="#ff3333" opacity="0.5" />
            </svg>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-5">
            <Link
              to="/"
              onClick={e => { closeMenu(); if (location.pathname === '/') window.location.reload(); }}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 border-b border-red-900/20 hover:border-red-600/50 hover:pl-2"
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={closeMenu}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 border-b border-red-900/20 hover:border-red-600/50 hover:pl-2"
            >
              Events
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 border-b border-red-900/20 hover:border-red-600/50 hover:pl-2"
            >
              Our Team
            </Link>
            <Link
              to="/schedule"
              onClick={closeMenu}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 border-b border-red-900/20 hover:border-red-600/50 hover:pl-2"
            >
              Schedule
            </Link>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 border-b border-red-900/20 hover:border-red-600/50 hover:pl-2"
            >
              Gallery
            </Link>
            <Link
              to="/leaderboard"
              onClick={closeMenu}
              className="menu-item font-stranger text-2xl text-gray-300 hover:text-red-400 cursor-pointer transition-all py-2 hover:pl-2"
            >
              Leaderboard
            </Link>
          </div>

          {/* Decorative bottom element */}
          <div className="mt-6 flex items-center justify-center space-x-2 opacity-40">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
            <span className="font-typewriter text-[10px] text-gray-700">UPSIDE DOWN PORTAL</span>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      )}
    </nav>
  );
}
