import React from 'react';
// CORRECCIÓN: Se quita /layout/ del path
import DigitalUniverse from '@/components/DigitalUniverse'; 

// CORRECCIÓN: Se quita /sections/ de los paths
import InformesHero from '@/components/InformesHero';
import InformesProblem from '@/components/InformesProblem';
import InformesSolution from '@/components/InformesSolution';
import InformesDiferenciadores from '@/components/InformesDiferenciadores';
// CORRECCIÓN: Reutilizamos el componente base
import SocialProof from '@/components/SocialProof'; 
import InformesCTA from '@/components/InformesCTA';

/**
 * Página de Activación de Informes Inteligentes (Página de Conversión / BoFu)
 * Utiliza la arquitectura de capas del proyecto AcclaroLabs.
 */
export default function FrInformesPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10">
        <InformesHero lang="fr" />
        <InformesProblem lang="fr" />
        <InformesSolution lang="fr" />
        <InformesDiferenciadores lang="fr" />
        <SocialProof lang="fr" />
        <InformesCTA lang="fr" />
      </main>
    </>
  );
}