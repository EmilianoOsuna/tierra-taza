import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Bus, Coffee, ShoppingBag } from 'lucide-react';

const steps = [
  { num: '01', title: 'Bienvenida', desc: 'Punto de salida en la Catedral de Tepic, 8:00 AM. Registro y presentación del grupo.', icon: MapPin },
  { num: '02', title: 'Traslado', desc: 'Transporte escénico hacia la sierra de Huicicila con una breve introducción al recorrido.', icon: Bus },
  { num: '03', title: 'Recorrido Sensorial', desc: 'Inmersión en el cafetal: aprende sobre el cultivo, secado y molienda directamente de la tierra.', icon: Coffee },
  { num: '04', title: 'Cata & Compra', desc: 'Degustación guiada de nuestras mejores cosechas y oportunidad de compra directa al productor.', icon: ShoppingBag },
];

const Tour = () => {
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="el-recorrido" className="relative px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 bg-[var(--color-background-secondary)] overflow-hidden">
      
      {/* Decorative background element */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute -right-[20%] top-20 w-[60%] h-[60%] rounded-full bg-primary-200/20 blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Sticky Header Section */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-primary-400"></div>
                <div className="text-[10px] md:text-xs text-primary-700 tracking-[0.3em] uppercase font-sans">
                  El recorrido
                </div>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] leading-[1.2] mb-6">
                Cuatro etapas, <br/>
                <span className="italic font-light">una experiencia</span>
              </h2>
              
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-[1.8] font-light max-w-md">
                Acompáñanos a descubrir el proceso detrás de cada taza. Desde la neblina de la sierra hasta el aroma en tu paladar.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-8 md:p-10 rounded-2xl bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Giant Background Number */}
              <div className="absolute -right-4 -top-8 text-[120px] font-serif font-bold text-primary-900/5 group-hover:text-primary-900/10 transition-colors duration-500 pointer-events-none select-none">
                {step.num}
              </div>

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center border border-primary-200 group-hover:bg-primary-900 group-hover:border-primary-900 transition-colors duration-500">
                <step.icon className="w-6 h-6 text-primary-800 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10 pt-2">
                <div className="text-[10px] md:text-xs text-primary-600 tracking-[0.2em] uppercase font-sans mb-2">
                  Paso {step.num}
                </div>
                <h4 className="font-serif text-2xl text-[var(--color-text-primary)] mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-[1.7] font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tour;
