import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import Footer from '@/components/Footer'; // <--- 1. Importamos el Footer

// Componentes de la Landing
import WebDevHero from '@/components/webdev/WebDevHero';
import WebDevProblem from '@/components/webdev/WebDevProblem';
import WebDevSolution from '@/components/webdev/WebDevSolution';
import WebDevAuthority from '@/components/webdev/WebDevAuthority'; // O 'WebDevPwa' si prefieres la sección visual
import WebDevFinalCTA from '@/components/webdev/WebDevFinalCTA';

export default function DesarrolloWebPage() {
  return (
    <>
      {/* CAPA 1: Fondo */}
      <DigitalUniverse />

      {/* CAPA 2: Contenido */}
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-azul-zafiro selection:text-white">
        
        {/* 1. EL GANCHO: Vendedor vs Folleto */}
        <WebDevHero lang="es"/>

        {/* 2. EL CONFLICTO: La Web Isla */}
        <WebDevProblem lang="es" />

        {/* 3. LA GUÍA: Ingeniería de Precisión */}
        <WebDevSolution lang="es"/>

        {/* 4. ETHOS: Full-Stack + UX */}
        <WebDevAuthority lang="es"/>

        {/* 5. CIERRE: Auditoría Técnica */}
        <WebDevFinalCTA lang="es" />

      </main>

      {/* CAPA 3: Footer Global */}
      <Footer />
    </>
  );
}