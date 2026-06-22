import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Leaflet with Next.js/Webpack
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapSectionProps {
  center?: [number, number];
  zoom?: number;
}

const MapSection: React.FC<MapSectionProps> = ({ 
  center = [-33.4489, -70.6693], // Default to Santiago, Chile
  zoom = 13 
}) => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dónde Estamos</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Info Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visítanos</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dirección</p>
                    <p className="text-gray-600">Calle Principal 123, Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.5a1 1 0 011 1v1h3.5a1 1 0 011 1v3.5a1 1 0 011 1H11a2 2 0 012 2v3.5a1 1 0 01-1 1H7.5a1 1 0 01-1-1V7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Horario de Atención</p>
                    <p className="text-gray-600">Lunes a Sábado: 11am - 10pm</p>
                    <p className="text-gray-600">Domingo: 12pm - 9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <MapContainer 
              center={center} 
              zoom={zoom} 
              scrollWheelZoom={false} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={center}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold">Ñam Ñam</h3>
                    <p>¡Te esperamos!</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
