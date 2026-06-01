import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';

const Reservation = () => {
  return (
    <section id="reservar" className="relative px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 flex items-center justify-center min-h-[700px] overflow-hidden">

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
              Asegura tu<br />
              <span className="italic font-light">experiencia</span>
            </h2>

            <p className="text-sm md:text-base text-white/70 leading-[1.7] font-light mb-8 max-w-md">
              Grupos de hasta 13 personas para garantizar una experiencia íntima e inmersiva. Reserva tu lugar con anticipación.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-[10px] text-primary-300 uppercase tracking-widest font-semibold mb-2">Precios & Salidas</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-2">Desde Tepic (1h 20m)</div>
                  <div className="space-y-1">
                    <div className="text-white text-lg font-serif">$1,250 <span className="text-[10px] font-sans text-white/70">MXN Nac.</span></div>
                    <div className="text-white text-lg font-serif">$95 <span className="text-[10px] font-sans text-white/70">USD Int.</span></div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-2">Desde Vallarta</div>
                  <div className="space-y-1">
                    <div className="text-white text-lg font-serif">$1,500 <span className="text-[10px] font-sans text-white/70">MXN Nac.</span></div>
                    <div className="text-white text-lg font-serif">$115 <span className="text-[10px] font-sans text-white/70">USD Int.</span></div>
                  </div>
                </div>
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
                  required
                  className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Número de WhatsApp"
                  required
                  className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                />
              </div>

              {/* Departure Point and Traveler Type Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <select
                    className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all cursor-pointer appearance-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-neutral-900 text-white/40">Salida desde...</option>
                    <option value="tepic" className="bg-neutral-900 text-white">Catedral de Tepic</option>
                    <option value="vallarta" className="bg-neutral-900 text-white">Plaza Puerto Mágico, PV</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-[9px]">▼</div>
                </div>

                <div className="relative">
                  <select
                    className="w-full px-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all cursor-pointer appearance-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-neutral-900 text-white/40">Tipo viajero</option>
                    <option value="nacional" className="bg-neutral-900 text-white">Nacional</option>
                    <option value="internacional" className="bg-neutral-900 text-white">Internacional</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-[9px]">▼</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative flex items-center">
                  <Calendar size={18} className="absolute left-5 text-white/40 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Fecha"
                    required
                    className="w-full pl-12 pr-5 py-4 text-sm border border-white/10 rounded-xl bg-black/20 text-white focus:outline-none focus:border-primary-400 focus:bg-black/40 transition-all placeholder:text-white/30"
                  />
                </div>
                <div className="relative flex items-center">
                  <Users size={18} className="absolute left-5 text-white/40 pointer-events-none" />
                  <input
                    type="number"
                    min="1"
                    max="13"
                    placeholder="Personas (max 13)"
                    required
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
