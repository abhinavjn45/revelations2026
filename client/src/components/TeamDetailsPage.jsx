import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { getTeamBySlug, TEAMS_DATA } from '../data/teamData';

export default function TeamDetailsPage() {
    const { slug } = useParams();
    const team = getTeamBySlug(slug);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!team) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-stranger text-4xl text-red-600 mb-4">Team Not Found</h1>
                    <Link to="/" className="text-red-400 hover:text-red-300 font-typewriter">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Group students by section
    const studentsBySection = team.students.reduce((acc, student) => {
        if (!acc[student.section]) {
            acc[student.section] = [];
        }
        acc[student.section].push(student);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
            <Navbar />

            {/* Atmospheric Effects */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Red Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-red-900/20 blur-[100px] rounded-full" />

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
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
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Team Logo */}
                        <motion.div
                            className="relative inline-block mb-6"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full scale-150" />
                            <img
                                src={team.logo}
                                alt={team.name}
                                className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                            />
                        </motion.div>

                        <h1 className="font-stranger text-4xl md:text-6xl text-red-600 tracking-widest mb-4 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                            {team.name.toUpperCase()}
                        </h1>
                        <p className="font-typewriter text-gray-400 text-base md:text-lg tracking-wider mb-2">
                            "{team.tagline}"
                        </p>
                        <p className="font-typewriter text-gray-500 text-sm max-w-2xl mx-auto">
                            {team.description}
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-4">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600" />
                            <span className="text-red-500 animate-pulse">⬡</span>
                            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600" />
                        </div>

                        {/* Stats */}
                        <div className="mt-6 flex justify-center gap-8">
                            <div className="text-center">
                                <span className="font-stranger text-3xl text-red-500">{team.students.length}</span>
                                <p className="font-typewriter text-xs text-gray-500 mt-1">MEMBERS</p>
                            </div>
                            <div className="text-center">
                                <span className="font-stranger text-3xl text-red-500">{Object.keys(studentsBySection).length}</span>
                                <p className="font-typewriter text-xs text-gray-500 mt-1">SECTIONS</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Student List by Section */}
                    {Object.entries(studentsBySection).map(([section, students], sectionIdx) => (
                        <motion.div
                            key={section}
                            className="mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + sectionIdx * 0.1 }}
                        >
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-red-600/50 to-transparent" />
                                <h2 className="font-stranger text-xl md:text-2xl text-red-500 tracking-wider">
                                    {section}
                                </h2>
                                <span className="font-typewriter text-xs text-gray-500">({students.length} members)</span>
                                <div className="h-px flex-1 bg-gradient-to-l from-red-600/50 to-transparent" />
                            </div>

                            {/* Student Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {students.map((student, idx) => (
                                    <motion.div
                                        key={student.regNo}
                                        className="bg-gradient-to-br from-gray-900/80 via-[#1a0505]/60 to-gray-900/80 border border-red-900/30 rounded-xl p-4 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] group"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.03 }}
                                        whileHover={{ y: -3 }}
                                    >
                                        {/* Student Avatar */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-900/50 to-gray-900 border border-red-600/30 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                                                <span className="font-stranger text-lg text-red-400">
                                                    {student.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-typewriter text-sm text-gray-200 truncate group-hover:text-red-300 transition-colors">
                                                    {student.name}
                                                </p>
                                                <p className="font-typewriter text-xs text-gray-500">
                                                    #{student.slNo}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Reg No */}
                                        <div className="bg-black/40 rounded-lg px-3 py-2 border border-red-900/20">
                                            <p className="font-typewriter text-xs text-gray-500">REG NO</p>
                                            <p className="font-typewriter text-sm text-red-400">{student.regNo}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Back Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link
                            to="/#teams"
                            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-red-800/50 to-red-700/50 hover:from-red-700 hover:to-red-600 text-white font-typewriter text-sm tracking-widest rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            BACK TO DIVISIONS
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
