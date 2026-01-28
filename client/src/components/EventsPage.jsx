import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import AtmosphereBackground from './AtmosphereBackground';
import VeinOverlay from './VeinOverlay';
import DecryptText from './DecryptText';
import '../styles/EventsPage.css';

gsap.registerPlugin(Observer);

// Event data - you can customize these
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
        bgImage: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?w=1920&q=80",
    },
    {
        id: 8,
        title: "Will's Visions",
        subtitle: "Drawing/Painting",
        date: "FEB 19",
        venue: "Round Table Area",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80",
    },
    {
        id: 9,
        title: "Code Red",
        subtitle: "Demogorgon Debug",
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
        bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    },
    {
        id: 11,
        title: "Ddumb Deeds",
        subtitle: "Dumb Charades",
        date: "FEB 23",
        venue: "Room 815",
        type: "Non-Technical",
        bgImage: "https://images.unsplash.com/photo-1624138784181-dc7f5b759b2d?w=1920&q=80",
    },
    {
        id: 12,
        title: "Planner B",
        subtitle: "IT Manager",
        date: "FEB 24",
        venue: "Room 815",
        type: "Technical",
        bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80",
    },
];

// Split text into animated characters
const AnimatedHeading = React.forwardRef(({ text, charsRef }, ref) => {
    const words = text.split(' ');
    let charIndex = 0;

    return (
        <h2 ref={ref} className="events-section-heading">
            <div className="clip-text">
                {words.map((word, wordIdx) => (
                    <React.Fragment key={wordIdx}>
                        <span className="word" style={{ display: 'inline-block' }}>
                            {word.split('').map((char, charIdx) => {
                                const currentCharIndex = charIndex++;
                                return (
                                    <span
                                        key={charIdx}
                                        ref={(el) => {
                                            if (charsRef.current) {
                                                charsRef.current[currentCharIndex] = el;
                                            }
                                        }}
                                        className="char"
                                        style={{ display: 'inline-block', opacity: 0 }}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </span>
                        {wordIdx < words.length - 1 && (
                            <span style={{ display: 'inline-block' }}>&nbsp;</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </h2>
    );
});

AnimatedHeading.displayName = 'AnimatedHeading';

const EventDetails = React.forwardRef(({ event }, ref) => {
    return (
        <div ref={ref} className="event-info-container">
            <h3 className="event-info-title">{event.subtitle}</h3>
            <div className="event-meta-grid">
                <div className="event-meta-item">
                    <span className="event-meta-label"><DecryptText text="DATE" /></span>
                    <span className="event-meta-value">{event.date}</span>
                </div>
                <div className="event-meta-item">
                    <span className="event-meta-label"><DecryptText text="VENUE" /></span>
                    <span className="event-meta-value">{event.venue}</span>
                </div>
                <div className="event-meta-item">
                    <span className="event-meta-label"><DecryptText text="TYPE" /></span>
                    <span className="event-meta-value">{event.type}</span>
                </div>
            </div>
        </div>
    );
});

EventDetails.displayName = 'EventDetails';

import { Navbar } from './Navbar';
import Footer from './Footer';

const EventsPage = () => {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const imagesRef = useRef([]);
    const outerWrappersRef = useRef([]);
    const innerWrappersRef = useRef([]);
    const charsRefs = useRef([...events.map(() => ({ current: [] })), { current: [] }]);
    const detailsRefs = useRef([]); // Refs for detail containers
    const currentIndexRef = useRef(-1);
    const animatingRef = useRef(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const sections = sectionsRef.current.filter(Boolean);
        const images = imagesRef.current.filter(Boolean);
        const outerWrappers = outerWrappersRef.current.filter(Boolean);
        const innerWrappers = innerWrappersRef.current.filter(Boolean);
        // Details refs might contain nulls if not rendered yet, but should exist
        const details = detailsRefs.current;

        if (sections.length === 0) return;

        const wrap = gsap.utils.wrap(0, sections.length);

        // Initial setup
        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index, direction) {
            index = wrap(index);
            animatingRef.current = true;

            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;
            const currentIndex = currentIndexRef.current;

            const tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => { animatingRef.current = false; }
            });

            if (currentIndex >= 0 && sections[currentIndex]) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor })
                    .set(sections[currentIndex], { autoAlpha: 0 });
            }

            if (sections[index]) {
                gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

                tl.fromTo(
                    [outerWrappers[index], innerWrappers[index]],
                    { yPercent: (i) => i ? -100 * dFactor : 100 * dFactor },
                    { yPercent: 0 },
                    0
                )
                    .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

                // Animate characters (only if they exist for this section)
                const chars = charsRefs.current[index]?.current?.filter(Boolean);
                if (chars && chars.length > 0) {
                    tl.fromTo(
                        chars,
                        { autoAlpha: 0, yPercent: 150 * dFactor },
                        {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2",
                            stagger: {
                                each: 0.02,
                                from: "random"
                            }
                        },
                        0.2
                    );
                }

                // Animate Details (only if they exist for this section)
                const currentDetail = detailsRefs.current[index];
                if (currentDetail) {
                    tl.fromTo(
                        currentDetail,
                        { autoAlpha: 0, y: 20 },
                        { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
                        0.5 // Delay slightly after title starts
                    );
                }
            }

            currentIndexRef.current = index;
        }

        // Create observer for scroll/touch interactions
        observerRef.current = Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
            onUp: () => !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
            tolerance: 10,
            preventDefault: true
        });

        // Initialize first section after a short delay
        const timer = setTimeout(() => {
            gotoSection(0, 1);
        }, 100);

        // Cleanup
        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.kill();
            }
            gsap.killTweensOf([...sections, ...images, ...outerWrappers, ...innerWrappers]);
        };
    }, []);

    return (
        <div ref={containerRef} className="events-page-container overflow-hidden">
            {/* Atmosphere Fixed Background */}
            <AtmosphereBackground className="fixed z-0 opacity-60" />
            <div className="fixed inset-0 pointer-events-none z-[100]">
                <VeinOverlay className="top-0 right-0 w-48 h-48 md:w-96 md:h-96 translate-x-1/3 -translate-y-1/3" delay={0.2} rotate={90} />
                <VeinOverlay className="bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 -translate-x-1/3 translate-y-1/3" delay={0.4} rotate={-90} />
            </div>

            <Navbar transparent={true} />

            {events.map((event, index) => (
                <section
                    key={event.id}
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className={`events-section section-${index + 1}`}
                >
                    <div
                        ref={(el) => (outerWrappersRef.current[index] = el)}
                        className="events-outer"
                    >
                        <div
                            ref={(el) => (innerWrappersRef.current[index] = el)}
                            className="events-inner"
                        >
                            <div
                                ref={(el) => (imagesRef.current[index] = el)}
                                className="events-bg"
                                style={{
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), url(${event.bgImage})`,
                                }}
                            >
                                <AnimatedHeading
                                    text={event.title}
                                    charsRef={charsRefs.current[index]}
                                />
                                <EventDetails
                                    event={event}
                                    ref={(el) => (detailsRefs.current[index] = el)}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Footer Section */}
            <section
                ref={(el) => (sectionsRef.current[events.length] = el)}
                className={`events-section section-footer`}
            >
                <div
                    ref={(el) => (outerWrappersRef.current[events.length] = el)}
                    className="events-outer"
                >
                    <div
                        ref={(el) => (innerWrappersRef.current[events.length] = el)}
                        className="events-inner"
                    >
                        <div
                            ref={(el) => (imagesRef.current[events.length] = el)}
                            className="events-bg"
                            style={{ backgroundColor: '#000' }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
