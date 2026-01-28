import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StrangerThingsPreloader } from './StrangerThingsPreloader';

// Context to manage page transitions globally
const PageTransitionContext = createContext();

/**
 * Hook to use page transitions from any component
 * Returns a navigate function that triggers the SVG animation before navigating
 */
export function usePageTransition() {
    const context = useContext(PageTransitionContext);
    if (!context) {
        throw new Error('usePageTransition must be used within PageTransitionProvider');
    }
    return context;
}

/**
 * PageTransitionProvider - Wraps the app to provide animated page transitions
 * Shows the SVG REVELATIONS animation between page navigations
 * Navigation happens immediately, overlay stays until animation completes
 */
export function PageTransitionProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const targetPathRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Check if both animation is done AND page has loaded
    useEffect(() => {
        if (animationDone && pageLoaded && showOverlay) {
            // Small delay for smoother transition
            setTimeout(() => {
                setShowOverlay(false);
                setIsTransitioning(false);
                setAnimationDone(false);
                setPageLoaded(false);
            }, 100);
        }
    }, [animationDone, pageLoaded, showOverlay]);

    // Detect when the page changes (navigation complete)
    useEffect(() => {
        if (isTransitioning && targetPathRef.current === location.pathname) {
            setPageLoaded(true);
        }
    }, [location.pathname, isTransitioning]);

    // Handle when animation calls onComplete
    const handleAnimationComplete = () => {
        setAnimationDone(true);
    };

    // Function to trigger animated navigation
    const navigateWithTransition = (path) => {
        // Don't transition if already on the same page
        if (path === location.pathname) return;

        // Store target and start transition
        targetPathRef.current = path;
        setIsTransitioning(true);
        setShowOverlay(true);
        setAnimationDone(false);
        setPageLoaded(false);

        // Navigate immediately - the page loads behind the overlay
        navigate(path);
    };

    return (
        <PageTransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
            {/* Show SVG transition animation overlay */}
            {showOverlay && (
                <StrangerThingsPreloader
                    onComplete={handleAnimationComplete}
                    text="REVELATIONS"
                />
            )}
            {children}
        </PageTransitionContext.Provider>
    );
}

export default PageTransitionProvider;
