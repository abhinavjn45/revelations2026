import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import DecryptText from './DecryptText';

export default function AboutSection() {
  const containerRef = useRef(null);

  // -- 3D TILT LOGIC --
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Dynamic spotlight gradient that follows mouse
  const gradientX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPct);
    y.set(mouseYPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // -- SCROLL ANIMATIONS --
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);


  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-0 md:py-20 bg-[#050505] overflow-hidden perspective-1000"
    >

      {/* 1. ATMOSPHERIC FOG LAYERS */}
      <AtmosphereBackground />

      {/* 2. MAIN 3D TILT CARD */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: yParallax,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-5xl px-4 md:px-6 perspective-1000 group mx-auto"
      >

        {/* CARD CONTAINER */}
        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-red-900/30 p-6 md:p-16 rounded-sm shadow-[0_0_50px_rgba(220,38,38,0.1)] overflow-hidden">

          {/* MOUSE FOLLOW SPOTLIGHT */}
          <motion.div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light z-0"
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])}, rgba(220,38,38,0.4), transparent 40%)`
            }}
          />

          {/* VEIN GROWTH OVERLAY */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
            <VeinOverlay className="top-0 left-0 w-32 h-32 md:w-64 md:h-64 -translate-x-1/3 -translate-y-1/3" rotate={180} delay={0.2} />
            <VeinOverlay className="bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 translate-x-1/3 translate-y-1/3" delay={0.4} />
          </div>

          {/* CONTENT INSIDE CARD */}
          <div className="relative z-10 flex flex-col items-center text-center transform translate-z-10">

            {/* GLITCH TITLE */}
            <motion.div
              className="mb-6 md:mb-10 relative"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-stranger text-3xl md:text-7xl text-red-600 tracking-widest drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] relative z-10">
                <DecryptText text="ABOUT REVELATIONS" className="" />
              </h2>
              {/* Glitch clone behind */}
              <h2 className="font-stranger text-3xl md:text-7xl text-cyan-600/50 tracking-widest absolute top-0 left-0 -translate-x-1 translate-y-0.5 mix-blend-screen animate-pulse z-0 select-none">
                ABOUT REVELATIONS
              </h2>
            </motion.div>

            {/* TEXT BODY */}
            <div className="space-y-6 md:space-y-8 font-typewriter text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-justify md:text-center"
              >
                <span className="text-red-500 font-bold text-xl">REVELATIONS 2026</span> is the annual flagship event of the <span className="text-red-400 border-b border-red-800 pb-0.5">Department of Computer Science</span>. A classified gathering exclusively for Post Graduates, designed to weaponize talent in both <span className="text-white italic">technical warfare</span> and <span className="text-white italic">creative arts</span>.
              </motion.p>

              <motion.div
                className="h-px w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto opacity-50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-justify md:text-center text-sm md:text-xl"
              >
                This year, we open the gate to the <strong className="text-red-500 text-xl md:text-2xl animate-pulse">UPSIDE DOWN</strong> inspired by the Stranger Things Netflix Series. The boundary between reality and code is thinning. We invite you to step through the breach—where innovation thrives in the shadow of the unknown.
              </motion.p>

            </div>

            {/* INTERACTIVE CALL TO ACTION OR DECORATION */}
            <motion.div
              className="mt-8 md:mt-12 opacity-60 hover:opacity-100 transition-opacity cursor-none"
              whileHover={{ scale: 1.1 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 animate-bounce">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
