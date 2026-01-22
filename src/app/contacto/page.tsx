import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <>
      <DigitalUniverse />
      <div className="fixed inset-0 z-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <main className="relative z-10 font-sans text-blanco-pergamino min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        <ContactSection lang="es" />
      </main>

      <Footer lang="es" />
    </>
  );
}