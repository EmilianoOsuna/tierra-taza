import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="nosotros" className="relative px-6 md:px-12 lg:px-24 xl:px-32 py-24 md:py-32 bg-[var(--color-background-primary)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex flex-col z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary-300"></div>
            <div className="text-[10px] md:text-xs text-primary-600 tracking-[0.3em] uppercase font-sans">
              Nosotros
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] leading-[1.2] mb-8 font-light">
            Somos el puente <br/>
            <span className="italic">entre el productor</span> <br/>
            y tu taza
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 text-sm md:text-base text-[var(--color-text-secondary)] leading-[1.8] font-light mb-10 pl-4 border-l border-primary-200">
            <p>
              Tierra & Taza nació en Huicicila, Nayarit, para dar valor al café artesanal de la sierra y a quienes lo producen. Creemos que la mejor forma de apreciar un café es conocer la tierra donde creció y las manos que lo cultivaron.
            </p>
            <p>
              Ofrecemos recorridos sensoriales y educativos que combinan ecoturismo, gastronomía y conciencia ambiental en una sola experiencia inmersiva.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {['Ecoturismo', 'Soberanía alimentaria', 'Comercio directo', 'Educación ambiental'].map((pill, i) => (
              <motion.span 
                key={i} 
                whileHover={{ y: -3, backgroundColor: 'var(--color-primary-200)' }}
                className="text-[10px] md:text-xs text-primary-900 bg-primary-100/50 px-4 py-2 rounded-full border border-primary-200 transition-colors duration-300 cursor-default"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Image Column */}
        <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden group">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full"
          >
            {/* Fallback elegant placeholder or the first hero image slightly muted */}
            <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <img 
              src="/cafetal2.png" 
              alt="Manos trabajando en el cafetal" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          {/* Decorative element over image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs z-20"
          >
            <div className="font-serif text-2xl text-primary-900 mb-2">"El origen lo es todo."</div>
            <div className="text-xs uppercase tracking-widest text-primary-600">Familia Productora</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
