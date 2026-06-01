import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapInstanceRef = useRef(null);

  useEffect(() => {
    let activeMap = null;
    let resizeHandler = null;

    // 1. Check if leaflet scripts/styles are already loaded
    if (window.L) {
      activeMap = initMap();
    } else {
      // 2. Load Leaflet CSS from CDN
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);

      // 3. Load Leaflet JS from CDN
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.onload = () => {
        activeMap = initMap();
      };
      document.head.appendChild(script);
    }

    function initMap() {
      if (!mapContainerRef.current) return null;
      
      // Prevent double initialization
      if (mapContainerRef.current._leaflet_id) {
        setMapLoaded(true);
        return mapInstanceRef.current;
      }

      const L = window.L;

      // Coordinates
      const tepic = [21.5078, -104.8953]; // Catedral de Tepic
      const vallarta = [20.6436, -105.2325]; // Plaza Comercial Puerto Mágico, PV
      const compostela = [21.2356, -104.9014]; // Compostela (Punto de paso)
      const huicicila = [21.1438, -105.0881]; // Huicicila, Nayarit (Destino)
      
      // Highway points for Puerto Vallarta -> Huicicila route
      const pvRoutePoints = [
        vallarta,
        [20.7351, -105.2789], // Mezcales
        [20.7930, -105.3120], // Bucerías
        [20.8710, -105.4228], // Sayulita intersection
        [20.9575, -105.3533], // Lo de Marcos
        [21.0310, -105.2750], // Guayabitos
        [21.1578, -105.1378], // Las Varas
        huicicila
      ];

      // Highway points for Tepic -> Huicicila route
      const tepicRoutePoints = [
        tepic,
        [21.3653, -104.8988], // highway 15D
        compostela,
        [21.1444, -105.0028], // road connection
        huicicila
      ];

      // Initialize map centered between Tepic and PV
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        scrollWheelZoom: false // disable scrolling zoom to prevent page scroll hijacking
      }).setView([21.05, -105.05], 9);

      // CartoDB Positron - Premium minimalist light tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Add zoom control at bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Custom DOM-based marker creation (avoids default leaflet asset icon issues)
      const createMarkerIcon = (label, colorClass) => {
        return L.divIcon({
          className: 'custom-leaflet-marker',
          html: `<div class="flex flex-col items-center select-none pointer-events-none">
                   <div class="w-3.5 h-3.5 rounded-full ${colorClass} border-2 border-white shadow-md"></div>
                   <div class="bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-md border border-neutral-200 text-[10px] font-bold text-neutral-800 shadow-sm mt-1 whitespace-nowrap">
                     ${label}
                   </div>
                 </div>`,
          iconSize: [100, 40],
          iconAnchor: [50, 7]
        });
      };

      const destIcon = L.divIcon({
        className: 'custom-leaflet-marker-dest',
        html: `<div class="flex flex-col items-center select-none pointer-events-none">
                 <div class="w-5 h-5 rounded-full bg-[#8B2A3A] border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
                   <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                 </div>
                 <div class="bg-[#8B2A3A] text-white px-2.5 py-0.5 rounded shadow-md text-[10px] font-bold mt-1 border border-white/20 whitespace-nowrap uppercase tracking-wider">
                   Huicicila (Cafetal)
                 </div>
               </div>`,
        iconSize: [120, 45],
        iconAnchor: [60, 10]
      });

      // Place Markers
      L.marker(tepic, { icon: createMarkerIcon('Salida Tepic', 'bg-neutral-800') }).addTo(map)
        .bindPopup('<b>Salida Catedral de Tepic</b><br>Punto de partida - 8:00 AM<br>1h 20m de trayecto.');

      L.marker(vallarta, { icon: createMarkerIcon('Salida Vallarta', 'bg-neutral-800') }).addTo(map)
        .bindPopup('<b>Salida Puerto Vallarta</b><br>Plaza Comercial Puerto Mágico - 7:00 AM.');

      L.marker(huicicila, { icon: destIcon }).addTo(map)
        .bindPopup('<b>Huicicila, Nayarit</b><br>Lugar del recorrido sensorial de Tierra & Taza.<br>Altitud ideal para café de especialidad.');

      // Render Route Polylines
      L.polyline(tepicRoutePoints, {
        color: '#8B2A3A',
        weight: 3,
        opacity: 0.75,
        dashArray: '6, 8'
      }).addTo(map);

      L.polyline(pvRoutePoints, {
        color: '#8B2A3A',
        weight: 3,
        opacity: 0.75,
        dashArray: '6, 8'
      }).addTo(map);

      // Handle map click to enable scroll zoom
      map.on('click', () => {
        if (!map.scrollWheelZoom.enabled()) {
          map.scrollWheelZoom.enable();
        }
      });

      // Disable scroll wheel zoom when leaving the map area
      map.on('mouseout', () => {
        map.scrollWheelZoom.disable();
      });

      mapInstanceRef.current = map;

      // Handle window resize dynamically to prevent grey blocks
      resizeHandler = () => {
        map.invalidateSize();
      };
      window.addEventListener('resize', resizeHandler);

      setMapLoaded(true);
      return map;
    }

    return () => {
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="contacto" className="relative bg-[var(--color-background-primary)]">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        
        {/* Left Column - Real Leaflet Map */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden bg-primary-950">
          
          {/* Leaflet map container */}
          <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10" />

          {/* Dynamic Loading Overlay */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-200 bg-primary-950 z-20">
              <div className="w-8 h-8 border-2 border-primary-300 border-t-transparent rounded-full animate-spin mb-2"></div>
              <span className="text-xs font-light tracking-wider uppercase">Cargando mapa real...</span>
            </div>
          )}

          {/* Map instructions overlay */}
          <div className="absolute bottom-6 left-6 z-20 pointer-events-none bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl border border-primary-200 shadow-lg max-w-xs">
            <h3 className="font-serif text-sm text-[var(--color-text-primary)] mb-1">Rutas en Tiempo Real</h3>
            <p className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed font-light">
              Haz clic en el mapa para interactuar. Líneas punteadas indican el trayecto desde las salidas de Tepic y Puerto Vallarta.
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
