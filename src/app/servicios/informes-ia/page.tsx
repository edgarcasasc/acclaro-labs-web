import React from 'react';

// Componentes Globales
import DigitalUniverse from '@/components/DigitalUniverse'; 
import SocialProof from '@/components/SocialProof'; 
import Footer from '@/components/Footer';

// Componentes Específicos
import InformesHero from '@/components/informes/InformesHero';
import InformesProblem from '@/components/informes/InformesProblem';
import InformesSolution from '@/components/informes/InformesSolution';
import InformesMethodology from '@/components/informes/InformesMethodology'; 
import InformesCTA from '@/components/informes/InformesCTA';

export default function InformesPageES() {
  return (
    <>
      <DigitalUniverse />
      
      <main className="relative z-10">
        {/* CAMBIAMOS TODOS LOS lang="fr" A lang="es" */}
        <InformesHero lang="es" />
        <InformesProblem lang="es" />
        <InformesSolution lang="es" />
        <InformesMethodology lang="es" />
        <SocialProof lang="es" />
        <InformesCTA lang="es" />
      </main>

      <Footer lang="es" />
    </>
  );
}