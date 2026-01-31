import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import EventsPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import { StrangerThingsPreloader } from './components/StrangerThingsPreloader';
import LeaderboardPage from './components/LeaderboardPage';
import SchedulePage from './components/SchedulePage';
import TeamDetailsPage from './components/TeamDetailsPage';
import DownloadTeamSheet from './components/DownloadTeamSheet';
import AnimationDemoPage from './components/AnimationDemoPage';

import { Preloader } from './components/Preloader';
import AboutPage from './components/AboutPage';
import './App.css';
import StudentSearchPage from './components/StudentSearchPage';

// PageWrapper component - shows StrangerThingsPreloader on page load
function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <StrangerThingsPreloader
          text="REVELATIONS"
          onComplete={() => setLoading(false)}
        />
      )}
      <div style={{
        visibility: loading ? 'hidden' : 'visible',
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.3s ease'
      }}>
        {children}
      </div>
    </>
  );
}

function HomePage() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}
      <MainContent isVisible={preloaderComplete} />
    </>
  );
}

// Separate component to use useLocation inside Router
function AppRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    // Scroll both window and root element to handle all cases
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className="bg-[#0a0a0a]">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={
          <PageWrapper key={location.key}>
            <EventsPage />
          </PageWrapper>
        } />
        <Route path="/gallery" element={
          <PageWrapper key={location.key}>
            <GalleryPage />
          </PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper key={location.key}>
            <AboutPage />
          </PageWrapper>
        } />
        <Route path="/leaderboard" element={
          <PageWrapper key={location.key}>
            <LeaderboardPage />
          </PageWrapper>
        } />
        <Route path="/schedule" element={
          <PageWrapper key={location.key}>
            <SchedulePage />
          </PageWrapper>
        } />
        <Route path="/team/:slug" element={
          <PageWrapper key={location.key}>
            <TeamDetailsPage />
          </PageWrapper>
        } />
        <Route path="/division-search" element={
          <PageWrapper key={location.key}>
            <StudentSearchPage />
          </PageWrapper>
        } />
        <Route path="/download-team-sheet" element={<DownloadTeamSheet />} />
        <Route path="/animation-demo" element={<AnimationDemoPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
