import React, { useState } from 'react';
import TimerZeroAnimation from './TimerZeroAnimation';

/**
 * Demo page to preview the Timer Zero Animation
 * Access at /animation-demo
 */
export default function AnimationDemoPage() {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const handleTriggerAnimation = () => {
        setTriggerAnimation(true);
    };

    const handleAnimationComplete = () => {
        setTriggerAnimation(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8">
            {/* Background vignette */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1
                    className="font-stranger text-4xl md:text-6xl mb-4"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #dc2626',
                        textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
                    }}
                >
                    ANIMATION DEMO
                </h1>

                <p className="font-typewriter text-gray-400 mb-8 max-w-md mx-auto">
                    Click the button below to preview the epic "Upside Down Portal" animation
                    that plays when the countdown timer reaches zero.
                </p>

                <button
                    onClick={handleTriggerAnimation}
                    disabled={triggerAnimation}
                    className={`
            px-8 py-4 
            font-stranger text-xl tracking-wider
            border-2 border-red-600
            transition-all duration-300
            ${triggerAnimation
                            ? 'bg-red-900/30 text-red-400 cursor-not-allowed opacity-50'
                            : 'bg-transparent text-red-500 hover:bg-red-600/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105'
                        }
          `}
                >
                    {triggerAnimation ? 'ANIMATION PLAYING...' : 'TRIGGER ANIMATION'}
                </button>

                <div className="mt-12 space-y-4 text-gray-600 font-typewriter text-sm">
                    <p>Animation Duration: ~8.5 seconds</p>
                    <p>Phases: Flicker → Portal → Reveal → Fadeout</p>
                </div>

                {/* Instructions */}
                <div className="mt-8 p-4 border border-red-900/30 rounded-lg bg-red-900/10 max-w-lg mx-auto">
                    <h3 className="font-stranger text-red-500 text-lg mb-2">Animation Features:</h3>
                    <ul className="font-typewriter text-gray-400 text-xs text-left space-y-1">
                        <li>• Intense light flicker effect</li>
                        <li>• Lightning bolts from center</li>
                        <li>• Particle explosion</li>
                        <li>• Portal rift with tentacles</li>
                        <li>• Floating Upside Down spores</li>
                        <li>• Dramatic text reveal</li>
                        <li>• Scanlines & vignette overlay</li>
                    </ul>
                </div>
            </div>

            {/* The Animation Component */}
            <TimerZeroAnimation
                trigger={triggerAnimation}
                onComplete={handleAnimationComplete}
            />
        </div>
    );
}
