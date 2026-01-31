
import React, { useState, useMemo } from 'react';
import { TEAMS_DATA } from '../data/teamData';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';


const StudentSearchPage = () => {
  const [search, setSearch] = useState('');

  // Aggregate all students from all teams, add team name to each
  const allStudents = useMemo(() => {
    return TEAMS_DATA.flatMap(team =>
      team.students.map(student => ({
        ...student,
        team: team.name,
        division: student.section // for compatibility with old code
      }))
    );
  }, []);


  // Sort: exact match (name, regNo, or team) at top, then others
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allStudents;
    const matches = [];
    const others = [];
    for (const s of allStudents) {
      const name = s.name.toLowerCase();
      const regNo = s.regNo.toLowerCase();
      const team = s.team.toLowerCase();
      if (name === q || regNo === q || team === q) {
        matches.push(s);
      } else if (name.includes(q) || regNo.includes(q) || team.includes(q)) {
        others.push(s);
      }
    }
    return [...matches, ...others];
  }, [allStudents, search]);


  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 p-8 flex flex-col items-center justify-start mt-24"
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-red-600 font-stranger"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Student Search
        </motion.h1>
        <motion.input
          type="text"
          placeholder="Search by Name, Register Number, or Team..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-6 px-4 py-2 w-full max-w-md rounded border-2 border-red-600 bg-black text-white focus:outline-none focus:border-red-400"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-[#18181b] via-[#1a0505] to-[#18181b] border-2 border-red-700 rounded-3xl shadow-[0_8px_48px_8px_rgba(220,38,38,0.25)] p-2 sm:p-4 md:p-6 w-full mx-auto"
            style={{ boxShadow: '0 0 60px 0 #dc2626cc, 0 0 0 2px #b91c1c44', maxHeight: '60vh', overflowY: 'auto' }}
          >
            <table className="min-w-full text-left font-typewriter text-base md:text-lg text-gray-200 mb-2 table-fixed">
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '15%' }} />
              </colgroup>
              <thead>
                <tr className="bg-red-700/80 text-white rounded-xl">
                  <th className="py-2 px-4 border-b border-red-600 rounded-tl-2xl">Sr. No.</th>
                  <th className="py-2 px-4 border-b border-red-600">Name of Student</th>
                  <th className="py-2 px-4 border-b border-red-600">Register Number</th>
                  <th className="py-2 px-4 border-b border-red-600">Division</th>
                  <th className="py-2 px-4 border-b border-red-600">Team</th>
                  <th className="py-2 px-4 border-b border-red-600 rounded-tr-2xl">WhatsApp Group</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filtered.length === 0 ? (
                    <motion.tr
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={6} className="text-center py-4 text-gray-400">No results found.</td>
                    </motion.tr>
                  ) : (
                    filtered.map((s, idx) => {
                      // Find the group link for this student's team
                      const team = TEAMS_DATA.find(t => t.name === s.team);
                      const groupLink = team && team.groupLink;
                      return (
                        <motion.tr
                          key={s.regNo + s.team}
                          className="transition-all hover:bg-red-900/10 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: idx * 0.02 }}
                        >
                          <td className="py-2 pl-2 text-center">{idx + 1}</td>
                          <td className="py-2 px-4 break-words">{s.name}</td>
                          <td className="py-2 px-4 break-words">{s.regNo}</td>
                          <td className="py-2 px-4 text-center">{s.division}</td>
                          <td className="py-2 px-4 break-words">{s.team}</td>
                          <td className="py-2 px-4 text-center">
                            {groupLink ? (
                              <a
                                href={groupLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1 bg-green-700 hover:bg-green-800 text-white rounded-full font-typewriter text-xs shadow transition"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.956 7.956 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.409.37 2.749 1.072 3.93L.057 15.234a.5.5 0 0 0 .709.61l3.378-1.35A7.963 7.963 0 0 0 8 16c4.418 0 8-3.582 8-8 0-1.768-.576-3.432-1.599-4.674zm-5.6 12.02a6.963 6.963 0 0 1-3.522-.95.5.5 0 0 0-.42-.038l-2.684 1.073.72-2.16a.5.5 0 0 0-.06-.44A6.963 6.963 0 0 1 1 8c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7zm3.468-5.146c-.198-.099-1.174-.579-1.355-.646-.181-.066-.313-.099-.444.099-.132.198-.508.646-.623.779-.115.132-.23.148-.428.05-.198-.099-.836-.308-1.59-.983-.588-.523-.984-1.17-1.1-1.368-.115-.198-.012-.305.087-.403.089-.088.198-.23.297-.345.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.444-1.073-.608-1.47-.16-.384-.323-.332-.444-.338l-.377-.007a.48.48 0 0 0-.347.162c-.115.132-.44.43-.44 1.048 0 .617.45 1.213.513 1.297.066.088.882 1.347 2.14 2.003.299.145.532.231.714.296.3.096.573.082.788.05.241-.036.739-.302.843-.594.104-.292.104-.543.073-.594-.03-.05-.115-.082-.24-.148z" />
                                </svg>
                                WhatsApp
                              </a>
                            ) : (
                              <span className="text-gray-500 text-xs">N/A</span>
                            )}
                          </td>
                        </motion.tr>
                      );
                    })
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default StudentSearchPage;
