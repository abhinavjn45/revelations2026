import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import { Navbar } from './Navbar';
import Footer from './Footer';
import '../styles/EventsPage.css';

gsap.registerPlugin(Flip);

// Event data with images - customize these
const events = [
    {
        id: 1,
        title: "Vecna's Mind Maze",
        subtitle: "IT Quiz",
        date: "FEB 02",
        venue: "Room 815",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    },
    {
        id: 2,
        title: "Scoops Troop Snippets",
        subtitle: "Reel Making",
        date: "FEB 03",
        venue: "Entire Campus / Online",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    },
    {
        id: 3,
        title: "Hawkins Arena",
        subtitle: "Sports",
        date: "FEB 07-08",
        venue: "Multiple Venues",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
    },
    {
        id: 4,
        title: "Mr. Clarke's Journal",
        subtitle: "Infobahn (Writing)",
        date: "FEB 15",
        venue: "Online Submissions",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    },
    {
        id: 5,
        title: "The Snow Ball Showdown",
        subtitle: "Cosplay",
        date: "FEB 16",
        venue: "911 / Campus View",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80",
    },
    {
        id: 6,
        title: "The Prompt Flayer",
        subtitle: "Prompt Engineering",
        date: "FEB 17",
        venue: "Room 815",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
    },
    {
        id: 7,
        title: "Mindscape Design",
        subtitle: "UI/UX",
        date: "FEB 18",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80",
    },
    {
        id: 8,
        title: "Will's Visions",
        subtitle: "Drawing/Painting",
        date: "FEB 19",
        venue: "Round Table Area (8th Floor)",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80",
    },
    {
        id: 9,
        title: "Code Red: Demogorgon",
        subtitle: "Code Debug",
        date: "FEB 20",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    },
    {
        id: 10,
        title: "Capture the Gate",
        subtitle: "CTF",
        date: "FEB 21",
        venue: "MCA Lab 811",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80",
    },
    {
        id: 11,
        title: "D&D: Dumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        venue: "Room 815",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=1920&q=80",
    },
    {
        id: 12,
        title: "Plan B: Joyce Blueprint",
        subtitle: "IT Manager",
        date: "FEB 24",
        venue: "Room 815",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    },
];

const EventsPage = () => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);
    const modalOverlayRef = useRef(null);
    const boxesRef = useRef([]);
    const boxContentsRef = useRef([]);
    const boxIndexRef = useRef(undefined);

    useEffect(() => {
        const modal = modalRef.current;
        const modalContent = modalContentRef.current;
        const modalOverlay = modalOverlayRef.current;
        const boxes = boxesRef.current.filter(Boolean);
        const boxesContent = boxContentsRef.current.filter(Boolean);

        if (!modal || !modalContent || !modalOverlay) return;

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
                <div className="events-header-section">
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
