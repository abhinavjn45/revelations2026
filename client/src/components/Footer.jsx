import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialLink = ({ href, label, icon }) => (
    <motion.a
        href={href}
        target='_blank'
        whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(220, 38, 38, 0.8)" }}
        className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
    >
        <span className="w-8 h-8 flex items-center justify-center border border-gray-800 rounded-sm bg-black/50 group-hover:border-red-600 group-hover:bg-red-900/10 transition-all">
            {icon}
        </span>
        <span className="font-typewriter text-xs tracking-widest  sm:block">{label}</span>
    </motion.a>
);

const Footer = () => {
    const location = useLocation();
    const handleHomeClick = (e) => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    };
    return (
        <footer className="relative w-full bg-black pt-20 pb-10 overflow-hidden border-t border-red-900/30">
            {/* --- ATMOSPHERIC EFFECTS --- */}

            {/* Red Glow from bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />

            {/* Floating Ash Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-gray-500 rounded-full opacity-20"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: "100%",
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: "0%",
                            x: `calc(${Math.random() * 100}% + ${Math.random() * 50 - 25}px)`
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        style={{ width: Math.random() * 3 + 1 + "px", height: Math.random() * 3 + 1 + "px" }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* BRANDING */}
                    <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start">
                        <div className="relative inline-block">
                            <h2 className="font-stranger text-center text-3xl sm:text-4xl md:text-5xl text-red-600 tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                REVELATIONS
                            </h2>
                            <span className="absolute -top-6 -right-12 rotate-12 bg-red-600 text-black font-bold font-mono text-base px-3 py-1 rounded-sm animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                                2026
                            </span>
                        </div>
                        <p className="font-typewriter text-gray-400 text-sm leading-relaxed max-w-sm">
                            The gate has been opened. There is no turning back.
                            Join the Department of Computer Science at <span className="text-red-500/80">CHRIST (Deemed to be University)</span> in the ultimate
                            confrontation between logic and the unknown.
                        </p>

                        {/* DEPT BADGE */}
                        <div className="flex items-center gap-4 border border-red-900/20 bg-red-950/10 p-3 rounded-sm w-fit">
                            <div className="w-10 h-10 rounded-full border-2 border-red-800 flex items-center justify-center bg-black">
                                <span className="font-stranger text-xl text-red-500">CS</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-300 text-xs tracking-widest uppercase">Department of Computer Science</span>
                                <span className="text-[10px] text-red-400 font-mono">CHRIST (DEEMED TO BE UNIVERSITY) // CENTRAL CAMPUS</span>
                            </div>
                        </div>
                    </div>


                    {/* LINKS & CONNECT - Side by side on sm, separate columns on lg */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center lg:justify-items-start">
                        {/* LINKS */}
                        <div className="space-y-6">
                        <h3 className="font-bold text-gray-200 tracking-widest uppercase border-b border-red-900/50 pb-2 inline-block">
                            Transmission
                        </h3>
                        <ul className="space-y-3 font-typewriter text-sm text-gray-400">
                            {[ 
                                { name: 'Home', path: '/' },
                                { name: 'Events', path: '/events' },
                                { name: 'Our Team', path: '/about' },
                                { name: 'Schedule', path: '/schedule' },
                                { name: 'Gallery', path: '/gallery' },
                                { name: 'Leaderboard', path: '/leaderboard' }
                            ].map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 5, color: "#ef4444" }}
                                    className="cursor-pointer flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Link to={item.path} onClick={item.name === 'Home' ? handleHomeClick : undefined}>{item.name}</Link>
                                </motion.li>
                            ))}
                        </ul>
                        </div>

                        {/* CONNECT */}
                        <div className="space-y-6">
                            <h3 className="font-bold text-gray-200 tracking-widest uppercase border-b border-red-900/50 pb-2 inline-block">
                                Frequency
                            </h3>
                            <div className="flex flex-col gap-3">
                                <SocialLink
                                    href="https://www.instagram.com/computer_science_bangalore?igsh=OXQxc2pkMGt4YXU2"
                                    label="INSTAGRAM // @revelations"
                                    icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                                />
                                <SocialLink
                                    href="https://www.linkedin.com/in/christ-university-computer-science-cucs-958aaa299/"
                                    label="LINKEDIN // REVELATIONS"
                                    icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-60">
                    <p className="font-typewriter text-xs text-gray-500">
                        &copy; 1986-2026 CHRIST (DEEMED TO BE UNIVERSITY). ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="font-stranger text-lg text-red-700 animate-pulse">FRIENDS DON'T LIE</span>
                        <div className="h-px w-10 bg-red-900 animate-pulse"></div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Stranger_Things_logo.png" alt="ST" className="h-4 opacity-20 invert grayscale" />
                    </div>
                </div>
            </div>

            {/* VINE DECORATIONS (SVG OVERLAY) */}
            <svg className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-20 mix-blend-overlay" viewBox="0 0 100 100">
                <path d="M100,100 C80,90 80,60 90,40 C95,20 80,10 60,0" fill="none" stroke="#7f1d1d" strokeWidth="2" />
                <path d="M100,100 C70,100 60,70 80,50" fill="none" stroke="#500000" strokeWidth="3" />
            </svg>
            <svg className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-20 mix-blend-overlay rotate-180" viewBox="0 0 100 100">
                <path d="M100,100 C80,90 80,60 90,40 C95,20 80,10 60,0" fill="none" stroke="#7f1d1d" strokeWidth="2" />
            </svg>

        </footer>
    );
};

export default Footer;