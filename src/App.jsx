import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tour from './components/Tour';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--color-background-primary)] flex flex-col font-sans">
      <CustomScrollbar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="h-px bg-primary-200 w-full"></div>
        <About />
        <div className="h-px bg-primary-200 w-full"></div>
        <Tour />
        <div className="h-px bg-primary-200 w-full"></div>
        <Contact />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
