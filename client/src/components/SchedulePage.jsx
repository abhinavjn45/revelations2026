import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { EVENT_DETAILS, SCHEDULE_DATA } from '../data/eventsData';

// Event Popup Modal Component
const EventPopupModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-red-900/50 rounded-sm shadow-2xl shadow-red-900/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/60 border border-red-900/50 text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors rounded-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Event Image */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src={event.bgImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-3 py-1 text-xs font-typewriter tracking-widest border border-red-900/50 bg-red-900/20 text-red-400 rounded-sm uppercase inline-block mb-2">
              {event.type}
            </span>
            <h2 className="font-stranger text-2xl sm:text-3xl text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
              {event.title}
            </h2>
            <p className="font-typewriter text-gray-400 text-sm mt-1">{event.subtitle}</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{event.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
              <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-1">📍 Venue</span>
              <span className="text-gray-200">{event.venue}</span>
            </div>
            <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
              <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-1">🕐 Time</span>
              <span className="text-gray-200">{event.time}</span>
            </div>
            <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
              <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-1">👥 Eligibility</span>
              <span className="text-gray-200">{event.eligibility}</span>
            </div>
            <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
              <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-1">🏆 Prizes</span>
              <span className="text-gray-200">{event.prizes}</span>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
            <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-3">📋 Rules</span>
            <ul className="space-y-2">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="text-gray-300 flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinators */}
          <div className="bg-black/40 border border-red-900/30 p-4 rounded-sm">
            <span className="text-xs font-typewriter text-gray-500 uppercase tracking-wider block mb-1">📞 Coordinators</span>
            <span className="text-gray-200">{event.coordinators.join(' | ')}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EventCard = ({ event, index, dayLabel, disableScrollAnimation, onClick }) => {
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
      onClick={onClick}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-black/40 border border-red-900/30 p-4 sm:p-6 rounded-sm hover:bg-red-900/10 transition-colors w-full cursor-pointer"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-red-900/10 to-transparent transition-opacity pointer-events-none" />

      {/* Date & Time */}
      <div className="flex flex-row sm:flex-col justify-between sm:justify-center w-full sm:w-auto sm:min-w-[100px] sm:border-r border-red-900/30 sm:pr-6">
        <div className="flex flex-col sm:items-center text-left sm:text-center">
          {dayLabel && (
            <span className="font-typewriter text-base sm:text-lg text-gray-200 mb-1 sm:mb-2 block uppercase tracking-wider font-bold">{dayLabel}</span>
          )}
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

export default function SchedulePage() {
  const [selectedDayId, setSelectedDayId] = useState('all');
  const [hasSwitchedTab, setHasSwitchedTab] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (eventId) => {
    const eventDetails = EVENT_DETAILS[eventId];
    if (eventDetails) {
      setSelectedEvent(eventDetails);
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

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
            onClick={() => handleEventClick(event.id)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <section className="relative w-full flex-grow py-24 sm:py-28 bg-[#050505] overflow-hidden">
        {/* Background Grid/Noise */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(50, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 0, 0, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.7 }}
            className="flex overflow-x-auto gap-3 sm:gap-4 mb-10 sm:mb-12 pb-2 scrollbar-thin scrollbar-thumb-red-900/50 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(127, 29, 29, 0.5) transparent' }}
          >
            {/* ALL EVENTS BUTTON - First */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 3.8 }}
              onClick={() => handleTabClick('all')}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 min-w-[100px] sm:min-w-[120px] flex-shrink-0 border transition-all duration-300 group overflow-hidden
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
            </motion.button>

            {SCHEDULE_DATA.map((day, index) => (
              <motion.button
                key={day.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 3.85 + index * 0.05 }}
                onClick={() => handleTabClick(day.id)}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 min-w-[100px] sm:min-w-[120px] flex-shrink-0 border transition-all duration-300 group overflow-hidden
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
              </motion.button>
            ))}
          </motion.div>

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

      {/* Event Popup Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventPopupModal event={selectedEvent} onClose={closeModal} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
