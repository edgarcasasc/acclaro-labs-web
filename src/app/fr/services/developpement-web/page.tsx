// src/app/servicios/desarrollo-web/page.tsx
import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import WebDevHero from '@/components/webdev/WebDevHero';
import WebDevProblem from '@/components/webdev/WebDevProblem';
import WebDevSolution from '@/components/webdev/WebDevSolution';
import WebDevAuthority from '@/components/webdev/WebDevAuthority';
import WebDevFinalCTA from '@/components/webdev/WebDevFinalCTA';

export default function DesarrolloWebPage() {
  return (
    <>
      {/* CAPA 1: Fondo */}
      <DigitalUniverse />

      {/* CAPA 2: Contenido */}
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-azul-zafiro selection:text-white">
        
        {/* 1. EL GANCHO: Vendedor vs Folleto */}
        <WebDevHero lang="fr"  />

        {/* 2. EL CONFLICTO: La Web Isla */}
        <WebDevProblem lang="fr" />

        {/* 3. LA GUÍA: Ingeniería de Precisión */}
        <WebDevSolution lang="fr"  />

        {/* 4. ETHOS: Full-Stack + UX */}
        <WebDevAuthority lang="fr" />

        {/* 5. CIERRE: Auditoría Técnica */}
        <WebDevFinalCTA lang="fr" />

      </main>
    </>
  );
}