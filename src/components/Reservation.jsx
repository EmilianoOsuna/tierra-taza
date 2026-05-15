import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';

const Reservation = () => {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 flex items-center justify-center min-h-[700px] overflow-hidden">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cafetal3.png" 
          alt="Granos de café" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-primary-950/80"></div>
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Glassmorphism Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary-400"></div>
              <div className="text-[10px] md:text-xs text-primary-300 tracking-[0.3em] uppercase font-sans">
                Reserva tu lugar
              </div>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.2] mb-6">
              Asegura tu<br/>
              <span className="italic font-light">experiencia</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/70 leading-[1.7] font-light mb-8 max-w-md">
              Grupos limitados a 12 personas para garantizar una inmersión completa. Reserva con anticipación.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-white text-2xl font-serif mb-1">499 <span className="text-sm font-sans">MXN</span></div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">Desde (Por persona)</div>
              </div>
              <div>
                <div className="text-white text-2xl font-serif mb-1">8:00 <span className="text-sm font-sans">AM</span></div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">Salida desde Tepic</div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tu nombre completo" 
                  className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                />
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Número de WhatsApp" 
                  className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="relative flex items-center">
                  <Calendar size={18} className="absolute left-5 text-white/40 pointer-events-none" />
                  <input 
                    type="text" 
                    placeholder="Fecha" 
                    className="w-full pl-12 pr-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                  />
                </div>
                <div className="relative flex items-center">
                  <Users size={18} className="absolute left-5 text-white/40 pointer-events-none" />
                  <input 
                    type="text" 
                    placeholder="Personas" 
                    className="w-full pl-12 pr-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-primary-800 text-primary-50 text-sm px-6 py-4 rounded-xl hover:bg-primary-700 transition-colors mt-2 flex items-center justify-center gap-3 border border-primary-700"
              >
                <span>Confirmar reserva</span> 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Reservation;
