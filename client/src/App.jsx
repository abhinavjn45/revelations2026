import { useState } from 'react';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import './App.css';
import preloadVideo from './assets/preload.mp4';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handleVideoEnd = () => {
    setPreloaderComplete(true);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <CustomCursor />
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
    </div>
  );
}

export default App;
