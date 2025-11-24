import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import Quote from './components/Quote';
import CoupleProfile from './components/CoupleProfile';
import EventDetail from './components/EventDetail';
import Countdown from './components/Countdown';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSVP';
import Gift from './components/Gift';
import ThankYouSection from './components/ThankYouSection';
import Footer from './components/Footer';
import Route from './components/Route';
import musicFile from "../src/assets/images/music.mp3";

function App() {
  const [showRoute, setShowRoute] = useState(false);

  // ---- AUDIO STATE ----
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => { });
    setIsPlaying(true);
  };

  // Show navbar when scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowRoute(true);
      else setShowRoute(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigasi */}
      {showRoute && <Route />}

      <div className="overflow-hidden">
        <div id="Hero">
          <Hero playMusic={playMusic} />
        </div>

        <div id="Couple"><CoupleProfile /></div>
        <div id="Countdown"><Countdown /></div>
        <div id="Events"><EventDetail /></div>
        {/* <div id="Story"><LoveStory /></div> */}
        {/* <div id="RSVP"><RSVP /></div> */}
        <div id="Gift"><Gift /></div>
        <div id="ThankYou"><ThankYouSection /></div>

        <Footer togglePlay={togglePlay} isPlaying={isPlaying} />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;