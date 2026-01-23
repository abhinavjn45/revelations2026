import React from 'react';
import styles from '../styles/animations.module.css';

export function MainContent({ isVisible }) {
  return (
    <div 
      className={`w-full h-full flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a] ${
        isVisible ? styles.fadeIn : 'opacity-0'
      }`}
      style={{ 
        display: isVisible ? 'flex' : 'none',
        opacity: isVisible ? '1' : '0'
      }}
    >
      <div className="text-center px-4">
        <h2 className="font-stranger text-4xl md:text-6xl text-red-500 mb-4">
          WELCOME TO REVELATIONS 2026
        </h2>
        <p className="font-typewriter text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          You have successfully entered the Upside Down. The fest awaits...
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-8 font-stranger text-lg px-8 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded border border-red-500 hover:from-red-600 hover:to-red-500 transition-all duration-300"
        >
          REPLAY PRELOADER
        </button>
      </div>
    </div>
  );
}
