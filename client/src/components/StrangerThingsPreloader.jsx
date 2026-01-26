import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/StrangerThingsPreloader.css';

/**
 * StrangerThingsPreloader - A Stranger Things inspired SVG line animation preloader
 * Uses GSAP for smooth stroke drawing animation with neon glow effects
 */
export function StrangerThingsPreloader({ onComplete, text = "REVELATIONS" }) {
    const containerRef = useRef(null);
    const textGroupRef = useRef(null);
    const lettersRef = useRef([]);
    const [isVisible, setIsVisible] = useState(true);

    // Letter spacing configuration
    const spacing = 65;

    useEffect(() => {
        if (!textGroupRef.current) return;

        const letters = lettersRef.current.filter(Boolean);

        // Calculate stroke length for each letter and set up dasharray/dashoffset
        letters.forEach(letter => {
            if (letter) {
                const length = letter.getComputedTextLength() * 3; // Estimate stroke length
                letter.style.strokeDasharray = length;
                letter.style.strokeDashoffset = length;
            }
        });

        // Create the main GSAP animation timeline
        const tl = gsap.timeline({
            delay: 0.5,
            onComplete: () => {
                // Wait a bit then fade out and complete
                setTimeout(() => {
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            setIsVisible(false);
                            onComplete?.();
                        }
                    });
                }, 1500);
            }
        });

        // Phase 1: Stroke Drawing Animation (R -> S sequence)
        tl.to(letters, {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power2.inOut",
            stagger: 0.2
        })

            // Phase 2: Fill Fade In
            .to(letters, {
                fill: "#e71d24",
                strokeWidth: 0,
                duration: 1.5,
                ease: "power2.out",
                opacity: 1
            }, "-=1") // Overlap slightly with drawing

            // Phase 3: Slow Zoom effect
            .to(textGroupRef.current, {
                scale: 1.1,
                transformOrigin: "center center",
                duration: 5,
                ease: "linear"
            }, 0); // Start scaling at the beginning

        // Phase 4: Flickering Neon Glow (continuous)
        gsap.to(letters, {
            filter: "drop-shadow(0 0 15px rgba(231, 29, 36, 0.8))",
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.2,
            ease: "power1.inOut"
        });

        // Cleanup
        return () => {
            tl.kill();
            gsap.killTweensOf(letters);
        };
    }, [onComplete]);

    // Calculate starting X position for centering
    const startX = 400 - ((text.length * spacing) / 2);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="stranger-things-preloader"
        >
            <div className="stranger-things-container">
                <svg viewBox="0 0 800 150">
                    <g ref={textGroupRef} id="text-group">
                        {text.split('').map((char, index) => (
                            <text
                                key={index}
                                ref={el => lettersRef.current[index] = el}
                                className="stranger-letter"
                                x={startX + (index * spacing)}
                                y="100"
                            >
                                {char}
                            </text>
                        ))}
                    </g>
                </svg>
            </div>

            {/* Glow overlay for extra effect */}
            <div className="glow-overlay"></div>
        </div>
    );
}

export default StrangerThingsPreloader;
