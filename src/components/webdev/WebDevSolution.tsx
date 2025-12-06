'use client';
import React from 'react';
import { Rocket, Network, Component, Search } from 'lucide-react';

const CONTENT = {
  es: {
    title: "Ingeniería de Precisión para la",
    highlight: "Era de la Atención.",
    intro: "En Acclaro Labs, no usamos plantillas genéricas. Desarrollamos arquitecturas a medida diseñadas para Google (SEO) y para Humanos (UX).",
    pillars: [
      { title: "Velocidad Supersónica (Core Vitals)", desc: "Optimizamos cada milisegundo con Next.js. A Google le obsesiona la velocidad; a tus clientes, la inmediatez. Una web rápida es respeto por el tiempo de tu usuario." },
      { title: "Conexión Radical (API First)", desc: "Tu web deja de ser una isla. La conectamos nativamente a Salesforce, Stripe o HubSpot. ¿Inventario real? Hecho. ¿Leads al flujo de ventas? Automático." },
      { title: "Diseño Atómico y Escalable", desc: "Creamos Sistemas de Diseño. Si cambias la estética de un botón, se replica en todo el ecosistema. Coherencia de marca y agilidad para lanzar landing pages en minutos." },
      { title: "SEO Técnico Impecable", desc: "Más que palabras clave. Es arquitectura de información, schema markup y código limpio para que los motores de búsqueda prioricen tu contenido desde el día 1." }
    ]
  },
  en: {
    title: "Precision Engineering for the",
    highlight: "Attention Economy.",
    intro: "At Acclaro Labs, we don't use generic templates. We develop custom architectures designed for Google (SEO) and for Humans (UX).",
    pillars: [
      { title: "Supersonic Speed (Core Vitals)", desc: "We optimize every millisecond with Next.js. Google is obsessed with speed; your customers, with immediacy. A fast web is respect for your user's time." },
      { title: "Radical Connection (API First)", desc: "Your web stops being an island. We connect it natively to Salesforce, Stripe, or HubSpot. Real-time inventory? Done. Leads to sales flow? Automatic." },
      { title: "Atomic & Scalable Design", desc: "We create Design Systems. If you change a button's aesthetic, it replicates across the ecosystem. Brand coherence and agility to launch landing pages in minutes." },
      { title: "Impeccable Technical SEO", desc: "More than keywords. It's information architecture, schema markup, and clean code so search engines prioritize your content from day 1." }
    ]
  },
  fr: {
    title: "Ingénierie de Précision pour",
    highlight: "l'Ère de l'Attention.",
    intro: "Chez Acclaro Labs, nous n'utilisons pas de modèles génériques. Nous développons des architectures sur mesure conçues pour Google (SEO) et pour les Humains (UX).",
    pillars: [
      { title: "Vitesse Supersonique (Core Vitals)", desc: "Nous optimisons chaque milliseconde avec Next.js. Google est obsédé par la vitesse ; vos clients, par l'immédiateté. Un web rapide est une marque de respect pour le temps de votre utilisateur." },
      { title: "Connexion Radicale (API First)", desc: "Votre site cesse d'être une île. Nous le connectons nativement à Salesforce, Stripe ou HubSpot. Inventaire en temps réel ? Fait. Leads vers le flux de ventes ? Automatique." },
      { title: "Design Atomique et Évolutif", desc: "Nous créons des Systèmes de Design. Si vous changez l'esthétique d'un bouton, cela se réplique dans tout l'écosystème. Cohérence de marque et agilité pour lancer des landing pages en quelques minutes." },
      { title: "SEO Technique Impeccable", desc: "Plus que des mots-clés. C'est l'architecture de l'information, le balisage schema et un code propre pour que les moteurs de recherche priorisent votre contenu dès le jour 1." }
    ]
  }
};

interface WebDevSolutionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevSolution({ lang = 'es' }: WebDevSolutionProps) {
  const t = CONTENT[lang];
  const icons = [<Rocket key={1} />, <Network key={2} />, <Component key={3} />, <Search key={4} />];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-left text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            {t.title} <span className="text-oro-antiguo">{t.highlight}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.pillars.map((item, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-gris-piedra to-black border border-white/10 hover:border-azul-zafiro/50 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-azul-zafiro/20 flex items-center justify-center text-azul-zafiro group-hover:text-white group-hover:bg-azul-zafiro transition-colors">
                {React.cloneElement(icons[i] as React.ReactElement<any>, { size: 28 })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}