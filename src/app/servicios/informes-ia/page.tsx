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
export default function ActivacionDeInformesPage() {
  return (
    <>
      {/* CAPA 1: Fondo Fijo 3D */}
      <DigitalUniverse />

      {/* CAPA 2: Contenido Scrollable */}
      <main className="relative z-10">
        
        {/* --- Sección 1: Héroe (El Gancho) --- */}
        <InformesHero />

        {/* --- Sección 2: El Problema (Agitación) --- */}
        <InformesProblem />

        {/* --- Sección 3: La Solución (El Plan) --- */}
        <InformesSolution />

        {/* --- Sección 4: Diferenciadores (Por Qué Nosotros) --- */}
        <InformesDiferenciadores />

        {/* --- Sección 5: Prueba Social (Confianza) --- */}
        <SocialProof /> 

        {/* --- Sección 6: CTA Final (Conversión) --- */}
        <InformesCTA />
        
      </main>
    </>
  );
}