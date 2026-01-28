import React from 'react';
import { motion } from 'framer-motion';

export default function AtmosphereBackground({ className = "" }) {
    return (
        <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
            {/* Base Red Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-black to-black opacity-40"></div>

            {/* Fog Layer */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[80px]">
                <motion.div
                    className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rounded-full bg-gradient-to-br from-red-800/20 via-transparent to-gray-800/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-20%] w-[150%] h-[150%] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.15)_0%,transparent_70%)]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating Spores/Dust */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-red-500 blur-[1px]"
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: Math.random() * 100 + "vh",
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -150 + "px"], // Float up
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                    style={{
                        width: Math.random() * 3 + "px",
                        height: Math.random() * 3 + "px",
                    }}
                />
            ))}
        </div>
    );
}
