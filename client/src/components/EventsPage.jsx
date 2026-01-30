import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import { Navbar } from './Navbar';
import Footer from './Footer';
import '../styles/EventsPage.css';
import { events } from '../data/eventsData';

gsap.registerPlugin(Flip);

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
                                                <span className="info-value">
                                                    {Array.isArray(event.prizes) ? event.prizes.join(' | ') : event.prizes}
                                                </span>
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
                                            <span className="info-value">
                                                {Array.isArray(event.coordinators)
                                                    ? event.coordinators.map(c =>
                                                        typeof c === 'object'
                                                            ? `${c.name}${c.contact ? ` (${c.contact})` : ''}`
                                                            : c
                                                    ).join(' | ')
                                                    : event.coordinators
                                                }
                                            </span>
                                        </div>

                                        {/* Action Buttons */}
                                        {/* Action Buttons */}
                                        <div className="event-actions">
                                            {/* Registration Button - Only show if status is 'open' */}
                                            {event.registrationStatus === 'open' && event.registrationLink && (
                                                <a
                                                    href={event.registrationLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-btn register-btn"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    🎫 Register Now
                                                </a>
                                            )}

                                            {/* Detailed Rules Button */}
                                            {event.rulesLink && (
                                                <a
                                                    href={event.rulesLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-btn rules-btn"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    📄 Detailed Rules
                                                </a>
                                            )}
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
