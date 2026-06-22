import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Card 1: Phone */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Llámanos</h3>
            <p className="text-gray-600">+56 9 1234 5678</p>
            <p className="text-sm text-gray-400 mt-2">Atención inmediata</p>
          </motion.div>

          {/* Contact Card 2: WhatsApp */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">WA</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600">Pide por chat</p>
            <p className="text-sm text-gray-400 mt-2">Respuestas rápidas</p>
          </motion.div>

          {/* Contact Card 3: Hours */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Horario</h3>
            <p className="text-gray-600">Lun - Dom</p>
            <p className="text-sm text-gray-400 mt-2">11:00 AM - 10:00 PM</p>
          </motion.div>

          {/* Contact Card 4: Location */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
            <p className="text-gray-600">Calle Principal 123</p>
            <p className="text-sm text-gray-400 mt-2">Santiago, Chile</p>
          </motion.div>
        </div>

        {/* Social Media */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Síguenos en nuestras redes</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
              <Facebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
