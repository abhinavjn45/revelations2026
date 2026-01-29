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
              // THE UPSIDE DOWN RANKINGS //
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600" />
                            <span className="text-red-500 animate-pulse">⬡</span>
                            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600" />
                        </div>
                    </motion.div>

                    {/* Top 3 Podium */}
                    {!allZero && rankedRows.length >= 3 && (
                        <div className="flex justify-center items-end gap-4 md:gap-8 mb-16 h-64 md:h-80 select-none">
                            {/* 2nd Place */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col items-center w-1/3 md:w-1/4"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-gray-400 overflow-hidden mb-4 shadow-[0_0_20px_rgba(156,163,175,0.5)] bg-gray-900 flex items-center justify-center z-10">
                                    <span className="font-stranger text-2xl md:text-3xl text-gray-400">2</span>
                                </div>
                                <div className="w-full bg-gradient-to-t from-gray-900 to-gray-800 border-t-4 border-gray-400 h-32 md:h-40 rounded-t-lg flex flex-col items-center justify-start pt-4 shadow-[0_0_15px_rgba(156,163,175,0.2)]">
                                    <p className="font-typewriter text-red-400 text-xs md:text-sm font-bold truncate w-full px-2 text-center mb-1">{rankedRows[1].team}</p>
                                    <p className="font-stranger text-xl md:text-3xl text-white drop-shadow-md">{rankedRows[1].points}</p>
                                </div>
                            </motion.div>

                            {/* 1st Place */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col items-center w-1/3 md:w-1/4 z-20"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-yellow-500 overflow-hidden mb-4 shadow-[0_0_30px_rgba(234,179,8,0.6)] bg-gray-900 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-yellow-500/20 animate-pulse rounded-full"></div>
                                    <span className="font-stranger text-3xl md:text-4xl text-yellow-500 relative z-10">1</span>
                                </div>
                                <div className="w-full bg-gradient-to-t from-gray-900 to-yellow-900/30 border-t-4 border-yellow-500 h-40 md:h-52 rounded-t-lg flex flex-col items-center justify-start pt-6 shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                                    <span className="text-yellow-500 text-2xl md:text-3xl animate-bounce mb-2">👑</span>
                                    <p className="font-typewriter text-yellow-400 text-xs md:text-base font-bold truncate w-full px-2 text-center mb-1">{rankedRows[0].team}</p>
                                    <p className="font-stranger text-3xl md:text-5xl text-white drop-shadow-lg">{rankedRows[0].points}</p>
                                </div>
                            </motion.div>

                            {/* 3rd Place */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col items-center w-1/3 md:w-1/4"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-amber-700 overflow-hidden mb-4 shadow-[0_0_20px_rgba(180,83,9,0.5)] bg-gray-900 flex items-center justify-center z-10">
                                    <span className="font-stranger text-2xl md:text-3xl text-amber-700">3</span>
                                </div>
                                <div className="w-full bg-gradient-to-t from-gray-900 to-amber-900/20 border-t-4 border-amber-700 h-24 md:h-32 rounded-t-lg flex flex-col items-center justify-start pt-4 shadow-[0_0_15px_rgba(180,83,9,0.2)]">
                                    <p className="font-typewriter text-amber-600 text-xs md:text-sm font-bold truncate w-full px-2 text-center mb-1">{rankedRows[2].team}</p>
                                    <p className="font-stranger text-xl md:text-3xl text-white drop-shadow-md">{rankedRows[2].points}</p>
                                </div>
                            </motion.div>
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
