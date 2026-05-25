import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageCircle, ArrowRight, Map } from 'lucide-react';

const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contacto" className="relative bg-[var(--color-background-primary)]">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        
        {/* Left Column - Image / Map */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden bg-primary-950">
          {/* Static Image View */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: showMap ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 w-full h-full ${showMap ? 'pointer-events-none' : ''}`}
          >
            <img 
              src="/cafetal.png" 
              alt="Paisaje de Huicicila" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20 z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-black/80 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <h3 className="font-serif text-3xl text-white mb-2">Visítanos</h3>
                <p className="text-white/80 font-light text-sm max-w-sm">
                  Huicicila, Compostela, Nayarit.<br/>A solo 45 minutos de Tepic.
                </p>
              </div>
              <button 
                onClick={() => setShowMap(true)}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/20 text-white rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-300 shadow-lg cursor-pointer shrink-0 animate-pulse"
              >
                <Map size={14} />
                <span>Ver Mapa</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Map View */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showMap ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 w-full h-full ${showMap ? 'z-10' : 'pointer-events-none z-0'}`}
          >
            {showMap && (
              <>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-200 bg-primary-950">
                  <div className="w-8 h-8 border-2 border-primary-300 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <span className="text-xs font-light tracking-wider uppercase">Cargando mapa...</span>
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=Huicicila,%20Compostela,%20Nayarit&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  title="Mapa de Huicicila"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </>
            )}
            
            {showMap && (
              <button 
                onClick={() => setShowMap(false)}
                className="absolute top-6 right-6 z-30 flex items-center gap-2 px-4 py-2.5 bg-primary-900/90 hover:bg-primary-950 active:scale-95 backdrop-blur-md text-white rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-300 shadow-xl border border-primary-800 cursor-pointer"
              >
                <Camera size={14} />
                <span>Ver Foto</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[var(--color-background-primary)]">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-primary-300"></div>
                <div className="text-[10px] md:text-xs text-primary-600 tracking-[0.3em] uppercase font-sans">
                  Contacto
                </div>
              </div>
              
              <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-text-primary)] leading-[1.2] mb-4">
                ¿Tienes preguntas?<br/>
                <span className="italic font-light">Escríbenos.</span>
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-[1.7] font-light mb-10">
                Estamos aquí para ayudarte a planear tu visita. Completa el formulario o contáctanos por nuestras redes.
              </p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-primary-200 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-primary-800 transition-colors peer"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-sm text-primary-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary-800 peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary-800 cursor-text"
                >
                  Tu nombre
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  id="contact"
                  required
                  className="w-full bg-transparent border-b border-primary-200 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-primary-800 transition-colors peer"
                />
                <label 
                  htmlFor="contact" 
                  className="absolute left-0 top-3 text-sm text-primary-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary-800 peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary-800 cursor-text"
                >
                  Correo o WhatsApp
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  className="w-full bg-transparent border-b border-primary-200 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-primary-800 transition-colors peer min-h-[100px] resize-none"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-sm text-primary-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary-800 peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary-800 cursor-text"
                >
                  Tu mensaje...
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between w-full bg-primary-900 text-primary-50 text-sm px-6 py-4 rounded-xl hover:bg-primary-950 transition-colors mt-4"
              >
                <span>Enviar mensaje</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-primary-200 flex items-center gap-6"
            >
              <span className="text-xs text-primary-600 uppercase tracking-widest">También en:</span>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-200 flex items-center justify-center text-primary-800 hover:bg-primary-900 hover:text-white transition-all duration-300" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-200 flex items-center justify-center text-primary-800 hover:bg-primary-900 hover:text-white transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
