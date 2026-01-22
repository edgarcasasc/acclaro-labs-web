import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContactSection from '@/components/ContactSection'; // Importamos el componente limpio
import Footer from '@/components/Footer';

export default function FrContactPage() {
  return (
    <>
      {/* Fondo y Estrellas Overlay */}
      <DigitalUniverse />
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <main className="relative z-10 font-sans text-blanco-pergamino min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        {/* Pasamos el idioma correcto */}
        <ContactSection lang="fr" />
      </main>
      
      <Footer lang="fr" />
    </>
  );
}