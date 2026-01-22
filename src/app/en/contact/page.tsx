import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer'; // <--- 1. Importamos Footer

export default function EnContactPage() {
  return (
    <>
      {/* Capa 1: Universo 3D */}
      <DigitalUniverse />
      
      {/* Capa 1.5: Textura de fondo (Overlay) para consistencia visual */}
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Capa 2: Contenido Principal */}
      <main className="relative z-10 font-sans text-blanco-pergamino min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        <ContactSection lang="en" />
      </main>

      {/* Capa 3: Footer en Inglés */}
      <Footer lang="en" />
    </>
  );
}