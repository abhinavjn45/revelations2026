import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/TimerZeroAnimation.css';

/**
 * Epic Stranger Things "Upside Down Portal" animation
 * Triggers when the countdown timer reaches zero
 */
export default function TimerZeroAnimation({ trigger, onComplete }) {
    const [phase, setPhase] = useState('idle'); // idle, flicker, portal, reveal, fadeout
    const [particles, setParticles] = useState([]);
    const [lightningBolts, setLightningBolts] = useState([]);
    const audioRef = useRef(null);

    // Generate random particles
    const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 60; i++) {
            const angle = (Math.PI * 2 * i) / 60;
            const velocity = 100 + Math.random() * 200;
            newParticles.push({
                id: i,
                x: Math.cos(angle) * velocity,
                y: Math.sin(angle) * velocity,
                size: 2 + Math.random() * 6,
                delay: Math.random() * 0.3,
                duration: 1 + Math.random() * 1.5,
                color: Math.random() > 0.5 ? '#dc2626' : '#ff3333'
            });
        }
        setParticles(newParticles);
    };

    // Generate lightning bolts
    const generateLightning = () => {
        const bolts = [];
        for (let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 * i) / 12;
            bolts.push({
                id: i,
                angle: angle * (180 / Math.PI),
                length: 150 + Math.random() * 150,
                delay: Math.random() * 0.5,
                width: 2 + Math.random() * 3
            });
        }
        setLightningBolts(bolts);
    };

    useEffect(() => {
        if (!trigger) return;

        // Phase 1: Initial flicker (lights going crazy)
        setPhase('flicker');
        generateParticles();
        generateLightning();

        // Phase 2: Portal opens
        const portalTimer = setTimeout(() => {
            setPhase('portal');
        }, 1500);

        // Phase 3: Reveal message
        const revealTimer = setTimeout(() => {
            setPhase('reveal');
        }, 4000);

        // Phase 4: Fade out (extended by 2 seconds)
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
                className="timer-zero-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'fadeout' ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: phase === 'fadeout' ? 1.5 : 0.3 }}
            >
                {/* Scanlines overlay */}
                <div className="scanlines-overlay" />

                {/* Flicker effect - lights going crazy */}
                {(phase === 'flicker' || phase === 'portal') && (
                    <div className="flicker-layer" />
                )}

                {/* Vignette */}
                <div className="vignette-overlay" />

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
                                    opacity: [0, 1, 0.5, 1, 0],
                                    scaleY: [0, 1, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: bolt.delay,
                                    repeat: Infinity,
                                    repeatDelay: 0.5
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
                                    opacity: [1, 1, 0],
                                    scale: [0, 1.5, 0.5]
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
                        {/* Outer glow rings */}
                        <motion.div
                            className="portal-ring portal-ring-1"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 3, 3.5], opacity: [0, 0.8, 0] }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        />
                        <motion.div
                            className="portal-ring portal-ring-2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 2.5, 3], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
                        />
                        <motion.div
                            className="portal-ring portal-ring-3"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 2, 2.5], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
                        />

                        {/* The main portal rift */}
                        <motion.div
                            className="portal-rift"
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                                scale: phase === 'reveal' ? 1.2 : 1,
                                rotate: 360,
                            }}
                            transition={{
                                scale: { duration: 1, ease: 'easeOut' },
                                rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                            }}
                        >
                            <div className="rift-inner">
                                <div className="rift-core" />
                                <div className="rift-tentacle rift-tentacle-1" />
                                <div className="rift-tentacle rift-tentacle-2" />
                                <div className="rift-tentacle rift-tentacle-3" />
                                <div className="rift-tentacle rift-tentacle-4" />
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Screen crack effect */}
                {phase === 'portal' && (
                    <motion.div
                        className="crack-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.8] }}
                        transition={{ duration: 1 }}
                    />
                )}

                {/* The reveal message */}
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
                        <motion.h1
                            className="reveal-title"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            THE GATE
                        </motion.h1>
                        <motion.h2
                            className="reveal-subtitle"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            HAS OPENED
                        </motion.h2>
                        <motion.div
                            className="reveal-line"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        <motion.p
                            className="reveal-tagline"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            REVELATIONS 2026 BEGINS NOW
                        </motion.p>
                    </motion.div>
                )}

                {/* Upside Down floating particles (ash/spores) */}
                <div className="upside-down-spores">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="spore"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${2 + Math.random() * 4}px`,
                                height: `${2 + Math.random() * 4}px`,
                            }}
                            animate={{
                                y: [0, -30, 0, 30, 0],
                                x: [0, 10, -10, 5, 0],
                                opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Screen shake visual (handled by CSS animation) */}
                {phase === 'portal' && <div className="screen-shake-trigger" />}
            </motion.div>
        </AnimatePresence>
    );
}
