import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { MainContent } from './components/MainContent';
import './App.css';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
  };

  return (
    <div className="bg-[#0a0a0a]">
      {!preloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      <MainContent isVisible={preloaderComplete} />
    </div>
  );
}

export default App;
