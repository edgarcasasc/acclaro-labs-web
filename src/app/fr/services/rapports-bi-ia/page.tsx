import React from 'react';

// 1. Componentes Globales (están en la raíz de components)
import DigitalUniverse from '@/components/DigitalUniverse'; 
import SocialProof from '@/components/SocialProof'; 
import Footer from '@/components/Footer';

// 2. Componentes Específicos (CORRECCIÓN: están en la carpeta 'informes')
import InformesHero from '@/components/informes/InformesHero';
import InformesProblem from '@/components/informes/InformesProblem';
import InformesSolution from '@/components/informes/InformesSolution';
import InformesMethodology from '@/components/informes/InformesMethodology'; // Usamos el nuevo componente premium
import InformesCTA from '@/components/informes/InformesCTA';

export default function InformesPageFR() {
  return (
    <>
      <DigitalUniverse />
      
      <main className="relative z-10">
        <InformesHero lang="fr" />
        <InformesProblem lang="fr" />
        <InformesSolution lang="fr" />
        <InformesMethodology lang="fr" />
        <SocialProof lang="fr" />
        <InformesCTA lang="fr" />
      </main>

      <Footer lang="fr" /> {/* <--- 2. Agregamos el footer en francés */}
    </>
  );
}