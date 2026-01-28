import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Dummy Data ---
const SCHEDULE_DATA = [
  {
    id: 'e1',
    label: 'FEB 02',
    date: 'MONDAY',
    title: 'THE MIND MAZE',
    events: [
      { id: 1, time: '09:00 AM', title: "Vecna's Mind Maze (IT Quiz)", venue: 'Room 815', type: 'Technical' },
    ]
  },
  {
    id: 'e2',
    label: 'FEB 03',
    date: 'TUESDAY',
    title: 'THE SNIPPETS',
    events: [
      { id: 2, time: '09:00 AM', title: 'Scoops Troop Snippets (Reel Making)', venue: 'Entire Campus / Online', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e3',
    label: 'FEB 07-08',
    date: 'WEEKEND',
    title: 'THE ARENA',
    events: [
      { id: 3, time: '09:00 AM', title: 'Hawkins Arena (Sports)', venue: 'Multiple Venues', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e4',
    label: 'FEB 15',
    date: 'SUNDAY',
    title: 'THE JOURNAL',
    events: [
      { id: 4, time: '09:00 AM', title: "Mr. Clarke's Journal (Infobahn)", venue: 'Online Submissions', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e5',
    label: 'FEB 16',
    date: 'MONDAY',
    title: 'THE SHOWDOWN',
    events: [
      { id: 5, time: '09:00 AM', title: 'The Snow Ball Showdown (Cosplay)', venue: '911 / Campus View / Sky View', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e6',
    label: 'FEB 17',
    date: 'TUESDAY',
    title: 'THE FLAYER',
    events: [
      { id: 6, time: '09:00 AM', title: 'The Prompt Flayer (Prompt Eng.)', venue: 'Room 815', type: 'Technical' },
    ]
  },
  {
    id: 'e7',
    label: 'FEB 18',
    date: 'WEDNESDAY',
    title: 'THE DESIGN',
    events: [
      { id: 7, time: '09:00 AM', title: 'Mindscape Design (UI/UX)', venue: 'MCA Lab 811', type: 'Technical' },
    ]
  },
  {
    id: 'e8',
    label: 'FEB 19',
    date: 'THURSDAY',
    title: 'THE VISIONS',
    events: [
      { id: 8, time: '09:00 AM', title: "Will's Visions (Drawing/Painting)", venue: 'Round Table Area 8th Floor', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e9',
    label: 'FEB 20',
    date: 'FRIDAY',
    title: 'CODE RED',
    events: [
      { id: 9, time: '09:00 AM', title: 'Code Red: Demogorgon Debug', venue: 'MCA Lab 811', type: 'Technical' },
    ]
  },
  {
    id: 'e10',
    label: 'FEB 21',
    date: 'SATURDAY',
    title: 'THE GATE',
    events: [
      { id: 10, time: '09:00 AM', title: 'Capture the Gate (CTF)', venue: 'MCA Lab 811', type: 'Technical' },
    ]
  },
  {
    id: 'e11',
    label: 'FEB 23',
    date: 'MONDAY',
    title: 'DUMB DEEDS',
    events: [
      { id: 11, time: '09:00 AM', title: 'D&D: Dumb Deeds (Dumb Charads)', venue: 'Room 815', type: 'Non-Technical' },
    ]
  },
  {
    id: 'e12',
    label: 'FEB 24',
    date: 'TUESDAY',
    title: 'THE BLUEPRINT',
    events: [
      { id: 12, time: '09:00 AM', title: 'Plan B: Joyce Blueprint (IT Manager)', venue: 'Room 815', type: 'Technical' },
    ]
  }
];

// ... (previous imports and data remain the same, I will just rewrite the component part)

const EventCard = ({ event, index, dayLabel, disableScrollAnimation }) => {
  const motionProps = disableScrollAnimation
    ? {}
    : {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.3, delay: index * 0.05 }
    };

  return (
    <motion.div
      layout
      {...motionProps}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-black/40 border border-red-900/30 p-4 sm:p-6 rounded-sm hover:bg-red-900/10 transition-colors w-full"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-900/10 to-transparent transition-opacity pointer-events-none" />

      {/* Date & Time */}
      <div className="flex flex-row sm:flex-col justify-between sm:justify-center w-full sm:w-auto sm:min-w-[100px] sm:border-r border-red-900/30 sm:pr-6">
        <div className="flex flex-col sm:items-center text-left sm:text-center">
          {dayLabel && (
            <span className="font-typewriter text-base sm:text-lg text-gray-200 mb-1 sm:mb-2 block uppercase tracking-wider font-bold">{dayLabel}</span>
          )}
          <span className="font-stranger text-xl sm:text-2xl text-red-500 tracking-wider whitespace-nowrap">{event.time}</span>
        </div>
        <span className="font-mono text-[10px] text-gray-600 sm:hidden uppercase tracking-tighter self-center">TIMESTAMP</span>
      </div>

      {/* Details */}
      <div className="flex-1 w-full">
        <h3 className="font-bold text-gray-200 text-lg md:text-2xl tracking-wide group-hover:text-red-400 transition-colors">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="px-2 py-0.5 text-[10px] sm:text-xs font-typewriter tracking-widest border border-red-900/50 bg-red-900/10 text-red-400 rounded-sm uppercase">
            {event.type}
          </span>
          <span className="font-typewriter text-xs sm:text-sm text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            {event.venue}
          </span>
        </div>
      </div>

      {/* Decorative Glitch Element */}
      <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-60 transition-opacity hidden sm:block">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

export default function ScheduleSection() {
  const [selectedDayId, setSelectedDayId] = useState('all');
  const [hasSwitchedTab, setHasSwitchedTab] = useState(false);

  const handleTabClick = (id) => {
    setSelectedDayId(id);
    setHasSwitchedTab(true);
  };

  // Helper to render a specific day's content
  const renderDayGroup = (dayData) => (
    <div key={dayData.id} className="space-y-4 mb-12 last:mb-0">
      {/* Day Title Decoration */}
      <div className="mb-4 sm:mb-6 border-b border-red-900/30 pb-2 flex flex-col sm:flex-row justify-between sm:items-end gap-2">
        <h3 className="font-typewriter text-xl sm:text-2xl text-gray-200">
          MISSION: <span className="text-red-500">{dayData.title}</span>
        </h3>
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
          <span className="text-xs font-mono text-red-400/80 block sm:hidden">
            {dayData.label}
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-gray-600 uppercase tracking-wider">
            STATUS: ACTIVE
          </span>
        </div>
      </div>

      {/* Event List */}
      <div className="grid gap-3 sm:gap-4">
        {dayData.events.map((event, idx) => (
          <EventCard
            key={event.id}
            event={event}
            index={idx}
            dayLabel={dayData.label}
            disableScrollAnimation={hasSwitchedTab}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#050505] overflow-hidden">
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(50, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 0, 0, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-stranger text-3xl sm:text-4xl md:text-6xl text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
            OPERATIONAL TIMELINE
          </h2>
          <p className="font-typewriter text-gray-500 mt-2 tracking-widest text-xs sm:text-sm md:text-base">
            CLASSIFIED EVENT SCHEDULE // LEVEL 4 CLEARANCE
          </p>
        </motion.div>

        {/* Day Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {SCHEDULE_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => handleTabClick(day.id)}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 min-w-[100px] sm:min-w-[140px] border transition-all duration-300 group overflow-hidden
                ${selectedDayId === day.id
                  ? 'border-red-600 bg-red-900/20 text-red-100 shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                  : 'border-gray-800 bg-black/50 text-gray-500 hover:border-gray-600 hover:text-gray-300'
                }`}
            >
              <div className="relative z-10 flex flex-col items-center">
                <span className={`font-stranger text-lg sm:text-xl ${selectedDayId === day.id ? 'text-red-500' : 'text-current'}`}>
                  {day.label}
                </span>
              </div>

              {selectedDayId === day.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-600/5 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </button>
          ))}

          {/* ALL EVENTS BUTTON */}
          <button
            onClick={() => handleTabClick('all')}
            className={`relative px-4 sm:px-6 py-2 sm:py-3 min-w-[100px] sm:min-w-[140px] border transition-all duration-300 group overflow-hidden
                ${selectedDayId === 'all'
                ? 'border-red-600 bg-red-900/20 text-red-100 shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                : 'border-gray-800 bg-black/50 text-gray-500 hover:border-gray-600 hover:text-gray-300'
              }`}
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <span className={`font-stranger text-lg sm:text-xl ${selectedDayId === 'all' ? 'text-red-500' : 'text-current'}`}>
                ALL DAYS
              </span>
              <span className="font-typewriter text-[10px] sm:text-xs mt-1">FULL LOG</span>
            </div>
            {selectedDayId === 'all' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-red-600/5 z-0"
              />
            )}
          </button>
        </div>

        {/* Schedule Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDayId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedDayId === 'all'
                ? SCHEDULE_DATA.map(day => renderDayGroup(day))
                : renderDayGroup(SCHEDULE_DATA.find(d => d.id === selectedDayId))
              }
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
