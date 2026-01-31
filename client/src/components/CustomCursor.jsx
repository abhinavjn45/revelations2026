import React, { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const currentSize = useRef(32);
    const targetSize = useRef(32);
    const isHovering = useRef(false);
    const rafId = useRef(null);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = useCallback(() => {
        // Smooth follow for outer ring (slower trailing effect)
        cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
        cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

        // Faster follow for center dot
        dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.35);
        dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.35);

        // Smooth size transition using lerp
        currentSize.current = lerp(currentSize.current, targetSize.current, 0.2);

        if (cursorRef.current) {
            const size = currentSize.current;
            // Position outer ring with its own slower position, centered with size offset
            cursorRef.current.style.width = `${size}px`;
            cursorRef.current.style.height = `${size}px`;
            cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0)`;
        }

        if (dotRef.current) {
            dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0)`;
        }

        rafId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        // Start animation loop
        rafId.current = requestAnimationFrame(animate);

        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;

            // Check if hovering over clickable elements
            const target = e.target;
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[role="button"]') ||
                getComputedStyle(target).cursor === 'pointer';

            const wasHovering = isHovering.current;
            isHovering.current = !!isClickable;

            // Update target size for smooth lerp
            targetSize.current = isHovering.current ? 56 : 32;

            // Update hover styles
            if (cursorRef.current && wasHovering !== isHovering.current) {
                if (isHovering.current) {
                    cursorRef.current.style.backgroundColor = 'rgba(220, 38, 38, 0.15)';
                    cursorRef.current.style.borderColor = 'rgba(220, 38, 38, 1)';
                    dotRef.current.style.backgroundColor = '#ffffff';
                } else {
                    cursorRef.current.style.backgroundColor = 'rgba(220, 38, 38, 0.3)';
                    cursorRef.current.style.borderColor = 'rgba(220, 38, 38, 0.8)';
                    dotRef.current.style.backgroundColor = '#ef4444';
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [animate]);

    return (
        <>
            {/* Main trailing glow */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block will-change-transform"
                style={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'rgba(220, 38, 38, 0.3)',
                    border: '1px solid rgba(220, 38, 38, 0.8)',
                    mixBlendMode: 'screen',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
            />

            {/* Center sharp dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block will-change-transform"
                style={{
                    width: 8,
                    height: 8,
                    backgroundColor: '#ef4444',
                    transition: 'background-color 0.3s ease',
                }}
            />
        </>
    );
}
