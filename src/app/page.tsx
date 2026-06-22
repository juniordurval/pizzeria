import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar, Footer, CartDrawer, HeroSection, ProductList, CategoryFilter, ContactSection } from '@/components';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';

// Importamos MapSection dinámicamente para evitar errores de SSR (Server Side Rendering)
// Esto es CRUCIAL porque Leaflet necesita el objeto 'window' que solo existe en el navegador.
const MapSection = dynamic(() => import('@/components/MapSection'), { 
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-200 animate-pulse flex items-center justify-center">Cargando mapa...</div>
});

export default function Home() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <CategoryFilter />
            <ProductList />
            <ContactSection />
            <MapSection />
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
