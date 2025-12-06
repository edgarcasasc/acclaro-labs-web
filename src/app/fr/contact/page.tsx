import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContactSection from '@/components/ContactSection';

export default function FrContactPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        <ContactSection lang="fr" />
      </main>
    </>
  );
}