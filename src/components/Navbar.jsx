import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 xl:px-32 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <a href="#inicio" className="flex items-center gap-3 text-white/90 cursor-pointer">
        <img src="/huicicila_logo.png" alt="Tierra & Taza Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
      </a>
      <div className="hidden md:flex gap-10">
        {['Inicio', 'Nosotros', 'El recorrido', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <motion.a
        href="#reservar"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-xs uppercase tracking-widest border border-white/30 text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm flex items-center justify-center"
      >
        Reservar
      </motion.a>
    </nav>
  );
};

export default Navbar;
