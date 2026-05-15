import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // Calculate scroll progress percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (scrollHeight > 0) {
        setScrollProgress(currentScroll / scrollHeight);
      }

      setIsScrolling(true);
      
      // Reset the timeout whenever scrolling happens
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1200); // Hide after 1.2 seconds of inactivity
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check to set the dot position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed right-3 top-2 bottom-2 w-4 z-[100] pointer-events-none flex justify-center"
        >
          <div 
            className="absolute w-2.5 h-2.5 rounded-full bg-[#5C4F44] shadow-sm shadow-black/20"
            style={{ 
              top: `${scrollProgress * 100}%`,
              transform: `translateY(-${scrollProgress * 100}%)`
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomScrollbar;
