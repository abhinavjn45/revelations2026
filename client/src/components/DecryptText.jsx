import React, { useState, useEffect } from 'react';

// Decrypting Text Effect
export default function DecryptText({ text, className = "" }) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const [displayText, setDisplayText] = useState(() =>
        text.split('').map(() => chars[Math.floor(Math.random() * chars.length)])
    );

    useEffect(() => {
        let interval;
        let iteration = 0;

        const animate = () => {
            clearInterval(interval);
            interval = setInterval(() => {
                setDisplayText(prev =>
                    text.split('').map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 2; // Speed up slightly
            }, 30);
        };

        // Start animation immediately
        animate();

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={className}>
            {displayText.join('')}
        </span>
    );
};
