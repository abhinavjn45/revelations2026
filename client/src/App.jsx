import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import EventsPage from './components/EventsPage';
import './App.css';
import preloadVideo from './assets/preload.mp4';

function HomePage() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handleVideoEnd = () => {
    setPreloaderComplete(true);
  };

  return (
    <>
      {!preloaderComplete && (
        <div className="w-full h-full flex items-center justify-center">
          <video
            src={preloadVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          />
        </div>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
