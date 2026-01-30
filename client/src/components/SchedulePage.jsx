import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import Footer from './Footer';

// Import event images
import HawkinsArenaImg from '../assets/images/events/1.png';
import ScoopsTroopSnippetsImg from '../assets/images/events/2.png';
import MrClarkeJournalImg from '../assets/images/events/3.png';
import TheSnowBallShowdownImg from '../assets/images/events/4.png';
import MindscapeDesignImg from '../assets/images/events/5.png';
import WillsVisionsImg from '../assets/images/events/6.png';
import ThePromptFlayerImg from '../assets/images/events/7.png';
import DumbDeedsImg from '../assets/images/events/8.png';
import JoyceBlueprintImg from '../assets/images/events/9.png';
import CodeRedDemogorgonImg from '../assets/images/events/10.png';
import VecnaMindMazeImg from '../assets/images/events/11.png';
import CapturetheGateImg from '../assets/images/events/12.png';

// Event details data (matching EventsPage)
const EVENT_DETAILS = {
    1: {
        title: "Vecna's Mind Maze",
        subtitle: "IT Quiz",
        date: "FEB 02",
        time: "09:00 AM - 12:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: VecnaMindMazeImg,
        description: "Enter the mind of Vecna and navigate through layers of technical puzzles. Test your knowledge across programming, databases, networking, and more in this thrilling IT quiz competition.",
        rules: ["Team of 2 members", "3 rounds: Prelims, Semi-finals, Finals", "No electronic devices allowed", "Decision of judges is final"],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Kripa Dhandhania", "Adarsh Gupta"]
    },
    2: {
        title: "Scoops Troop Snippets",
        subtitle: "Reel Making",
        date: "FEB 03",
        time: "All Day Event",
        venue: "Entire Campus / Online",
        type: "Non-Technical",
        bgImage: ScoopsTroopSnippetsImg,
        description: "Unleash your creativity and storytelling skills! Create engaging reels that capture the essence of college life, technology, or the Stranger Things theme.",
        rules: ["Individual or team of 2", "Reel duration: 30-60 seconds", "Must include event hashtag", "No copyrighted music without permission"],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Evana Joseph", "Bhavya Dhanuka"]
    },
    3: {
        title: "Hawkins Arena",
        subtitle: "Sports",
        date: "FEB 07-08",
        time: "08:00 AM - 05:00 PM",
        venue: "Multiple Venues",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        description: "Step into the Hawkins Arena for an action-packed sports extravaganza! Compete in various sports events and prove your athletic prowess.",
        rules: ["Team registrations required", "Proper sports attire mandatory", "Follow fair play guidelines", "Events: Cricket, Football, Badminton, Table Tennis"],
        eligibility: "Open to all department students",
        prizes: "Varies by sport category",
        coordinators: ["Chris Asir Samuel", "Vanshika Srinivas"]
    },
    4: {
        title: "Mr. Clarke's Journal",
        subtitle: "Infobahn (Writing)",
        date: "FEB 15",
        time: "Online Submission",
        venue: "Online Submissions",
        type: "Non-Technical",
        bgImage: MrClarkeJournalImg,
        description: "Channel your inner Mr. Clarke and pen down your thoughts! Write articles, stories, or technical blogs that inspire and inform.",
        rules: ["Individual participation only", "Word limit: 500-1500 words", "Original content only", "Submit in PDF format"],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Neha N", "Ekta Singh"]
    },
    5: {
        title: "The Snow Ball Showdown",
        subtitle: "Cosplay",
        date: "FEB 16",
        time: "02:00 PM - 05:00 PM",
        venue: "911 / Campus View",
        type: "Non-Technical",
        bgImage: TheSnowBallShowdownImg,
        description: "Transform into your favorite character! Whether it's Eleven, Hopper, or the Demogorgon - bring your best cosplay to the Snow Ball.",
        rules: ["Individual participation", "Costumes must be self-made or customized", "Props allowed (no sharp objects)", "5-minute stage presentation"],
        eligibility: "Open to all students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Shreya G", "Jai Pareek"]
    },
    6: {
        title: "The Prompt Flayer",
        subtitle: "Prompt Engineering",
        date: "FEB 17",
        time: "10:00 AM - 01:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: ThePromptFlayerImg,
        description: "Master the art of AI communication! Craft the perfect prompts to solve complex problems using AI tools like ChatGPT, Claude, and more.",
        rules: ["Individual participation", "3 rounds of increasing difficulty", "Internet access provided", "Time-bound challenges"],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["JV Baarathi", "Abhinav Jain"]
    },
    7: {
        title: "Mindscape Design",
        subtitle: "UI/UX",
        date: "FEB 18",
        time: "09:00 AM - 04:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: MindscapeDesignImg,
        description: "Design interfaces that users love! Create stunning UI/UX designs for given problem statements using tools like Figma or Adobe XD.",
        rules: ["Team of 1-2 members", "Bring your own laptop", "Design tools: Figma/Adobe XD/Sketch", "Prototype must be interactive"],
        eligibility: "Open to all design enthusiasts",
        prizes: "1st: ₹3500 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Kusum S", "Praneeth M"]
    },
    8: {
        title: "Will's Visions",
        subtitle: "Drawing/Painting",
        date: "FEB 19",
        time: "10:00 AM - 01:00 PM",
        venue: "Round Table Area (8th Floor)",
        type: "Non-Technical",
        bgImage: WillsVisionsImg,
        description: "Like Will's visions of the Upside Down, express your imagination through art! Showcase your drawing and painting skills on given themes.",
        rules: ["Individual participation", "Materials will be provided", "Theme revealed on spot", "Time limit: 2 hours"],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Bhagyashree Roy", "Sheethal T Kochery"]
    },
    9: {
        title: "Code Red: Demogorgon",
        subtitle: "Code Debug",
        date: "FEB 20",
        time: "10:00 AM - 01:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CodeRedDemogorgonImg,
        description: "Hunt down the bugs like hunting a Demogorgon! Find and fix errors in code snippets across multiple programming languages.",
        rules: ["Individual participation", "Languages: C, Java, Python", "Multiple rounds", "No internet access during event"],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Darshan Heble", "Hari Prasad"]
    },
    10: {
        title: "Capture the Gate",
        subtitle: "CTF",
        date: "FEB 21",
        time: "09:00 AM - 05:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CapturetheGateImg,
        description: "Break through the gate's defenses! A cybersecurity challenge where you solve puzzles, crack codes, and capture flags.",
        rules: ["Team of 2-3 members", "Bring your own laptop", "Categories: Web, Crypto, Forensics, Reversing", "No attacks on infrastructure"],
        eligibility: "Open to cybersecurity enthusiasts",
        prizes: "1st: ₹5000 | 2nd: ₹3000 | 3rd: ₹2000",
        coordinators: ["Amogh Sahore", "Deon Binny"]
    },
    11: {
        title: "D&D: Dumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        time: "02:00 PM - 05:00 PM",
        venue: "Room 815",
        type: "Non-Technical",
        bgImage: DumbDeedsImg,
        description: "No talking allowed! Act out movies, shows, and tech terms in this hilarious game of dumb charades with a Stranger Things twist.",
        rules: ["Team of 4 members", "Categories: Movies, TV Shows, Tech Terms", "Time limit per round: 2 minutes", "No props or sounds allowed"],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Annie Neena", "Binosh Sibi"]
    },
    12: {
        title: "Plan B: Joyce Blueprint",
        subtitle: "IT Manager",
        date: "FEB 24",
        time: "09:00 AM - 04:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: JoyceBlueprintImg,
        description: "Think like Joyce planning to save Will! Manage resources, make strategic decisions, and lead your team to victory in this IT management simulation.",
        rules: ["Team of 3-4 members", "Multiple business scenarios", "Presentation required", "Decision-making under pressure"],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹4000 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Jariwala Mohit S", "Nishit Daruwala"]
    }
};

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
      { id: 9, time: '09:00 AM', title: 'Code Red: Demogorgon (Code Debug)', venue: 'MCA Lab 811', type: 'Technical' },
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
