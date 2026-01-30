import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import { Navbar } from './Navbar';
import Footer from './Footer';
import '../styles/EventsPage.css';

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

gsap.registerPlugin(Flip);

// Event data with images and detailed info
const events = [
    {
        id: 1,
        title: "Vecna's Mind Maze",
        subtitle: "IT Quiz",
        date: "FEB 02",
        time: "09:00 AM - 12:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: VecnaMindMazeImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Enter the mind of Vecna and navigate through layers of technical puzzles. Test your knowledge across programming, databases, networking, and more in this thrilling IT quiz competition.",
        rules: [
            "Team of 2 members",
            "3 rounds: Prelims, Semi-finals, Finals",
            "No electronic devices allowed",
            "Decision of judges is final"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Kripa Dhandhania", "Adarsh Gupta"]
    },
    {
        id: 2,
        title: "Scoops Troop Snippets",
        subtitle: "Reel Making",
        date: "FEB 03",
        time: "All Day Event",
        venue: "Entire Campus / Online",
        type: "Non-Technical",
        bgImage: ScoopsTroopSnippetsImg,
        venueImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        description: "Unleash your creativity and storytelling skills! Create engaging reels that capture the essence of college life, technology, or the Stranger Things theme.",
        rules: [
            "Individual or team of 2",
            "Reel duration: 30-60 seconds",
            "Must include event hashtag",
            "No copyrighted music without permission"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Evana Joseph", "Bhavya Dhanuka"]
    },
    {
        id: 3,
        title: "Hawkins Arena",
        subtitle: "Sports",
        date: "FEB 07-08",
        time: "08:00 AM - 05:00 PM",
        venue: "Multiple Venues",
        type: "Non-Technical",
        bgImage: HawkinsArenaImg,
        venueImage: "https://images.unsplash.com/photo-1461896836934- voices-of-the-world?w=800&q=80",
        description: "Step into the Hawkins Arena for an action-packed sports extravaganza! Compete in various sports events and prove your athletic prowess.",
        rules: [
            "Team registrations required",
            "Proper sports attire mandatory",
            "Follow fair play guidelines",
            "Events: Cricket, Football, Badminton, Table Tennis"
        ],
        eligibility: "Open to all department students",
        prizes: "Varies by sport category",
        coordinators: ["Chris Asir Samuel", "Vanshika Srinivas"]
    },
    {
        id: 4,
        title: "Mr. Clarke's Journal",
        subtitle: "Infobahn (Writing)",
        date: "FEB 15",
        time: "Online Submission",
        venue: "Online Submissions",
        type: "Non-Technical",
        bgImage: MrClarkeJournalImg,
        venueImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
        description: "Channel your inner Mr. Clarke and pen down your thoughts! Write articles, stories, or technical blogs that inspire and inform.",
        rules: [
            "Individual participation only",
            "Word limit: 500-1500 words",
            "Original content only",
            "Submit in PDF format"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Neha N", "Ekta Singh"]
    },
    {
        id: 5,
        title: "The Snow Ball Showdown",
        subtitle: "Cosplay",
        date: "FEB 16",
        time: "02:00 PM - 05:00 PM",
        venue: "911 / Campus View",
        type: "Non-Technical",
        bgImage: TheSnowBallShowdownImg,
        venueImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
        description: "Transform into your favorite character! Whether it's Eleven, Hopper, or the Demogorgon - bring your best cosplay to the Snow Ball.",
        rules: [
            "Individual participation",
            "Costumes must be self-made or customized",
            "Props allowed (no sharp objects)",
            "5-minute stage presentation"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Shreya G", "Jai Pareek"]
    },
    {
        id: 6,
        title: "The Prompt Flayer",
        subtitle: "Prompt Engineering",
        date: "FEB 17",
        time: "10:00 AM - 01:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: ThePromptFlayerImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Master the art of AI communication! Craft the perfect prompts to solve complex problems using AI tools like ChatGPT, Claude, and more.",
        rules: [
            "Individual participation",
            "3 rounds of increasing difficulty",
            "Internet access provided",
            "Time-bound challenges"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["JV Baarathi", "Abhinav Jain"]
    },
    {
        id: 7,
        title: "Mindscape Design",
        subtitle: "UI/UX",
        date: "FEB 18",
        time: "09:00 AM - 04:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: MindscapeDesignImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Design interfaces that users love! Create stunning UI/UX designs for given problem statements using tools like Figma or Adobe XD.",
        rules: [
            "Team of 1-2 members",
            "Bring your own laptop",
            "Design tools: Figma/Adobe XD/Sketch",
            "Prototype must be interactive"
        ],
        eligibility: "Open to all design enthusiasts",
        prizes: "1st: ₹3500 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Kusum S", "Praneeth M"]
    },
    {
        id: 8,
        title: "Will's Visions",
        subtitle: "Drawing/Painting",
        date: "FEB 19",
        time: "10:00 AM - 01:00 PM",
        venue: "Round Table Area (8th Floor)",
        type: "Non-Technical",
        bgImage: WillsVisionsImg,
        venueImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
        description: "Like Will's visions of the Upside Down, express your imagination through art! Showcase your drawing and painting skills on given themes.",
        rules: [
            "Individual participation",
            "Materials will be provided",
            "Theme revealed on spot",
            "Time limit: 2 hours"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2000 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Bhagyashree Roy", "Sheethal T Kochery"]
    },
    {
        id: 9,
        title: "Code Red: Demogorgon",
        subtitle: "Code Debug",
        date: "FEB 20",
        time: "10:00 AM - 01:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CodeRedDemogorgonImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Hunt down the bugs like hunting a Demogorgon! Find and fix errors in code snippets across multiple programming languages.",
        rules: [
            "Individual participation",
            "Languages: C, Java, Python",
            "Multiple rounds",
            "No internet access during event"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹3000 | 2nd: ₹2000 | 3rd: ₹1000",
        coordinators: ["Darshan Heble", "Hari Prasad"]
    },
    {
        id: 10,
        title: "Capture the Gate",
        subtitle: "CTF",
        date: "FEB 21",
        time: "09:00 AM - 05:00 PM",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: CapturetheGateImg,
        venueImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        description: "Break through the gate's defenses! A cybersecurity challenge where you solve puzzles, crack codes, and capture flags.",
        rules: [
            "Team of 2-3 members",
            "Bring your own laptop",
            "Categories: Web, Crypto, Forensics, Reversing",
            "No attacks on infrastructure"
        ],
        eligibility: "Open to cybersecurity enthusiasts",
        prizes: "1st: ₹5000 | 2nd: ₹3000 | 3rd: ₹2000",
        coordinators: ["Amogh Sahore", "Deon Binny"]
    },
    {
        id: 11,
        title: "D&D: Dumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        time: "02:00 PM - 05:00 PM",
        venue: "Room 815",
        type: "Non-Technical",
        bgImage: DumbDeedsImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "No talking allowed! Act out movies, shows, and tech terms in this hilarious game of dumb charades with a Stranger Things twist.",
        rules: [
            "Team of 4 members",
            "Categories: Movies, TV Shows, Tech Terms",
            "Time limit per round: 2 minutes",
            "No props or sounds allowed"
        ],
        eligibility: "Open to all students",
        prizes: "1st: ₹2500 | 2nd: ₹1500 | 3rd: ₹1000",
        coordinators: ["Annie Neena", "Binosh Sibi"]
    },
    {
        id: 12,
        title: "Plan B: Joyce Blueprint",
        subtitle: "IT Manager",
        date: "FEB 24",
        time: "09:00 AM - 04:00 PM",
        venue: "Room 815",
        type: "Technical",
        bgImage: JoyceBlueprintImg,
        venueImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        description: "Think like Joyce planning to save Will! Manage resources, make strategic decisions, and lead your team to victory in this IT management simulation.",
        rules: [
            "Team of 3-4 members",
            "Multiple business scenarios",
            "Presentation required",
            "Decision-making under pressure"
        ],
        eligibility: "Open to all MCA and MSc students",
        prizes: "1st: ₹4000 | 2nd: ₹2500 | 3rd: ₹1500",
        coordinators: ["Jariwala Mohit S", "Nishit Daruwala"]
    },
];

const EventsPage = () => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);
    const modalOverlayRef = useRef(null);
    const boxesRef = useRef([]);
    const boxContentsRef = useRef([]);
    const boxIndexRef = useRef(undefined);
    const headerRef = useRef(null);

    // Initial header animation
    useEffect(() => {
        if (headerRef.current) {
            gsap.set(headerRef.current, { opacity: 0, y: -30 });
            gsap.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: 3.5
            });
        }
    }, []);

    useEffect(() => {
        const modal = modalRef.current;
        const modalContent = modalContentRef.current;
        const modalOverlay = modalOverlayRef.current;
        const boxes = boxesRef.current.filter(Boolean);
        const boxesContent = boxContentsRef.current.filter(Boolean);

        if (!modal || !modalContent || !modalOverlay) return;

        // Set initial state for boxes
        gsap.set(boxes, { opacity: 0, y: 50, scale: 0.9 });
        
        // Animate boxes with stagger
        gsap.to(boxes, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 3.7,
        });

        // Close modal function - called when clicking overlay
        const closeModal = () => {
            if (boxIndexRef.current === undefined) return;

            const currentBox = boxContentsRef.current[boxIndexRef.current];
            if (!currentBox) return;

            const state = Flip.getState(currentBox);
            boxes[boxIndexRef.current].appendChild(currentBox);
            boxIndexRef.current = undefined;

            gsap.to([modal, modalOverlay], {
                autoAlpha: 0,
                ease: "power2.out",
                duration: 0.4
            });

            Flip.from(state, {
                duration: 0.5,
                ease: "power2.out",
                absolute: true,
                scale: true,
                onComplete: () => {
                    gsap.set(currentBox, { zIndex: "auto", clearProps: "transform" });
                }
            });

            gsap.set(currentBox, { zIndex: 1002 });
        };

        // Open modal function - called when clicking a box
        const openModal = (box, i) => {
            if (boxIndexRef.current !== undefined) return; // Already open

            const state = Flip.getState(box);
            modalContent.appendChild(box);
            boxIndexRef.current = i;

            gsap.set(modal, { autoAlpha: 1 });
            gsap.set(box, { zIndex: 1002 });

            Flip.from(state, {
                duration: 0.5,
                ease: "power2.out",
                scale: true,
                absolute: true
            });

            gsap.to(modalOverlay, { autoAlpha: 0.75, duration: 0.4, ease: "power2.out" });
        };

        // Add click handlers for opening boxes
        const handlers = boxesContent.map((box, i) => {
            const handler = (e) => {
                e.stopPropagation();
                if (boxIndexRef.current === undefined) {
                    openModal(box, i);
                }
            };
            box.addEventListener('click', handler);
            return handler;
        });

        // Add click handler for overlay to close modal
        modalOverlay.addEventListener('click', closeModal);

        // Cleanup
        return () => {
            boxesContent.forEach((box, i) => {
                if (box && handlers[i]) {
                    box.removeEventListener('click', handlers[i]);
                }
            });
            modalOverlay.removeEventListener('click', closeModal);
        };
    }, []);

    return (
        <div className="events-page-container">
            {/* Background Effects */}
            <AtmosphereBackground className="fixed z-0" />
            <div className="overlay fixed inset-0 pointer-events-none z-0">
                <VeinOverlay className="top-0 right-0 w-48 h-48 md:w-96 md:h-96 translate-x-1/3 -translate-y-1/3" delay={0.2} rotate={90} />
                <VeinOverlay className="bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 -translate-x-1/3 translate-y-1/3" delay={0.4} rotate={-90} />
            </div>

            <Navbar transparent={true} />

            {/* Main Content Wrapper */}
            <div className="events-wrapper">
                {/* Header */}
                <div ref={headerRef} className="events-header-section">
                    <h2 className="font-stranger text-3xl sm:text-4xl md:text-6xl text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
                        REVELATIONS EVENTS
                    </h2>
                    <p className="font-typewriter text-gray-500 mt-2 tracking-widest text-xs sm:text-sm md:text-base">
                        CLICK ON ANY EVENT TO EXPLORE // LEVEL 4 CLEARANCE
                    </p>
                </div>

                {/* Boxes Container */}
                <div className="boxes-container">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            ref={(el) => (boxesRef.current[index] = el)}
                            className="box"
                        >
                            <div
                                ref={(el) => (boxContentsRef.current[index] = el)}
                                className={`box-content box-content-${index + 1}`}
                                style={{ backgroundImage: `url(${event.bgImage})` }}
                            >
                                {/* Event info overlay */}
                                <div className="event-overlay">
                                    <h3 className="event-title">{event.title}</h3>
                                    <span className="event-subtitle">{event.subtitle}</span>
                                    <div className="event-meta">
                                        <span className="event-date">{event.date}</span>
                                        <span className="event-type">{event.type}</span>
                                    </div>
                                    
                                    {/* Detailed info - visible only in modal */}
                                    <div className="event-details">
                                        {/* Venue Image */}
                                        {event.venueImage && (
                                            <div className="venue-image-container">
                                                <img src={event.venueImage} alt={`${event.venue} venue`} className="venue-image" />
                                                <span className="venue-image-label">📍 {event.venue}</span>
                                            </div>
                                        )}
                                        
                                        <p className="event-description">{event.description}</p>
                                        
                                        <div className="event-info-grid">
                                            <div className="event-info-item">
                                                <span className="info-label">📍 Venue</span>
                                                <span className="info-value">{event.venue}</span>
                                            </div>
                                            <div className="event-info-item">
                                                <span className="info-label">🕐 Time</span>
                                                <span className="info-value">{event.time}</span>
                                            </div>
                                            <div className="event-info-item">
                                                <span className="info-label">👥 Eligibility</span>
                                                <span className="info-value">{event.eligibility}</span>
                                            </div>
                                            <div className="event-info-item">
                                                <span className="info-label">🏆 Prizes</span>
                                                <span className="info-value">{event.prizes}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="event-rules">
                                            <span className="info-label">📋 Rules</span>
                                            <ul className="rules-list">
                                                {event.rules.map((rule, idx) => (
                                                    <li key={idx}>{rule}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="event-coordinators">
                                            <span className="info-label">📞 Coordinators</span>
                                            <span className="info-value">{event.coordinators.join(' | ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div ref={modalRef} className="events-modal">
                <div ref={modalOverlayRef} className="modal-overlay"></div>
                <div ref={modalContentRef} className="modal-content"></div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventsPage;
