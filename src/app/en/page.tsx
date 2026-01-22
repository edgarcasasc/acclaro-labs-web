import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import TeamSection from '@/components/TeamSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer'; // <--- 1. Importamos el Footer

export default function EnHomePage() {
  return (
    <>
      {/* CAPA 1: FONDO */}
      <DigitalUniverse />

      {/* CAPA 2: CONTENIDO */}
      <main className="relative z-10">
        <Hero lang="en" />
        <SocialProof lang="en" />
        <ProblemSection lang="en" />
        <SolutionSection lang="en" />
        <LeadMagnetSection lang="en" />
        <TeamSection lang="en" />
        <CallToActionSection lang="en" />
      </main>

      {/* CAPA 3: FOOTER */}
      <Footer lang="en" /> {/* <--- 2. Agregamos el componente al final */}
    </>
  );
}