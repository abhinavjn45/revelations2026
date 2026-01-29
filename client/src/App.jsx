import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import EventsPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import { StrangerThingsPreloader } from './components/StrangerThingsPreloader';
import LeaderboardPage from './components/LeaderboardPage';
import SchedulePage from './components/SchedulePage';

import { Preloader } from './components/Preloader';
import AboutPage from './components/AboutPage';
import './App.css';

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

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a]">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Separate component to use useLocation inside Router
function AppRoutes() {
  const location = useLocation();

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
      </Routes>
    </div>
  );
}

export default App;
