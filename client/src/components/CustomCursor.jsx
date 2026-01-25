import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(220, 38, 38, 0.3)", // Red glow
            border: "1px solid rgba(220, 38, 38, 0.8)",
            mixBlendMode: "screen"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "rgba(220, 38, 38, 0.1)",
            border: "2px solid rgba(220, 38, 38, 1)",
            mixBlendMode: "screen"
        }
    };

    const centerDotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            height: 8,
            width: 8,
            backgroundColor: "#ef4444" // red-500
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            height: 8,
            width: 8,
            backgroundColor: "#ffffff"
        }
    };

    return (
        <>
            {/* Main trailing glow */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />

            {/* Center sharp dot */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={centerDotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 1500, damping: 50, mass: 0.1 }}
            />
        </>
    );
}
