import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/TimerZeroAnimation.css';

/**
 * Epic Stranger Things "Upside Down Portal" animation
 * Triggers when the countdown timer reaches zero
 * 
 * Features:
 * - Intense light flicker
 * - Screen shake effect
 * - Lightning bolts
 * - Particle explosion
 * - Animated cracks spreading
 * - Glitch text effects
 * - Portal rift with tentacles
 */
export default function TimerZeroAnimation({ trigger, onComplete }) {
    const [phase, setPhase] = useState('idle'); // idle, flicker, portal, reveal, fadeout
    const [particles, setParticles] = useState([]);
    const [lightningBolts, setLightningBolts] = useState([]);
    const [cracks, setCracks] = useState([]);

    // Generate random particles
    const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 80; i++) {
            const angle = (Math.PI * 2 * i) / 80;
            const velocity = 100 + Math.random() * 300;
            newParticles.push({
                id: i,
                x: Math.cos(angle) * velocity,
                y: Math.sin(angle) * velocity,
                size: 2 + Math.random() * 8,
                delay: Math.random() * 0.5,
                duration: 1.5 + Math.random() * 2,
                color: Math.random() > 0.3 ? '#dc2626' : (Math.random() > 0.5 ? '#ff3333' : '#ff6b6b')
            });
        }
        setParticles(newParticles);
    };

    // Generate lightning bolts
    const generateLightning = () => {
        const bolts = [];
        for (let i = 0; i < 16; i++) {
            const angle = (Math.PI * 2 * i) / 16;
            bolts.push({
                id: i,
                angle: angle * (180 / Math.PI),
                length: 200 + Math.random() * 200,
                delay: Math.random() * 0.3,
                width: 2 + Math.random() * 4
            });
        }
        setLightningBolts(bolts);
    };

    // Generate animated cracks
    const generateCracks = () => {
        const newCracks = [];
        const crackCount = 12;
        for (let i = 0; i < crackCount; i++) {
            const angle = (Math.PI * 2 * i) / crackCount + (Math.random() - 0.5) * 0.3;
            const length = 150 + Math.random() * 250;
            newCracks.push({
                id: i,
                angle: angle * (180 / Math.PI),
                length,
                delay: i * 0.08,
                branches: Math.floor(Math.random() * 3) + 1
            });
        }
        setCracks(newCracks);
    };

    // Memoize spores for consistent rendering
    const spores = useMemo(() => {
        return [...Array(40)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 2 + Math.random() * 5,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 3
        }));
    }, []);

    useEffect(() => {
        if (!trigger) return;

        // Phase 1: Initial flicker (lights going crazy)
        setPhase('flicker');
        generateParticles();
        generateLightning();
        generateCracks();

        // Phase 2: Portal opens with cracks
        const portalTimer = setTimeout(() => {
            setPhase('portal');
        }, 1500);

        // Phase 3: Reveal message
        const revealTimer = setTimeout(() => {
            setPhase('reveal');
        }, 4000);

        // Phase 4: Fade out
        const fadeTimer = setTimeout(() => {
            setPhase('fadeout');
        }, 9000);

        // Complete callback
        const completeTimer = setTimeout(() => {
            setPhase('idle');
            onComplete?.();
        }, 10500);

        return () => {
            clearTimeout(portalTimer);
            clearTimeout(revealTimer);
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [trigger, onComplete]);

    if (phase === 'idle') return null;

    return (
        <AnimatePresence>
            <motion.div
                className={`timer-zero-overlay ${phase === 'portal' ? 'shake-active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'fadeout' ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: phase === 'fadeout' ? 1.5 : 0.3 }}
            >
                {/* Screen shake container */}
                <div className={`shake-wrapper ${phase === 'portal' ? 'screen-shaking' : ''}`}>

                    {/* Scanlines overlay */}
                    <div className="scanlines-overlay" />

                    {/* Flicker effect - lights going crazy */}
                    {(phase === 'flicker' || phase === 'portal') && (
                        <div className="flicker-layer" />
                    )}

                    {/* Extra flash burst on portal */}
                    {phase === 'portal' && (
                        <motion.div
                            className="flash-burst"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0, 0.8, 0, 0.5, 0] }}
                            transition={{ duration: 0.8, times: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1] }}
                        />
                    )}

                    {/* Vignette */}
                    <div className="vignette-overlay" />

                    {/* Animated Cracks spreading from center */}
                    {(phase === 'portal' || phase === 'reveal') && (
                        <div className="cracks-container">
                            {cracks.map((crack) => (
                                <motion.div
                                    key={crack.id}
                                    className="crack-line"
                                    style={{
                                        transform: `rotate(${crack.angle}deg)`,
                                    }}
                                    initial={{ scaleY: 0, opacity: 0 }}
                                    animate={{
                                        scaleY: 1,
                                        opacity: [0, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: crack.delay,
                                        ease: 'easeOut'
                                    }}
                                >
                                    <div
                                        className="crack-main"
                                        style={{ height: `${crack.length}px` }}
                                    />
                                    {/* Crack branches */}
                                    {[...Array(crack.branches)].map((_, bi) => (
                                        <motion.div
                                            key={bi}
                                            className="crack-branch"
                                            style={{
                                                top: `${30 + bi * 25}%`,
                                                transform: `rotate(${bi % 2 === 0 ? 30 : -30}deg)`,
                                            }}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.3, delay: crack.delay + 0.3 + bi * 0.1 }}
                                        />
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Lightning bolts from center */}
                    {(phase === 'portal' || phase === 'reveal') && (
                        <div className="lightning-container">
                            {lightningBolts.map((bolt) => (
                                <motion.div
                                    key={bolt.id}
                                    className="lightning-bolt"
                                    style={{
                                        transform: `rotate(${bolt.angle}deg)`,
                                        height: `${bolt.length}px`,
                                        width: `${bolt.width}px`,
                                    }}
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{
                                        opacity: [0, 1, 0.3, 1, 0.5, 1, 0],
                                        scaleY: [0, 1, 1, 1, 1, 1, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: bolt.delay,
                                        repeat: Infinity,
                                        repeatDelay: 0.3
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Particle explosion */}
                    {(phase === 'portal' || phase === 'reveal') && (
                        <div className="particle-container">
                            {particles.map((particle) => (
                                <motion.div
                                    key={particle.id}
                                    className="explosion-particle"
                                    style={{
                                        width: particle.size,
                                        height: particle.size,
                                        backgroundColor: particle.color,
                                    }}
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        scale: 0
                                    }}
                                    animate={{
                                        x: particle.x,
                                        y: particle.y,
                                        opacity: [1, 1, 0.5, 0],
                                        scale: [0, 2, 1, 0]
                                    }}
                                    transition={{
                                        duration: particle.duration,
                                        delay: particle.delay,
                                        ease: 'easeOut'
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Central Portal / Rift */}
                    {(phase === 'portal' || phase === 'reveal') && (
                        <div className="portal-wrapper">
                            {/* Outer glow rings - more of them */}
                            {[1, 2, 3, 4, 5].map((ring) => (
                                <motion.div
                                    key={ring}
                                    className={`portal-ring portal-ring-${ring}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 2 + ring * 0.5, 2.5 + ring * 0.5],
                                        opacity: [0, 0.8 - ring * 0.1, 0]
                                    }}
                                    transition={{ duration: 2, delay: ring * 0.15, ease: 'easeOut' }}
                                />
                            ))}

                            {/* The main portal rift */}
                            <motion.div
                                className="portal-rift"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{
                                    scale: phase === 'reveal' ? 1.3 : 1,
                                    rotate: 360,
                                }}
                                transition={{
                                    scale: { duration: 1, ease: 'easeOut' },
                                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' }
                                }}
                            >
                                <div className="rift-inner">
                                    <div className="rift-core" />
                                    <div className="rift-glow" />
                                    {[1, 2, 3, 4, 5, 6].map((t) => (
                                        <div key={t} className={`rift-tentacle rift-tentacle-${t}`} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* The reveal message with GLITCH effect */}
                    {phase === 'reveal' && (
                        <motion.div
                            className="reveal-container"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.68, -0.55, 0.265, 1.55]
                            }}
                        >
                            {/* Glitch title */}
                            <motion.div
                                className="glitch-wrapper"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h1 className="reveal-title glitch-text" data-text="THE GATE">
                                    THE GATE
                                </h1>
                            </motion.div>

                            {/* Glitch subtitle */}
                            <motion.div
                                className="glitch-wrapper"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <h2 className="reveal-subtitle glitch-text" data-text="HAS OPENED">
                                    HAS OPENED
                                </h2>
                            </motion.div>

                            <motion.div
                                className="reveal-line"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />

                            <motion.p
                                className="reveal-tagline glitch-text-subtle"
                                data-text="REVELATIONS 2026 BEGINS NOW"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                REVELATIONS 2026 BEGINS NOW
                            </motion.p>
                        </motion.div>
                    )}

                    {/* Upside Down floating particles (ash/spores) - More of them */}
                    <div className="upside-down-spores">
                        {spores.map((spore) => (
                            <motion.div
                                key={spore.id}
                                className="spore"
                                style={{
                                    left: `${spore.left}%`,
                                    top: `${spore.top}%`,
                                    width: `${spore.size}px`,
                                    height: `${spore.size}px`,
                                }}
                                animate={{
                                    y: [0, -40, 0, 40, 0],
                                    x: [0, 15, -15, 10, 0],
                                    opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
                                }}
                                transition={{
                                    duration: spore.duration,
                                    repeat: Infinity,
                                    delay: spore.delay,
                                }}
                            />
                        ))}
                    </div>

                    {/* Falling ash/rain particles - MORE PROMINENT */}
                    <div className="falling-ash">
                        {/* Large ash particles */}
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={`large-${i}`}
                                className="ash-particle ash-large"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${4 + Math.random() * 3}s`,
                                }}
                            />
                        ))}
                        {/* Medium ash particles */}
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={`medium-${i}`}
                                className="ash-particle ash-medium"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    animationDuration: `${5 + Math.random() * 4}s`,
                                }}
                            />
                        ))}
                        {/* Small ash particles */}
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={`small-${i}`}
                                className="ash-particle ash-small"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${6 + Math.random() * 5}s`,
                                }}
                            />
                        ))}
                        {/* Glowing ember particles */}
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={`ember-${i}`}
                                className="ash-particle ash-ember"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`,
                                }}
                            />
                        ))}
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    );
}
