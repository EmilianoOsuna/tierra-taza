import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="relative bg-[var(--color-background-primary)]">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        
        {/* Left Column - Image */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 bg-primary-900/20 z-10"></div>
          <img 
            src="/cafetal.png" 
            alt="Paisaje de Huicicila" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-serif text-3xl text-white mb-2">Visítanos</h3>
            <p className="text-white/80 font-light text-sm max-w-sm">
              Huicicila, Compostela, Nayarit.<br/>A solo 45 minutos de Tepic.
            </p>
          </div>
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
