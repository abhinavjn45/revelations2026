import React from 'react';
import { motion } from 'framer-motion';

// A jagged "vein" SVG path
export default function VeinOverlay({ className = "", delay = 0, rotate = 0 }) {
    // Determine rotation style
    const style = {
        transform: `rotate(${rotate}deg)`,
    };

    return (
        <svg
            viewBox="0 0 100 100"
            className={`absolute pointer-events-none opacity-30 mix-blend-overlay ${className}`}
            preserveAspectRatio="none"
            style={style}
        >
            <defs>
                <filter id={`veinDisplacement-${delay}`}> {/* Unique ID based on delay to avoid conflicts if multiple mounted */}
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
            </defs>
            <motion.path
                d="M50,100 C50,100 20,80 30,60 C40,40 10,30 20,10"
                fill="none"
                stroke="#7f1d1d" // red-900
                strokeWidth="2"
                filter={`url(#veinDisplacement-${delay})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: delay, ease: "easeInOut" }}
            />
            <motion.path
                d="M50,100 C50,100 80,80 70,60 C60,40 90,30 80,10"
                fill="none"
                stroke="#991b1b"
                strokeWidth="1.5"
                filter={`url(#veinDisplacement-${delay})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, delay: delay + 0.2, ease: "easeInOut" }}
            />
        </svg>
    );
}
