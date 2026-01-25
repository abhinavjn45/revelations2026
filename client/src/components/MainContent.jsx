
import React from 'react';
import styles from '../styles/animations.module.css';
import { Navbar } from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

export function MainContent({ isVisible }) {
  return (
    <div
      className={`w-full bg-[#0a0a0a] ${isVisible ? styles.fadeIn : 'opacity-0'}`}
      style={{
        display: isVisible ? 'block' : 'none',
      }}
    >
      <HeroSection startAnimation={isVisible} />
      <AboutSection />
      <Navbar />
    </div>
  );
}
