import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContentHero from '@/components/content-ux/ContentHero';
import ContentProblem from '@/components/content-ux/ContentProblem';
import ContentSolution from '@/components/content-ux/ContentSolution';
import AuditFormSection from '@/components/AuditFormSection'; 
import Footer from '@/components/Footer';

export default function FrContentStrategyPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-oro-antiguo selection:text-black">
        <ContentHero lang="fr"/>
        <ContentProblem lang="fr"/>
        <ContentSolution lang="fr"/>
        <AuditFormSection lang="fr"/>
      </main>
      <Footer lang="fr" /> {/* <--- 2. Agregamos el footer en francés */}
    </>
  );
}