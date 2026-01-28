import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Decrypting Text Effect (copied from AboutSection)
const DecryptText = ({ text, className }) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  const [displayText, setDisplayText] = useState(() =>
    text.split('').map(() => chars[Math.floor(Math.random() * chars.length)])
  );

  useEffect(() => {
    let interval;
    let iteration = 0;

    const animate = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(prev =>
          text.split('').map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2; // Speed up slightly
      }, 30);
    };

    animate();

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayText.join('')}
    </span>
  );
};

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-red-900 via-black to-gray-900 py-16 px-4 flex flex-col items-center justify-center text-center mt-0 overflow-hidden">
      {/* Animated Fog & Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Red Glow Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-red-800/40"
          initial={{ boxShadow: '0 0 60px 10px #7f1d1d55' }}
          animate={{ boxShadow: [
            '0 0 60px 10px #7f1d1d55',
            '0 0 80px 20px #dc2626aa',
            '0 0 60px 10px #7f1d1d55'
          ] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ zIndex: 1 }}
        />
        {/* Fog Layer */}
        <motion.div
          className="absolute -top-1/4 left-0 w-full h-1/2 bg-gradient-to-b from-red-900/30 via-transparent to-transparent blur-2xl opacity-60"
          animate={{ x: [0, 40, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        {/* Floating Spores/Particles */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500 blur-[1.5px] opacity-40"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -120 + 'px'],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut'
            }}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              zIndex: 2
            }}
          />
        ))}
      </div>
      <div className="relative max-w-2xl mx-auto z-10">
        <h2 className="font-stranger text-3xl md:text-5xl text-red-500 mb-4 drop-shadow-lg">
          <DecryptText text="READY TO JOIN THE ADVENTURE?" />
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-typewriter">
          Have questions, want to participate, or need more info? Reach out to our core committee members below or click the button to get in touch!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Contact 1 */}
            <div className="bg-black/60 border border-red-700 rounded-lg p-6 flex flex-col items-center shadow-lg w-full md:w-80 min-w-[220px]">
              <span className="font-stranger text-2xl text-red-400 mb-1">Bhavya Dhanuka</span>
              <span className="font-typewriter text-gray-300 mb-1">3 MCA B</span>
              <a href="tel:+919681857475" className="font-typewriter text-red-300 hover:text-white">+91 96818 57475</a>
            </div>
          {/* Contact 2 */}
            <div className="bg-black/60 border border-red-700 rounded-lg p-6 flex flex-col items-center shadow-lg w-full md:w-80 min-w-[220px]">
              <span className="font-stranger text-2xl text-red-400 mb-1">Vanshika Srinivas</span>
              <span className="font-typewriter text-gray-300 mb-1">3 MSC AIML</span>
              <a href="tel:+918904762542" className="font-typewriter text-red-300 hover:text-white">+91 89047 62542</a>
            </div>
        </div>
        <a href="#contact" className="inline-block px-8 py-3 bg-red-700 text-white font-typewriter text-lg rounded-full shadow-lg border-2 border-red-600 hover:bg-red-900 transition-colors">
          Explore Events
        </a>
      </div>
    </section>
  );
}
