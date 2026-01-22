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

export default function FrHomePage() {
  return (
    <>
      {/* CAPA 1: FONDO */}
      <DigitalUniverse />

      {/* CAPA 2: CONTENIDO */}
      <main className="relative z-10">
        <Hero lang="fr" />
        <SocialProof lang="fr" />
        <ProblemSection lang="fr" />
        <SolutionSection lang="fr" />
        <LeadMagnetSection lang="fr" />
        <TeamSection lang="fr" />
        <CallToActionSection lang="fr" />
      </main>

      {/* CAPA 3: FOOTER */}
      <Footer lang="fr" /> {/* <--- 2. Agregamos el footer en francés */}
    </>
  );
}