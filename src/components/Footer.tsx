import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img className="h-10 w-auto" src="/logo-namnam.png" alt="Ñam Ñam Logo" />
              <span className="ml-2 text-primary font-bold text-xl">Ñam Ñam</span>
            </div>
            <p className="text-gray-400">
              Llevando el mejor sabor a tu mesa con ingredientes frescos y pasión por la cocina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-primary transition-colors">Menú</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Calle Principal 123, Santiago</li>
              <li>+56 9 1234 5678</li>
              <li>hola@namnam.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ñam Ñam. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
