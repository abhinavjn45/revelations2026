import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { MainContent } from './components/MainContent';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <CustomCursor />
      {!preloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      <MainContent isVisible={preloaderComplete} />
    </div>
  );
}

export default App;
