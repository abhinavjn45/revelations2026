import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import strangerThingsLogo from '../assets/images/Stranger-Things-Logo.png';

export default function ThemeSection() {
    const containerRef = useRef(null);

    // -- 3D TILT LOGIC (Reused for consistency) --
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

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

    const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 bg-[#050505] overflow-hidden perspective-1000"
        >
            {/* Background Elements */}
            <AtmosphereBackground />

            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
                <VeinOverlay className="top-10 left-10 w-48 h-48" rotate={45} delay={0.3} />
                <VeinOverlay className="bottom-10 right-10 w-64 h-64" rotate={-135} delay={0.5} />
            </div>

            <motion.div
                style={{ y: yParallax, rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative z-10 w-full max-w-5xl px-6 group"
            >
                <div className="relative bg-[#0a0a0a]/60 backdrop-blur-md border border-red-900/20 p-8 md:p-12 rounded-lg shadow-[0_0_40px_rgba(185,28,28,0.05)] overflow-hidden">

                    {/* Spotlight Effect */}
                    <motion.div
                        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light z-0"
                        style={{
                            background: useMotionTemplate`radial-gradient(500px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])}, rgba(220,38,38,0.3), transparent 50%)`
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* Header: Title and Logo */}
                        <div className="mb-8 flex flex-col items-center gap-1">
                            <span className="font-typewriter text-red-500 tracking-[0.2em] text-sm md:text-base uppercase border-b border-red-900/50 pb-2">
                                The Theme
                            </span>

                            <motion.div
                                className="relative w-48 md:w-72 lg:w-96"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={strangerThingsLogo}
                                    alt="Stranger Things"
                                    className="w-full h-auto drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                                {/* Glow effect behind logo */}
                                <div className="absolute inset-0 bg-red-600/20 blur-2xl -z-10 rounded-full scale-75 animate-pulse" />
                            </motion.div>
                        </div>

                        {/* Description Text */}
                        <div className="font-typewriter text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl text-justify md:text-center space-y-4">
                            <p>
                                In 2026, <span className="text-red-400 font-bold">Revelations</span> transcends traditional boundaries, merging the digital realm with the eerie, retro-futuristic world of the <span className="text-white">Upside Down</span>.
                            </p>
                            <p>
                                Inspired by the global phenomenon, this year's theme explores the hidden layers of technology—the dark data, the shadow networks, and the unseen forces that drive our digital existence. Just as the Upside Down mirrors our reality in a distorted echo, our technical challenges will push participants to look beneath the surface of code, uncovering secrets that lurk in the void.
                            </p>
                            <p className="text-red-500/80 italic pt-2">
                                "Friends don't lie, and neither does the code."
                            </p>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
