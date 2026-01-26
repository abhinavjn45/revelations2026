import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import EventsPage from './components/EventsPage';
import { Preloader } from './components/Preloader';
import './App.css';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
