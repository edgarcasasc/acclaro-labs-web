'use client';
import React from 'react';
import { ShieldCheck, Database, Zap, Link as LinkIcon } from 'lucide-react';

const CONTENT = {
  es: {
    title_main: "Dejamos de adivinar.",
    title_sub: "Empezamos a unificar.",
    desc: "En Acclaro Labs, no ponemos parches. Construimos puentes. Fusionamos la inteligencia de negocio con la ejecución técnica para que tus datos fluyan sin fricción.",
    cards: [
      { title: "Auditoría de Salud (Health Check)", desc: "No adivinamos dónde duele. Realizamos un diagnóstico forense de tu instancia para identificar duplicados, procesos rotos y fugas de eficiencia." },
      { title: "Higiene de Datos Radical", desc: "Limpiamos y deduplicamos tu base de datos. Porque una estrategia brillante basada en datos sucios sigue siendo un fracaso." },
      { title: "Automatización (Apex & Flows)", desc: "Eliminamos el trabajo manual repetitivo. Si un robot puede hacerlo, tu equipo de ventas no debería estar perdiendo el tiempo en ello." },
      { title: "Conexión del Ecosistema", desc: "Integramos Salesforce con Marketing Cloud, HubSpot y tu web. Rompemos los silos para que Marketing y Ventas hablen el mismo idioma." }
    ]
  },
  en: {
    title_main: "We stop guessing.",
    title_sub: "We start unifying.",
    desc: "At Acclaro Labs, we don't apply band-aids. We build bridges. We fuse business intelligence with technical execution so your data flows without friction.",
    cards: [
      { title: "Health Check Audit", desc: "We don't guess where it hurts. We perform a forensic diagnosis of your instance to identify duplicates, broken processes, and efficiency leaks." },
      { title: "Radical Data Hygiene", desc: "We clean and deduplicate your database. Because a brilliant strategy based on dirty data is still a failure." },
      { title: "Automation (Apex & Flows)", desc: "We eliminate repetitive manual work. If a robot can do it, your sales team shouldn't be wasting time on it." },
      { title: "Ecosystem Connection", desc: "We integrate Salesforce with Marketing Cloud, HubSpot, and your website. We break the silos so Marketing and Sales speak the same language." }
    ]
  },
  fr: {
    title_main: "Cessez de deviner.",
    title_sub: "Commencez à unifier.",
    desc: "Chez Acclaro Labs, nous ne posons pas de pansements. Nous construisons des ponts. Nous fusionnons l'intelligence d'affaires avec l'exécution technique pour que vos données circulent sans friction.",
    cards: [
      { title: "Audit de Santé (Health Check)", desc: "Nous ne devinons pas l'origine du problème. Nous réalisons un diagnostic légiste de votre instance pour identifier les doublons, les processus brisés et les fuites d'efficacité." },
      { title: "Hygiène de Données Radicale", desc: "Nous nettoyons et dédoublonnons votre base de données. Car une stratégie brillante basée sur des données sales reste un échec." },
      { title: "Automatisation (Apex & Flows)", desc: "Nous éliminons le travail manuel répétitif. Si un robot peut le faire, votre équipe de vente ne devrait pas perdre son temps dessus." },
      { title: "Connexion de l'Écosystème", desc: "Nous intégrons Salesforce avec Marketing Cloud, HubSpot et votre site web. Nous brisons les silos pour que le Marketing et les Ventes parlent la même langue." }
    ]
  }
};

interface CrmSolutionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmSolution({ lang = 'es' }: CrmSolutionProps) {
  const t = CONTENT[lang];
  const icons = [<ShieldCheck key={1} />, <Database key={2} />, <Zap key={3} />, <LinkIcon key={4} />];

  return (
    <section className="py-24 px-6 bg-gris-piedra relative overflow-hidden">
      {/* Fondo sutil de cuadrícula tecnológica */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-azul-zafiro/100 md:text-left text-center">
            <span className="text-white">{t.title_main}</span> <br/>
            {t.title_sub}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed md:text-left text-center">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.cards.map((sol, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-oro-antiguo/30">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-oro-antiguo/20 flex items-center justify-center text-oro-antiguo">
                {/* CORRECCIÓN: TypeScript fix para cloneElement */}
                {React.cloneElement(icons[i] as React.ReactElement<any>, { size: 24 })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}