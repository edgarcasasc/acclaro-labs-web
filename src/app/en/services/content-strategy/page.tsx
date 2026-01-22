import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import ContentHero from '@/components/content-ux/ContentHero';
import ContentProblem from '@/components/content-ux/ContentProblem';
import ContentSolution from '@/components/content-ux/ContentSolution';
import AuditFormSection from '@/components/AuditFormSection'; 
import Footer from '@/components/Footer'; // <--- 1. Importamos el Footer


export default function EnContentStrategyPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino selection:bg-oro-antiguo selection:text-black">
        <ContentHero lang="en"/>
        <ContentProblem lang="en"/>
        <ContentSolution lang="en"/>
        <AuditFormSection lang="en"/>
      </main>      <Footer lang="en" /> {/* <--- 2. Agregamos el componente al final */}
      
    </>
  );
}