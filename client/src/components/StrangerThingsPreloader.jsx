import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/StrangerThingsPreloader.css';

export function StrangerThingsPreloader({ onComplete, text = "REVELATIONS" }) {
    const containerRef = useRef(null);
    const textGroupRef = useRef(null);
    const lettersRef = useRef([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!textGroupRef.current) return;

        const letters = lettersRef.current.filter(Boolean);

        // 1. Setup Stroke Logic
        letters.forEach(letter => {
            if (letter) {
                const length = letter.getComputedTextLength() * 5;
                letter.style.strokeDasharray = length;
                letter.style.strokeDashoffset = length;
            }
        });

        // 2. Main Animation Timeline
        const tl = gsap.timeline({
            delay: 0.1, // Reduced start delay
            onComplete: () => {
                // Reduced wait time significantly (was 1500ms)
                setTimeout(() => {
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.4, // Faster fade out
                        onComplete: () => {
                            setIsVisible(false);
                            onComplete?.();
                        }
                    });
                }, 400); // Only wait 0.4s after animation finishes
            }
        });

        tl
            // Phase 1: Draw Strokes (Total time approx 1.8s)
            .to(letters, {
                strokeDashoffset: 0,
                duration: 1.2,      // Was 2.5
                ease: "power2.inOut",
                stagger: 0.08       // Was 0.2 (Tightens the sequence)
            })
            // Phase 2: Fade in Red Fill (Happens during the last part of strokes)
            .to(letters, {
                fill: "#e71d24",
                stroke: "#e71d24",
                strokeWidth: 1,
                duration: 0.8,      // Was 1.5
                ease: "power2.out",
                opacity: 1,
                filter: "drop-shadow(0 0 10px rgba(231, 29, 36, 0.8))"
            }, "-=1.0") // Overlap aggressively
            // Phase 3: Subtle Zoom
            .to(textGroupRef.current, {
                scale: 1.05, // Reduced scale slightly since time is shorter
                transformOrigin: "center center",
                duration: 2.5, // Matches total shortened time
                ease: "linear"
            }, 0);

        return () => {
            tl.kill();
            gsap.killTweensOf(letters);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div ref={containerRef} className="stranger-things-preloader">
            <div className="stranger-things-container">
                <svg viewBox="0 0 800 150">
                    <text
                        ref={textGroupRef}
                        x="50%"
                        y="100"
                        textAnchor="middle"
                        className="stranger-text-group"
                        style={{ letterSpacing: '-20px' }}
                    >
                        {text.split('').map((char, index) => (
                            <tspan
                                key={index}
                                ref={el => lettersRef.current[index] = el}
                                className="stranger-letter font-stranger"
                                style={{
                                    fill: 'transparent',
                                    stroke: '#e71d24',
                                    strokeWidth: '2px',
                                }}
                            >
                                {char}
                            </tspan>
                        ))}
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default StrangerThingsPreloader;