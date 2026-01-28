import React from 'react';
import { motion } from 'framer-motion';
import AtmosphereBackground from './AtmosphereBackground';
import DecryptText from './DecryptText';
import VeinOverlay from './VeinOverlay';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-red-900 via-black to-gray-900 py-16 px-4 flex flex-col items-center justify-center text-center mt-0 overflow-hidden">
      {/* Animated Fog & Glow */}
      <AtmosphereBackground />

      {/* Vein Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <VeinOverlay className="top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 opacity-60" delay={0} rotate={180} />
        <VeinOverlay className="bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 opacity-60" delay={0.5} rotate={0} />
      </div>

      {/* Extra Red Pulse for CTA */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Red Glow Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-4 border-red-800/40"
          initial={{ boxShadow: '0 0 60px 10px #7f1d1d55' }}
          animate={{
            boxShadow: [
              '0 0 60px 10px #7f1d1d55',
              '0 0 80px 20px #dc2626aa',
              '0 0 60px 10px #7f1d1d55'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ zIndex: 1 }}
        />
      </div>

      <motion.div
        className="relative max-w-2xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="font-stranger text-3xl md:text-5xl text-red-500 mb-4 drop-shadow-lg"
          variants={itemVariants}
        >
          <DecryptText text="READY TO JOIN THE ADVENTURE?" />
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 font-typewriter"
          variants={itemVariants}
        >
          Have questions, want to participate, or need more info? Reach out to our core committee members below or click the button to get in touch!
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
          variants={itemVariants}
        >
          {/* Contact 1 */}
          <motion.div
            className="bg-black/60 border border-red-700 rounded-lg p-6 flex flex-col items-center shadow-lg w-full md:w-80 min-w-[220px]"
            whileHover={{ scale: 1.05, borderColor: "#ff0000", boxShadow: "0 0 20px rgba(255,0,0,0.4)" }}
          >
            <span className="font-stranger text-2xl text-red-400 mb-1">Bhavya Dhanuka</span>
            <span className="font-typewriter text-gray-300 mb-1">3 MCA B</span>
            <a href="tel:+919681857475" className="font-typewriter text-red-300 hover:text-white">+91 96818 57475</a>
          </motion.div>
          {/* Contact 2 */}
          <motion.div
            className="bg-black/60 border border-red-700 rounded-lg p-6 flex flex-col items-center shadow-lg w-full md:w-80 min-w-[220px]"
            whileHover={{ scale: 1.05, borderColor: "#ff0000", boxShadow: "0 0 20px rgba(255,0,0,0.4)" }}
          >
            <span className="font-stranger text-2xl text-red-400 mb-1">Vanshika Srinivas</span>
            <span className="font-typewriter text-gray-300 mb-1">3 MSC AIML</span>
            <a href="tel:+918904762542" className="font-typewriter text-red-300 hover:text-white">+91 89047 62542</a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-red-700 text-white font-typewriter text-lg rounded-none shadow-lg border-2 border-red-600 hover:bg-red-900 transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 255, 255)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Events
        </motion.a>
      </motion.div>
    </section>
  );
}
