import React from 'react';

// Componentes Globales
import DigitalUniverse from '@/components/DigitalUniverse'; 
import SocialProof from '@/components/SocialProof'; 
import Footer from '@/components/Footer';

// Componentes Específicos (Rutas corregidas)
import InformesHero from '@/components/informes/InformesHero';
import InformesProblem from '@/components/informes/InformesProblem';
import InformesSolution from '@/components/informes/InformesSolution';
import InformesMethodology from '@/components/informes/InformesMethodology'; 
import InformesCTA from '@/components/informes/InformesCTA';

export default function InformesPageEN() {
  return (
    <>
      <DigitalUniverse />
      
      <main className="relative z-10">
        <InformesHero lang="en" />
        <InformesProblem lang="en" />
        <InformesSolution lang="en" />
        <InformesMethodology lang="en" />
        <SocialProof lang="en" />
        <InformesCTA lang="en" />
      </main>

     <Footer lang="en" /> {/* <--- 2. Agregamos el footer en francés */}
    </>
  );
}