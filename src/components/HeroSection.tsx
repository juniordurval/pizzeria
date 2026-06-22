import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Delicious food background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/logo-namnam.png" 
            alt="Ñam Ñam Logo" 
            className="mx-auto h-32 md:h-48 w-auto mb-8"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Sabor que te <span className="text-primary">enamora</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Los mejores sabores, directamente en la puerta de tu casa. ¡Pide ahora!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-foreground transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Ver Menú
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
          >
            Contacto
          </a>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
