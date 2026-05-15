import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';

const images = [
  '/cafetal.png',
  '/cafetal2.png',
  '/cafetal3.png'
];

const phrases = [
  'desde la raíz.',
  'desde el corazón.',
  'desde Nayarit.'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Fondo de cafetal"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </AnimatePresence>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 xl:px-32 w-full max-w-[1400px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-2xl mt-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-white/50"></div>
            <div className="text-[10px] md:text-xs text-white/70 tracking-[0.3em] uppercase font-sans">
              Huicicila · Sierra de Nayarit
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-8 font-normal drop-shadow-lg">
            <span>Café de origen,</span><br />
            <span className="relative inline-flex overflow-hidden items-center py-2 -my-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="italic font-light text-white/90 absolute left-0 whitespace-nowrap"
                >
                  {phrases[currentImageIndex]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible spacer to maintain width */}
              <span className="italic font-light text-transparent pointer-events-none select-none">
                desde el corazón.
              </span>
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <motion.a
              href="#el-recorrido"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 text-[11px] md:text-xs text-white uppercase tracking-[0.2em] font-medium cursor-pointer"
            >
              Ver recorridos
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={14} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-12 lg:px-24 xl:px-32 pb-8 pt-12 bg-gradient-to-t from-black/80 to-transparent"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/20 pt-6">
          {[
            { num: '100%', label: 'Café artesanal' },
            { 
              num: (
                <div className="flex items-center gap-2">
                  <Coffee size={32} strokeWidth={1.5} />
                  <span>Café</span>
                </div>
              ), 
              label: 'Ilimitado' 
            },
            { num: '1 día', label: 'Experiencia completa' },
            { num: '$850', label: 'MXN por persona' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-serif text-2xl md:text-3xl font-light text-white mb-1 drop-shadow-md">
                {stat.num}
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 drop-shadow-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Carousel Indicators */}
      <div className="absolute right-6 md:right-12 lg:right-24 bottom-32 md:bottom-1/2 md:translate-y-1/2 flex md:flex-col gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${idx === currentImageIndex ? 'h-8 bg-white' : 'h-2 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
