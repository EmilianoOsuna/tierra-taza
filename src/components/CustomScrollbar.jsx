import React, { useEffect, useRef } from 'react';

const CustomScrollbar = () => {
  const containerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (scrollHeight > 0) {
        const progress = currentScroll / scrollHeight;
        if (dotRef.current) {
          dotRef.current.style.top = `${progress * 100}%`;
          dotRef.current.style.transform = `translateY(-${progress * 100}%)`;
        }
      }

      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = '0';
        }
      }, 1000); // Ocultar después de 1 segundo de inactividad
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Llamada inicial para fijar posición
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed right-3 top-2 bottom-2 w-4 z-[100] pointer-events-none flex justify-center transition-opacity duration-300 opacity-0"
    >
      <div 
        ref={dotRef}
        className="absolute w-2.5 h-2.5 rounded-full bg-[#5C4F44] shadow-sm shadow-black/20"
        style={{ top: '0%', transform: 'translateY(0%)' }}
      />
    </div>
  );
};

export default CustomScrollbar;
