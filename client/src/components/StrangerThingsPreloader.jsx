import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/StrangerThingsPreloader.css';

/**
 * StrangerThingsPreloader - A Stranger Things inspired SVG line animation preloader
 * Uses GSAP for smooth stroke drawing animation with neon glow effects
 * Ends with a curved wave reveal from bottom
 */
export function StrangerThingsPreloader({ onComplete, text = "REVELATIONS" }) {
    const containerRef = useRef(null);
    const textGroupRef = useRef(null);
    const textRef = useRef(null);
    const curveRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [showCurveReveal, setShowCurveReveal] = useState(false);

    // Animate the curve when it becomes visible
    useEffect(() => {
        if (showCurveReveal && curveRef.current) {
            // Small delay to ensure element is fully rendered
            requestAnimationFrame(() => {
                gsap.to(curveRef.current, {
                    y: '-110%',
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setIsVisible(false);
                        onComplete?.();
                    }
                });
            });
        }
    }, [showCurveReveal, onComplete]);

    useEffect(() => {
        if (!textRef.current) return;

        const textElement = textRef.current;

        // Calculate stroke length and set up dasharray/dashoffset
        const length = textElement.getComputedTextLength() * 2.5;
        textElement.style.strokeDasharray = length;
        textElement.style.strokeDashoffset = length;

        // Create the main GSAP animation timeline
        const tl = gsap.timeline({
            delay: 0.2,
            onComplete: () => {
                // Show the curved reveal animation after a brief pause
                setTimeout(() => {
                    setShowCurveReveal(true);
                }, 500);
            }
        });

        // Phase 1: Stroke Drawing Animation
        tl.to(textElement, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })

            // Phase 2: Fill Fade In
            .to(textElement, {
                fill: "#e71d24",
                strokeWidth: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.3")

            // Phase 3: Quick Zoom effect
            .to(textGroupRef.current, {
                scale: 1.05,
                transformOrigin: "center center",
                duration: 2,
                ease: "linear"
            }, 0);

        // Phase 4: Flickering Neon Glow (continuous)
        const glowTween = gsap.to(textElement, {
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
            glowTween.kill();
            gsap.killTweensOf(textElement);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="stranger-things-preloader"
        >
            <div className="stranger-things-container">
                <svg viewBox="0 0 800 150">
                    <g ref={textGroupRef} id="text-group">
                        <text
                            ref={textRef}
                            className="stranger-letter"
                            x="400"
                            y="100"
                            textAnchor="middle"
                        >
                            {text}
                        </text>
                    </g>
                </svg>
            </div>

            {/* Glow overlay for extra effect */}
            <div className="glow-overlay"></div>

            {/* Curved reveal overlay - slides up to reveal page */}
            {showCurveReveal && (
                <div
                    ref={curveRef}
                    className="curve-reveal-overlay"
                >
                    <svg
                        viewBox="0 0 100 110"
                        preserveAspectRatio="none"
                        className="curve-svg"
                    >
                        {/* Curved shape that covers screen with wave at bottom */}
                        <path
                            d="M0,0 L100,0 L100,100 Q75,115 50,100 Q25,85 0,100 Z"
                            fill="#000"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default StrangerThingsPreloader;
