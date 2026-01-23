import React, { useEffect, useRef } from 'react';
import styles from '../styles/animations.module.css';

// Particle Effect Component
export function ParticleExplosion({ triggerExplosion, x, y, count = 30 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!triggerExplosion || !containerRef.current) return;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;

      const angle = (Math.PI * 2 * i) / count;
      const velocity = 50 + Math.random() * 50;
      const offsetX = Math.cos(angle) * velocity;
      const offsetY = Math.sin(angle) * velocity;

      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      particle.style.animationDuration = (1 + Math.random()) + 's';

      containerRef.current.appendChild(particle);

      setTimeout(() => particle.remove(), 2000);
    }
  }, [triggerExplosion, x, y, count]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />;
}

// Ripple Effect Component
export function RippleEffect({ triggerRipple }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!triggerRipple || !containerRef.current) return;

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        if (!containerRef.current) return;
        const ripple = document.createElement('div');
        ripple.className = styles.ripple;
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.marginLeft = '-100px';
        ripple.style.marginTop = '-100px';

        containerRef.current.appendChild(ripple);

        setTimeout(() => ripple.remove(), 1000);
      }, i * 100);
    }
  }, [triggerRipple]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
    />
  );
}

// Electricity Bolts Component
export function ElectricityBolts({ show, onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!show || !containerRef.current) return;

    const container = containerRef.current;
    
    for (let i = 0; i < 8; i++) {
      const bolt = document.createElement('div');
      bolt.className = styles.electricityBolt;

      const angle = (Math.PI * 2 * i) / 8;
      const distance = 80 + Math.random() * 40;
      const boltX = Math.cos(angle) * distance;
      const boltY = Math.sin(angle) * distance;
      const height = 40 + Math.random() * 60;

      bolt.style.left = `calc(50% + ${boltX}px)`;
      bolt.style.top = `calc(50% + ${boltY}px)`;
      bolt.style.height = height + 'px';
      bolt.style.transform = `rotate(${angle}rad)`;
      bolt.style.animationDelay = Math.random() * 0.1 + 's';

      container.appendChild(bolt);
    }

    const timer = setTimeout(() => {
      container.style.opacity = '0';
      setTimeout(() => {
        container.innerHTML = '';
        container.style.opacity = '1';
        onComplete?.();
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [show, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 opacity-0"
      style={{ transition: 'opacity 0.3s ease' }}
    />
  );
}

// Portal Background Component
export function PortalBg({ show }) {
  return (
    <div 
      className={`absolute opacity-0 ${show ? styles.portalEffect : ''}`}
      style={{ opacity: show ? '1' : '0' }}
    >
      <svg width="400" height="400" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="150" fill="none" stroke="#b91c1c" strokeWidth="3" opacity="0.3" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#ff3333" strokeWidth="2" opacity="0.5" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="#b91c1c" strokeWidth="3" opacity="0.4" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#ff3333" strokeWidth="2" opacity="0.6" />
      </svg>
    </div>
  );
}

// Flash Overlay Component
export function FlashOverlay({ trigger }) {
  return (
    <div 
      className={`absolute inset-0 bg-red-600 opacity-0 pointer-events-none ${trigger ? styles.flashOverlay : ''}`}
      style={{ 
        opacity: trigger ? '1' : '0',
        transition: trigger ? 'none' : 'opacity 0.3s ease-out'
      }}
    />
  );
}
