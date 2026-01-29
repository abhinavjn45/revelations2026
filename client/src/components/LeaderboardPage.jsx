import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import Footer from './Footer';
import leaderboardData from '../data/leaderboardData';

export default function LeaderboardPage() {
    // Sort leaderboard in descending order by points
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.points - a.points);

    // Compute ranks with ties
    let lastPoints = null;
    let lastRank = 0;
    const rankedRows = sortedLeaderboard.map((row, idx) => {
        if (row.points !== lastPoints) {
            lastRank = idx;
        }
        lastPoints = row.points;
        return { ...row, rank: lastRank };
    });

    // Check if all teams have 0 points
    const allZero = rankedRows.every(row => row.points === 0);
    // Count unique nonzero point ranks
    const nonZeroRanks = rankedRows.filter(row => row.points > 0).map(row => row.rank);
    const uniqueNonZeroRanks = Array.from(new Set(nonZeroRanks));

    const getTrophyIcon = (rank) => (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
        </svg>
    );

    const getRankStyle = (row) => {
        if (allZero || row.points === 0) {
            return { className: 'bg-gray-900/30 border-gray-800', icon: null };
        }

        if (row.rank === 0 && uniqueNonZeroRanks.length >= 1) {
            return {
                className: 'bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-yellow-500/20 border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.3)]',
                icon: (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/90 text-yellow-900 shadow-lg">
                        {getTrophyIcon(0)}
                    </span>
                ),
                textClass: 'text-yellow-300 font-extrabold'
            };
        } else if (row.rank === 1 && uniqueNonZeroRanks.length >= 2) {
            return {
                className: 'bg-gradient-to-r from-gray-400/20 via-gray-300/10 to-gray-400/20 border-gray-400/50 shadow-[0_0_24px_rgba(192,192,192,0.25)]',
                icon: (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300/90 text-gray-800 shadow-lg">
                        {getTrophyIcon(1)}
                    </span>
                ),
                textClass: 'text-gray-200 font-bold'
            };
        } else if (row.rank === 2 && uniqueNonZeroRanks.length >= 3) {
            return {
                className: 'bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-amber-600/20 border-amber-500/50 shadow-[0_0_20px_rgba(205,127,50,0.25)]',
                icon: (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/90 text-amber-900 shadow-lg">
                        {getTrophyIcon(2)}
                    </span>
                ),
                textClass: 'text-amber-300 font-bold'
            };
        }

        return { className: 'bg-gray-900/30 border-gray-700', icon: null, textClass: 'text-gray-300' };
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
            <Navbar />

            {/* Atmospheric Effects */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Red Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-red-900/20 blur-[100px] rounded-full" />

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-red-500/20 rounded-full"
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
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        style={{ width: Math.random() * 4 + 2 + "px", height: Math.random() * 4 + 2 + "px" }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <main className="relative z-10 pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-stranger text-5xl md:text-7xl text-red-600 tracking-widest mb-4 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                            LEADERBOARD
                        </h1>
                        <p className="font-typewriter text-gray-400 text-sm md:text-base tracking-wider">
                            {/* // THE UPSIDE DOWN RANKINGS // */}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600" />
                            <span className="text-red-500 animate-pulse">⬡</span>
                            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600" />
                        </div>
                    </motion.div>

                    {/* Top 3 Podium - Stranger Things / Upside Down Style */}
                    {!allZero && rankedRows.length >= 3 && (
                        <div className="relative mb-12 select-none px-4">
                            {/* Background eerie glow */}
                            <div className="absolute inset-0 flex justify-center">
                                <div className="w-[400px] h-[200px] bg-red-600/20 blur-[80px] rounded-full animate-pulse" />
                            </div>

                            {/* Floating particles specific to podium */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={`podium-particle-${i}`}
                                        className="absolute w-1 h-1 bg-red-500/40 rounded-full"
                                        initial={{
                                            x: `${20 + Math.random() * 60}%`,
                                            y: "100%",
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: "0%",
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 4 + Math.random() * 3,
                                            repeat: Infinity,
                                            delay: Math.random() * 3
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center items-end gap-2 md:gap-4 relative z-10">
                                {/* 2nd Place */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                                    className="flex flex-col items-center group"
                                >
                                    {/* Flickering rank indicator */}
                                    <motion.div
                                        className="mb-2 relative"
                                        animate={{ opacity: [1, 0.7, 1, 0.9, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    >
                                        <div className="absolute inset-0 blur-md bg-gray-400/30 rounded-full scale-150" />
                                        <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-600 via-gray-400 to-gray-600 flex items-center justify-center border-2 border-gray-300/50 shadow-[0_0_15px_rgba(156,163,175,0.5)]">
                                            <span className="font-stranger text-base md:text-lg text-gray-900 drop-shadow-lg">2</span>
                                        </div>
                                    </motion.div>

                                    {/* Avatar with tendril border effect */}
                                    <div className="relative mb-2">
                                        <div className="absolute -inset-1 bg-gradient-to-b from-gray-500/30 to-transparent rounded-full blur-sm" />
                                        <motion.div
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center border-2 border-gray-500/60 shadow-[0_0_20px_rgba(107,114,128,0.4),inset_0_0_15px_rgba(0,0,0,0.5)] relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {/* Inner glow */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-500/10 to-transparent" />
                                            <span className="font-stranger text-xl md:text-2xl text-gray-300 relative z-10 drop-shadow-[0_0_10px_rgba(156,163,175,0.5)]">
                                                {rankedRows[1].team.charAt(0)}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Team Name with eerie styling */}
                                    <p className="font-typewriter text-gray-300 text-xs md:text-sm font-bold truncate max-w-[90px] md:max-w-[110px] text-center mb-2 drop-shadow-[0_0_5px_rgba(156,163,175,0.3)]">
                                        {rankedRows[1].team}
                                    </p>

                                    {/* Points with pulsing effect */}
                                    <motion.div
                                        className="flex items-center gap-1.5 bg-gray-900/90 px-3 py-1.5 rounded-lg mb-3 border border-gray-600/50 shadow-[0_0_15px_rgba(107,114,128,0.3)]"
                                        animate={{ boxShadow: ["0 0 15px rgba(107,114,128,0.3)", "0 0 25px rgba(107,114,128,0.5)", "0 0 15px rgba(107,114,128,0.3)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                                        <span className="font-stranger text-sm md:text-base text-white">{rankedRows[1].points}</span>
                                        <span className="font-typewriter text-[10px] text-gray-500">PTS</span>
                                    </motion.div>

                                    {/* Podium Block - Upside Down style */}
                                    <div className="relative">
                                        {/* Tendril decorations */}
                                        <svg className="absolute -left-4 top-0 w-8 h-full opacity-30" viewBox="0 0 20 100" fill="none">
                                            <path d="M15 0 Q5 20 10 40 Q15 60 8 80 Q2 100 5 120" stroke="url(#tendril-gray)" strokeWidth="2" fill="none" />
                                        </svg>
                                        <svg className="absolute -right-4 top-0 w-8 h-full opacity-30" viewBox="0 0 20 100" fill="none">
                                            <path d="M5 0 Q15 25 10 50 Q5 75 12 100" stroke="url(#tendril-gray)" strokeWidth="2" fill="none" />
                                        </svg>

                                        <motion.div
                                            className="w-24 md:w-32 h-28 md:h-36 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-t-xl flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]"
                                            whileHover={{ y: -5 }}
                                        >
                                            {/* Top edge glow */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />

                                            {/* Vein texture overlay */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gray-400 rotate-12" />
                                                <div className="absolute top-1/3 right-1/3 w-px h-1/3 bg-gray-400 -rotate-12" />
                                            </div>

                                            <span className="font-stranger text-3xl md:text-4xl text-gray-400 drop-shadow-lg">II</span>
                                            <span className="font-typewriter text-[10px] text-gray-400 mt-1 tracking-wider">SECOND</span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* 1st Place - The Champion */}
                                <motion.div
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                    className="flex flex-col items-center z-20 group"
                                >
                                    {/* Champion crown with intense glow */}
                                    <motion.div
                                        className="mb-2 relative"
                                        animate={{
                                            opacity: [1, 0.8, 1],
                                            scale: [1, 1.02, 1]
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        {/* Multiple glow layers */}
                                        <div className="absolute inset-0 blur-2xl bg-red-500/40 rounded-full scale-150" />
                                        <div className="absolute inset-0 blur-xl bg-red-600/30 rounded-full scale-125" />

                                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 flex items-center justify-center border-2 border-red-400/70 shadow-[0_0_30px_rgba(220,38,38,0.6),0_0_60px_rgba(220,38,38,0.3)]">
                                            {/* Inner fire effect */}
                                            <div className="absolute inset-1 rounded-full bg-gradient-to-t from-red-700/50 to-transparent" />
                                            <span className="font-stranger text-xl md:text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] relative z-10">1</span>
                                        </div>

                                        {/* Floating sparks */}
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-red-400 rounded-full"
                                                style={{ left: `${30 + i * 20}%`, top: "0%" }}
                                                animate={{
                                                    y: [-20, -40],
                                                    opacity: [1, 0],
                                                    scale: [1, 0]
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                            />
                                        ))}
                                    </motion.div>

                                    {/* Avatar with intense effect */}
                                    <div className="relative mb-2">
                                        <motion.div
                                            className="absolute -inset-2 bg-red-500/20 rounded-full blur-md"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-red-900 via-black to-red-950 flex items-center justify-center border-2 border-red-500/70 shadow-[0_0_30px_rgba(220,38,38,0.5),inset_0_0_20px_rgba(220,38,38,0.3)] relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {/* Pulsing inner glow */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"
                                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <span className="font-stranger text-2xl md:text-3xl text-red-400 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                                                {rankedRows[0].team.charAt(0)}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Team Name - Champion styling */}
                                    <motion.p
                                        className="font-stranger text-red-400 text-sm md:text-base font-bold truncate max-w-[100px] md:max-w-[130px] text-center mb-1 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]"
                                        animate={{ textShadow: ["0 0 10px rgba(220,38,38,0.6)", "0 0 20px rgba(220,38,38,0.8)", "0 0 10px rgba(220,38,38,0.6)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {rankedRows[0].team}
                                    </motion.p>

                                    {/* Points with dramatic effect */}
                                    <motion.div
                                        className="flex items-center gap-1.5 bg-red-950/90 px-4 py-2 rounded-lg mb-3 border border-red-600/60 shadow-[0_0_25px_rgba(220,38,38,0.4)]"
                                        animate={{
                                            boxShadow: ["0 0 25px rgba(220,38,38,0.4)", "0 0 40px rgba(220,38,38,0.6)", "0 0 25px rgba(220,38,38,0.4)"]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <motion.span
                                            className="w-2 h-2 rounded-full bg-red-500"
                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                        <span className="font-stranger text-base md:text-lg text-white">{rankedRows[0].points}</span>
                                        <span className="font-typewriter text-[10px] text-red-400">PTS</span>
                                    </motion.div>

                                    {/* Podium Block - Champion's throne */}
                                    <div className="relative">
                                        {/* Tendril decorations - more prominent */}
                                        <svg className="absolute -left-4 top-0 w-8 h-full opacity-40" viewBox="0 0 20 120" fill="none">
                                            <path d="M18 0 Q5 30 12 60 Q18 90 8 120" stroke="url(#tendril-red)" strokeWidth="2" fill="none" />
                                            <path d="M15 20 Q8 40 12 60" stroke="url(#tendril-red)" strokeWidth="1.5" fill="none" />
                                        </svg>
                                        <svg className="absolute -right-4 top-0 w-8 h-full opacity-40" viewBox="0 0 20 120" fill="none">
                                            <path d="M2 0 Q15 30 8 60 Q2 90 12 120" stroke="url(#tendril-red)" strokeWidth="2" fill="none" />
                                            <path d="M5 30 Q12 50 8 70" stroke="url(#tendril-red)" strokeWidth="1.5" fill="none" />
                                        </svg>

                                        <motion.div
                                            className="w-28 md:w-36 h-36 md:h-48 bg-gradient-to-b from-red-950 via-gray-900 to-black rounded-t-xl flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.3),0_0_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(220,38,38,0.3)]"
                                            whileHover={{ y: -8 }}
                                        >
                                            {/* Top edge intense glow */}
                                            <motion.div
                                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />

                                            {/* Vein/crack texture */}
                                            <div className="absolute inset-0 opacity-20">
                                                <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-red-500 rotate-12" />
                                                <div className="absolute top-1/3 right-1/4 w-px h-1/2 bg-red-500 -rotate-6" />
                                                <div className="absolute top-1/2 left-1/2 w-px h-1/3 bg-red-500 rotate-45" />
                                            </div>

                                            {/* Rank display */}
                                            <motion.span
                                                className="font-stranger text-4xl md:text-5xl text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                                                animate={{ opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                I
                                            </motion.span>
                                            <span className="font-typewriter text-[10px] text-red-400 mt-1 tracking-widest">CHAMPION</span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* 3rd Place */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                                    className="flex flex-col items-center group"
                                >
                                    {/* Rank indicator with bronze glow */}
                                    <motion.div
                                        className="mb-2 relative"
                                        animate={{ opacity: [1, 0.75, 1, 0.85, 1] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                                    >
                                        <div className="absolute inset-0 blur-md bg-amber-500/30 rounded-full scale-150" />
                                        <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center border-2 border-amber-400/50 shadow-[0_0_15px_rgba(217,119,6,0.5)]">
                                            <span className="font-stranger text-sm md:text-base text-amber-900 drop-shadow-lg">3</span>
                                        </div>
                                    </motion.div>

                                    {/* Avatar */}
                                    <div className="relative mb-2">
                                        <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/20 to-transparent rounded-full blur-sm" />
                                        <motion.div
                                            className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-gradient-to-br from-amber-900/50 via-gray-900 to-black flex items-center justify-center border-2 border-amber-600/50 shadow-[0_0_15px_rgba(217,119,6,0.3),inset_0_0_10px_rgba(0,0,0,0.5)] relative overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 to-transparent" />
                                            <span className="font-stranger text-lg md:text-xl text-amber-400 relative z-10 drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]">
                                                {rankedRows[2].team.charAt(0)}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Team Name */}
                                    <p className="font-typewriter text-amber-400 text-xs md:text-sm font-bold truncate max-w-[85px] md:max-w-[100px] text-center mb-2 drop-shadow-[0_0_5px_rgba(217,119,6,0.3)]">
                                        {rankedRows[2].team}
                                    </p>

                                    {/* Points */}
                                    <motion.div
                                        className="flex items-center gap-1.5 bg-amber-950/80 px-2.5 py-1 rounded-lg mb-3 border border-amber-700/50 shadow-[0_0_15px_rgba(217,119,6,0.25)]"
                                        animate={{ boxShadow: ["0 0 15px rgba(217,119,6,0.25)", "0 0 20px rgba(217,119,6,0.4)", "0 0 15px rgba(217,119,6,0.25)"] }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                        <span className="font-stranger text-sm md:text-base text-white">{rankedRows[2].points}</span>
                                        <span className="font-typewriter text-[10px] text-amber-600">PTS</span>
                                    </motion.div>

                                    {/* Podium Block */}
                                    <div className="relative">
                                        {/* Tendril decorations */}
                                        <svg className="absolute -left-3 top-0 w-6 h-full opacity-25" viewBox="0 0 20 80" fill="none">
                                            <path d="M15 0 Q8 20 12 40 Q16 60 10 80" stroke="url(#tendril-amber)" strokeWidth="1.5" fill="none" />
                                        </svg>
                                        <svg className="absolute -right-3 top-0 w-6 h-full opacity-25" viewBox="0 0 20 80" fill="none">
                                            <path d="M5 0 Q12 25 8 50 Q4 75 10 100" stroke="url(#tendril-amber)" strokeWidth="1.5" fill="none" />
                                        </svg>

                                        <motion.div
                                            className="w-20 md:w-28 h-24 md:h-28 bg-gradient-to-b from-amber-950/80 via-gray-900 to-black rounded-t-xl flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(217,119,6,0.2)]"
                                            whileHover={{ y: -5 }}
                                        >
                                            {/* Top edge glow */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                                            {/* Vein texture */}
                                            <div className="absolute inset-0 opacity-15">
                                                <div className="absolute top-1/4 left-1/3 w-px h-1/2 bg-amber-500 rotate-6" />
                                                <div className="absolute top-1/3 right-1/4 w-px h-1/3 bg-amber-500 -rotate-12" />
                                            </div>

                                            <span className="font-stranger text-2xl md:text-3xl text-amber-500 drop-shadow-lg">III</span>
                                            <span className="font-typewriter text-[10px] text-amber-400 mt-1 tracking-wider">THIRD</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* SVG Gradient Definitions */}
                            <svg className="absolute w-0 h-0">
                                <defs>
                                    <linearGradient id="tendril-red" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                                        <stop offset="50%" stopColor="#dc2626" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.4" />
                                    </linearGradient>
                                    <linearGradient id="tendril-gray" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#4b5563" stopOpacity="0.3" />
                                    </linearGradient>
                                    <linearGradient id="tendril-amber" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#92400e" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    )}

                    {/* Leaderboard Table */}
                    <motion.div
                        className="bg-gradient-to-br from-gray-900/80 via-[#1a0505]/60 to-gray-900/80 border border-red-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-[0_0_60px_rgba(220,38,38,0.15)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-red-900/30 font-typewriter text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                            <div className="col-span-2 text-center">Rank</div>
                            <div className="col-span-7 md:col-span-8">Team</div>
                            <div className="col-span-3 md:col-span-2 text-right">Points</div>
                        </div>

                        {/* Table Rows */}
                        <div className="space-y-3">
                            {rankedRows.map((row, idx) => {
                                const style = getRankStyle(row);
                                return (
                                    <motion.div
                                        key={row.team}
                                        className={`grid grid-cols-12 gap-4 items-center p-4 md:p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${style.className}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                                    >
                                        {/* Rank */}
                                        <div className="col-span-2 flex justify-center">
                                            {style.icon ? (
                                                style.icon
                                            ) : (
                                                <span className="font-typewriter text-2xl text-gray-500">#{row.rank + 1}</span>
                                            )}
                                        </div>

                                        {/* Team Name */}
                                        <div className={`col-span-7 md:col-span-8 font-typewriter text-lg md:text-xl ${style.textClass || 'text-gray-300'}`}>
                                            {row.team}
                                        </div>

                                        {/* Points */}
                                        <div className={`col-span-3 md:col-span-2 text-right font-stranger text-2xl md:text-3xl ${row.points > 0 ? 'text-red-400' : 'text-gray-600'}`}>
                                            {row.points}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Back to Home Button */}
                    <motion.div
                        className="text-center mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-red-800/50 to-red-700/50 hover:from-red-700 hover:to-red-600 text-white font-typewriter text-sm tracking-widest rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            RETURN TO BASE
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
