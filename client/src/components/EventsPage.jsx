import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import '../styles/EventsPage.css';

gsap.registerPlugin(Observer);

// Event data - you can customize these
const events = [
    {
        id: 1,
        title: "Revelations 2026",
        bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    },
    {
        id: 2,
        title: "Opening Ceremony",
        bgImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    },
    {
        id: 3,
        title: "Tech Summit",
        bgImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
    },
    {
        id: 4,
        title: "Hackathon",
        bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    },
    {
        id: 5,
        title: "Closing Night",
        bgImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80",
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

const EventsPage = () => {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const imagesRef = useRef([]);
    const outerWrappersRef = useRef([]);
    const innerWrappersRef = useRef([]);
    const charsRefs = useRef(events.map(() => ({ current: [] })));
    const currentIndexRef = useRef(-1);
    const animatingRef = useRef(false);
    const observerRef = useRef(null);
    const [initialized, setInitialized] = useState(false);

    // Initialize character refs array
    useEffect(() => {
        charsRefs.current = events.map(() => ({ current: [] }));
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (!initialized) return;

        const sections = sectionsRef.current.filter(Boolean);
        const images = imagesRef.current.filter(Boolean);
        const outerWrappers = outerWrappersRef.current.filter(Boolean);
        const innerWrappers = innerWrappersRef.current.filter(Boolean);

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

                // Animate characters
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
    }, [initialized]);

    return (
        <div ref={containerRef} className="events-page-container">
            <header className="events-header">
                <div className="events-logo">Revelations 2026</div>
                <div className="events-nav">
                    <a href="/" className="events-nav-link">Home</a>
                </div>
            </header>

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
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default EventsPage;
