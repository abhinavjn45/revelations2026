import React from 'react';
import styles from '../styles/animations.module.css';
import { Navbar } from './Navbar';

export function MainContent({ isVisible }) {
  return (
    <div 
      className={`w-full bg-[#0a0a0a] ${isVisible ? styles.fadeIn : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none'
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full pt-32 px-4">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-stranger text-5xl md:text-7xl lg:text-8xl text-red-500 mb-6 animate-pulse">
              REVELATIONS 2026
            </h2>
            <p className="font-typewriter text-gray-400 text-base md:text-lg mb-8 max-w-3xl mx-auto">
              Welcome to the Upside Down. Where reality bends, dimensions collide, and the extraordinary becomes possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Feature 1 */}
              <div className="bg-gradient-to-b from-[#1a0505] to-[#0a0a0a] p-6 rounded-lg border border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="#b91c1c" strokeWidth="2" />
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#ff3333" strokeWidth="1.5" opacity="0.6" />
                    <path d="M 30 15 L 27 25 L 33 25 L 28 40" stroke="#ff3333" strokeWidth="2.5" fill="none" />
                  </svg>
                </div>
                <h3 className="font-stranger text-xl text-red-400 mb-3">EVENTS</h3>
                <p className="font-typewriter text-sm text-gray-500">
                  Thrilling competitions, mind-bending challenges, and unforgettable experiences await.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-b from-[#1a0505] to-[#0a0a0a] p-6 rounded-lg border border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                    <rect x="10" y="25" width="40" height="25" fill="none" stroke="#7f1d1d" strokeWidth="2" />
                    <path d="M 10 25 L 30 10 L 50 25" fill="none" stroke="#7f1d1d" strokeWidth="2" />
                    <circle cx="30" cy="15" r="3" fill="#b91c1c" />
                  </svg>
                </div>
                <h3 className="font-stranger text-xl text-red-400 mb-3">WORKSHOPS</h3>
                <p className="font-typewriter text-sm text-gray-500">
                  Learn from industry experts and expand your knowledge in cutting-edge technologies.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-b from-[#1a0505] to-[#0a0a0a] p-6 rounded-lg border border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="#b91c1c" strokeWidth="2" />
                    <path d="M 20 25 L 30 35 L 40 20" stroke="#ff3333" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-stranger text-xl text-red-400 mb-3">NETWORKING</h3>
                <p className="font-typewriter text-sm text-gray-500">
                  Connect with like-minded individuals and build lasting relationships in the community.
                </p>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="mt-12 inline-block">
              <div className="bg-red-900/20 border border-red-600/50 rounded-full px-6 py-3">
                <p className="font-stranger text-red-400 text-sm tracking-widest">
                  🎭 FULL SCHEDULE COMING SOON
                </p>
              </div>
            </div>

            {/* Replay Button */}
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 font-stranger text-base px-6 py-2 bg-gradient-to-r from-red-700 to-red-600 text-white rounded border border-red-500 hover:from-red-600 hover:to-red-500 transition-all duration-300 hover:scale-105"
            >
              REPLAY PRELOADER
            </button>
          </div>
        </section>

        {/* Events Section Placeholder */}
        <section id="events" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-stranger text-5xl md:text-7xl text-red-500 mb-4">EVENTS</h2>
            <p className="font-typewriter text-gray-400 text-sm">Event details will be revealed soon...</p>
          </div>
        </section>

        {/* About Section Placeholder */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-stranger text-5xl md:text-7xl text-red-500 mb-6">ABOUT</h2>
            <p className="font-typewriter text-gray-400 text-base mb-4">
              Revelations 2026 is an inter-college cultural and technical fest that brings together the brightest minds and creative talents.
            </p>
            <p className="font-typewriter text-gray-500 text-sm">
              Experience a blend of technology, art, culture, and innovation in an atmosphere inspired by the mysterious Upside Down.
            </p>
          </div>
        </section>

        {/* Schedule Section Placeholder */}
        <section id="schedule" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-stranger text-5xl md:text-7xl text-red-500 mb-4">SCHEDULE</h2>
            <p className="font-typewriter text-gray-400 text-sm">Detailed schedule coming soon...</p>
          </div>
        </section>

        {/* Gallery Section Placeholder */}
        <section id="gallery" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-stranger text-5xl md:text-7xl text-red-500 mb-4">GALLERY</h2>
            <p className="font-typewriter text-gray-400 text-sm">Gallery will be updated with event photos...</p>
          </div>
        </section>
      </div>
    </div>
  );
}
