import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Dummy Data ---
const SCHEDULE_DATA = [
  {
    id: 'day1',
    label: 'DAY 01',
    date: 'OCT 26',
    title: 'THE VANISHING',
    events: [
      { id: 101, time: '09:00 AM', title: 'OPENING CEREMONY', venue: 'Hawkins High Gym', type: 'General' },
      { id: 102, time: '11:00 AM', title: 'KEYNOTE: THE UPSIDE DOWN', venue: 'AV Room', type: 'Talk' },
      { id: 103, time: '02:00 PM', title: 'CTF: HACKING THE GATE', venue: 'Computer Lab', type: 'Competition' },
    ]
  },
  {
    id: 'day2',
    label: 'DAY 02',
    date: 'OCT 27',
    title: 'THE MIND FLAYER',
    events: [
      { id: 201, time: '10:00 AM', title: 'CODING MARATHON BEGINS', venue: 'Starcourt Mall Atrium', type: 'Competition' },
      { id: 202, time: '01:00 PM', title: 'UI/UX WORKSHOP', venue: 'Scoops Ahoy', type: 'Workshop' },
      { id: 203, time: '04:00 PM', title: 'VR EXPERIENCE', venue: 'Arcade', type: 'Exhibition' },
    ]
  },
  {
    id: 'day3',
    label: 'DAY 03',
    date: 'OCT 28',
    title: 'THE SPY',
    events: [
      { id: 301, time: '09:30 AM', title: 'DEBUGGING CONTEST', venue: 'Russian Base', type: 'Competition' },
      { id: 302, time: '12:00 PM', title: 'AI & ROBOTICS TALK', venue: 'Cerebro', type: 'Talk' },
      { id: 303, time: '03:00 PM', title: 'LAN GAMING FINALS', venue: 'The Palace Arcade', type: 'Gaming' },
    ]
  },
  {
    id: 'day4',
    label: 'DAY 04',
    date: 'OCT 29',
    title: 'THE GATE',
    events: [
      { id: 401, time: '10:00 AM', title: 'PROJECT SHOWCASE', venue: 'Town Hall', type: 'Exhibition' },
      { id: 402, time: '02:00 PM', title: 'CLOSING KEYNOTE', venue: 'Hawkins High Gym', type: 'Talk' },
      { id: 403, time: '06:00 PM', title: 'AWARDS NIGHT', venue: 'Snow Ball', type: 'Celebration' },
    ]
  }
];

// --- Sub-components ---

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 bg-black/40 border border-red-900/30 p-6 rounded-sm hover:bg-red-900/10 transition-colors"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-900/10 to-transparent transition-opacity pointer-events-none" />
      
      {/* Time & Venue */}
      <div className="flex flex-col min-w-[120px] md:border-r border-red-900/30 md:pr-6">
        <span className="font-stranger text-xl text-red-500 tracking-wider">{event.time}</span>
        <span className="font-typewriter text-xs text-gray-500 mt-1 uppercase">{event.venue}</span>
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-200 text-lg md:text-xl tracking-wide group-hover:text-red-400 transition-colors">
          {event.title}
        </h3>
        <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-typewriter tracking-widest border border-gray-700 text-gray-400 rounded-sm uppercase">
          {event.type}
        </span>
      </div>

      {/* Decorative Glitch Element */}
      <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-60 transition-opacity">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
};

export default function ScheduleSection() {
  const [selectedDayId, setSelectedDayId] = useState('day1');

  // Filter events based on selection
  // In this simple version, we just find the day object. 
  // If we wanted an "All" view, we'd flatten the array.
  const selectedDayData = SCHEDULE_DATA.find(d => d.id === selectedDayId);

  return (
    <section className="relative w-full py-20 bg-[#050505] overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="font-stranger text-4xl md:text-6xl text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
            OPERATIONAL TIMELINE
          </h2>
          <p className="font-typewriter text-gray-500 mt-2 tracking-widest text-sm md:text-base">
            CLASSIFIED EVENT SCHEDULE // LEVEL 4 CLEARANCE
          </p>
        </motion.div>

        {/* Day Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SCHEDULE_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDayId(day.id)}
              className={`relative px-6 py-3 min-w-[140px] border transition-all duration-300 group overflow-hidden
                ${selectedDayId === day.id 
                  ? 'border-red-600 bg-red-900/20 text-red-100 shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
                  : 'border-gray-800 bg-black/50 text-gray-500 hover:border-gray-600 hover:text-gray-300'
                }`}
            >
              <div className="relative z-10 flex flex-col items-center">
                 <span className={`font-stranger text-xl ${selectedDayId === day.id ? 'text-red-500' : 'text-current'}`}>
                    {day.label}
                 </span>
                 <span className="font-typewriter text-xs mt-1">{day.date}</span>
              </div>
              
              {/* Scanline Effect on Active */}
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
              className="space-y-4"
            >
                {/* Day Title Decoration */}
                <div className="mb-6 border-b border-red-900/30 pb-2 flex justify-between items-end">
                    <h3 className="font-typewriter text-2xl text-gray-200">
                        MISSION: <span className="text-red-500">{selectedDayData.title}</span>
                    </h3>
                    <span className="text-xs font-mono text-gray-600 hidden md:inline-block">
                        STATUS: ACTIVE
                    </span>
                </div>

                {/* Event List */}
                <div className="grid gap-4">
                    {selectedDayData.events.map((event, idx) => (
                        <EventCard key={event.id} event={event} index={idx} />
                    ))}
                </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
