import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/animations.module.css';
import logoImage from '../assets/images/revelations-logo.png';
import { 
  Eleven, Demogorgon, Vecna, MindFlayer, Will, Spore, GridPattern 
} from './Characters';
import { ParticleExplosion, RippleEffect, ElectricityBolts, PortalBg, FlashOverlay } from './Effects';

const LOADING_MESSAGES = [
  'Scanning for threats...',
  'Opening portal...',
  'Detecting parallel dimensions...',
  'Establishing connection...',
  'Bypassing Hawkins firewall...',
  'Loading Mind Flayer protocols...',
  'Syncing with the Upside Down...',
  'Calibrating Demogorgon sensors...',
  'Almost there...'
];

export function Preloader({ onComplete }) {
  const [animationState, setAnimationState] = useState('initial');
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [screenShake, setScreenShake] = useState(false);
  const [flashTrigger, setFlashTrigger] = useState(false);
  const [showElectricity, setShowElectricity] = useState(false);
  const [portalVisible, setPortalVisible] = useState(false);
  const contentContainerRef = useRef(null);
  const logoContainerRef = useRef(null);

  // Start the bang-in animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      startBangInSequence();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const startBangInSequence = async () => {
    // Show portal
    setPortalVisible(true);

    // Flash effect
    setFlashTrigger(true);
    setTimeout(() => setFlashTrigger(false), 300);

    // Screen shake
    setScreenShake(true);

    // Show logo with animation
    setAnimationState('bangIn');

    // Create effects after animation starts
    setTimeout(() => {
      setShowElectricity(true);
    }, 400);

    // Remove screen shake
    setTimeout(() => {
      setScreenShake(false);
    }, 500);

    // Show loading section
    setTimeout(() => {
      setAnimationState('loading');
    }, 1200);
  };

  // Progress bar animation
  useEffect(() => {
    if (animationState !== 'loading') return;

    let progress = 0;
    const duration = 3000;
    const interval = 50;
    const increment = (100 / duration) * interval;
    let messageIndex = 0;

    const progressInterval = setInterval(() => {
      progress += increment;

      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);

        setTimeout(() => {
          setAnimationState('complete');
          onComplete?.();
        }, 500);
      }

      setProgress(progress);

      // Update loading message
      if (progress % 12 < increment && messageIndex < LOADING_MESSAGES.length) {
        setLoadingMessage(LOADING_MESSAGES[messageIndex]);
        messageIndex++;
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [animationState, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] vignette scanlines">
      {/* Background animated grid */}
      <GridPattern />

      {/* Floating Stranger Things Characters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Eleven delay={0} />
        <Demogorgon delay={1} />
        <Vecna delay={2} />
        <MindFlayer delay={1.5} />
        <Will delay={0.5} />
        <Spore delay={0.3} variant={1} />
        <Spore delay={1.2} variant={2} />
      </div>

      {/* Effects */}
      <FlashOverlay trigger={flashTrigger} />
      <RippleEffect triggerRipple={animationState === 'bangIn'} />
      <ParticleExplosion 
        triggerExplosion={animationState === 'bangIn'} 
        x={typeof window !== 'undefined' ? window.innerWidth / 2 : 0}
        y={typeof window !== 'undefined' ? window.innerHeight / 2 : 0}
        count={40}
      />

      {/* Main content container */}
      <div 
        ref={contentContainerRef}
        className={`relative z-10 flex flex-col items-center justify-center w-full px-4 ${screenShake ? styles.screenShake : ''}`}
      >
        {/* Portal effect behind logo */}
        <PortalBg show={portalVisible} />

        {/* Logo Container */}
        <div 
          ref={logoContainerRef}
          className={`${animationState === 'bangIn' ? styles.bangInAnimation : ''} ${
            animationState === 'initial' ? 'opacity-0' : ''
          } mb-8 relative`}
        >
          {/* Electricity bolts */}
          <ElectricityBolts show={showElectricity} />

          {/* Main Logo */}
          <div className="text-center relative">
            <img
              src={logoImage}
              alt="Revelations 2026"
              className="mx-auto w-64 md:w-80 lg:w-[28rem]"
            />
            <p className="font-typewriter text-xs md:text-sm text-gray-600 mt-3 tracking-wider">
              THE UPSIDE DOWN AWAITS
            </p>
          </div>
          </div>
        
        {/* Loading Section (stacked under logo) */}
        {(animationState === 'loading' || animationState === 'complete') && (
          <div className={`w-full max-w-md px-4 ${styles.fadeIn}`} style={{ opacity: animationState === 'loading' ? '1' : '1' }}>
            {/* Loading Text */}
            <div className="text-center mb-6">
              <p 
                className={`font-stranger text-xl md:text-2xl text-red-400 ${styles.glitchText} relative tracking-wider`}
                data-text="ENTERING THE UPSIDE DOWN"
              >
                ENTERING THE UPSIDE DOWN
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="relative">
              {/* Progress bar background */}
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-red-900/50 shadow-lg">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-red-600/20 blur-sm"></div>

                {/* Progress fill */}
                <div 
                  className={`h-full bg-gradient-to-r from-red-700 via-red-500 to-red-600 rounded-full relative shadow-[0_0_10px_#ff3333]`}
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${styles.shimmer}`}></div>
                </div>
              </div>

              {/* Percentage Counter */}
              <div className="flex justify-between items-center mt-3">
                <span className="font-typewriter text-xs text-gray-600">INITIALIZING...</span>
                <span className={`font-stranger text-lg text-red-500 ${styles.pulseText}`}>
                  {Math.floor(progress)}%
                </span>
              </div>

              {/* Loading messages */}
              <div className="mt-4 text-center min-h-[20px]">
                <p className="font-typewriter text-xs text-gray-700 italic">
                  {loadingMessage}
                </p>
              </div>
            </div>
          </div>
        )}
        </div>


      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 opacity-30">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
        <span className="font-typewriter text-xs text-gray-700">CONNECTING TO PARALLEL NETWORK</span>
        <div 
          className="w-2 h-2 bg-red-600 rounded-full animate-ping" 
          style={{ animationDelay: '0.5s' }}
        ></div>
      </div>
    </div>
  );
}
