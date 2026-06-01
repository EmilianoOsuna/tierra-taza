import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="origen-mapa" className="relative px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 bg-[var(--color-background-primary)] overflow-hidden">
      
      {/* Decorative Blur Background */}
      <div className="absolute -left-[10%] bottom-0 w-[50%] h-[50%] rounded-full bg-primary-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Context */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary-400"></div>
              <div className="text-[10px] md:text-xs text-primary-700 tracking-[0.3em] uppercase font-sans">
                Ubicación y Origen
              </div>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] leading-[1.2] mb-6 font-light">
              El Cinturón del Café <br />
              <span className="italic font-normal">y nuestra tierra</span>
            </h2>

            <div className="space-y-6 text-sm md:text-base text-[var(--color-text-secondary)] leading-[1.8] font-light mb-8">
              <p>
                El café de especialidad solo crece en una franja del planeta conocida como el <strong className="font-semibold text-primary-900">Cinturón del Café</strong> (entre los trópicos de Cáncer y Capricornio) debido a sus condiciones climáticas tropicales y templadas.
              </p>
              <p>
                <strong className="font-semibold text-primary-900">Nayarit se sitúa justo en el límite norte de esta franja mundial</strong>. Esta ubicación geográfica privilegiada, sumada a la altitud y humedad de la Sierra de Huicicila, genera noches frescas que ralentizan la maduración del grano de café bajo la sombra. Este lento proceso permite que la planta concentre una mayor cantidad de azúcares y desarrolle una acidez compleja, dando como resultado un café de perfil excepcionalmente dulce y balanceado.
              </p>
            </div>

            {/* Micro badge highlighting quality */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100/80 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-primary-100/50 flex items-center justify-center text-primary-800 shrink-0">
                <Globe size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary-900 uppercase tracking-wider">Altitud y Clima Ideal</h4>
                <p className="text-[11px] text-[var(--color-text-secondary)] font-light leading-relaxed">Ubicación estratégica que nutre el grano lentamente.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Infographic Image */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-[650px] aspect-[4/3] rounded-3xl overflow-hidden bg-primary-50 border border-primary-200/80 shadow-lg relative group"
          >
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-primary-900/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            
            <img 
              src="/cinturon_cafe.png" 
              alt="Infografía del Cinturón del Café de Tierra & Taza" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            
            {/* Minimal label overlay */}
            <div className="absolute bottom-6 right-6 z-20 bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-primary-200 shadow-sm pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-primary-800 font-bold">Límite Norte del Cinturón</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
