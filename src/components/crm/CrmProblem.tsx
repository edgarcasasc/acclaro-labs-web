'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileSpreadsheet, EyeOff, BarChart4 } from 'lucide-react';

const CONTENT = {
  es: {
    label: "La Realidad",
    title_main: "El dato más caro no es el que compras.",
    title_sub: "Es el que tienes y no usas.",
    intro: "Sabemos lo que se siente. Invertiste una fortuna en licencias, pero la realidad operativa es distinta:",
    cards: [
      { title: "Excel Hell", desc: "Tu equipo de ventas pierde horas limpiando hojas de cálculo porque no confían en los datos del CRM." },
      { title: "Marketing a Ciegas", desc: "Disparas campañas sin ver qué leads se convirtieron realmente en ventas. El ROI es un misterio." },
      { title: "Reportes de Fe", desc: "Tus dashboards muestran números que nadie sabe de dónde vienen. Tomas decisiones basadas en intuición, no en datos." }
    ],
    footer_main: "No tienes un problema de software.",
    footer_sub: "Tienes un problema de arquitectura de la verdad."
  },
  en: {
    label: "The Reality",
    title_main: "The most expensive data isn't the one you buy.",
    title_sub: "It’s the one you have but don’t use.",
    intro: "We know the feeling. You invested a fortune in licenses, but the operational reality is different:",
    cards: [
      { title: "Excel Hell", desc: "Your sales team wastes hours cleaning spreadsheets because they don't trust the CRM data." },
      { title: "Marketing Flying Blind", desc: "You launch campaigns without seeing which leads actually convert into sales. ROI is a mystery." },
      { title: "Reports on Faith", desc: "Your dashboards show numbers no one can trace. You make decisions based on intuition, not data." }
    ],
    footer_main: "You don't have a software problem.",
    footer_sub: "You have an architecture of truth problem."
  },
  fr: {
    label: "La Réalité",
    title_main: "La donnée la plus chère n'est pas celle que vous achetez.",
    title_sub: "C'est celle que vous possédez mais n'utilisez pas.",
    intro: "Nous connaissons ce sentiment. Vous avez investi une fortune en licences, mais la réalité opérationnelle est tout autre :",
    cards: [
      { title: "L'Enfer d'Excel", desc: "Votre équipe commerciale perd des heures à nettoyer des feuilles de calcul car elle ne fait pas confiance aux données du CRM." },
      { title: "Marketing à l'Aveugle", desc: "Vous lancez des campagnes sans voir quels leads se transforment réellement en ventes. Le ROI reste un mystère." },
      { title: "Rapports de Foi", desc: "Vos tableaux de bord affichent des chiffres dont personne ne connaît l'origine. Vous prenez des décisions basées sur l'intuition, pas sur les données." }
    ],
    footer_main: "Vous n'avez pas un problème de logiciel.",
    footer_sub: "Vous avez un problème d'architecture de la vérité."
  }
};

interface CrmProblemProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmProblem({ lang = 'es' }: CrmProblemProps) {
  const t = CONTENT[lang];
  
  // Iconos fijos (no cambian por idioma)
  const icons = [
    <FileSpreadsheet key={1} className="w-8 h-8 text-rojo-lacre" />,
    <EyeOff key={2} className="w-8 h-8 text-rojo-lacre" />,
    <BarChart4 key={3} className="w-8 h-8 text-rojo-lacre" />
  ];

  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rojo-lacre/10 border border-rojo-lacre/30 mb-6">
            <AlertTriangle size={16} className="text-rojo-lacre" />
            <span className="text-rojo-lacre text-sm font-bold uppercase tracking-wider">{t.label}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            {t.title_main}<br/>
            <span className="text-gray-400">{t.title_sub}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gris-piedra p-8 rounded-xl border border-white/10 hover:border-rojo-lacre/50 transition-colors group"
            >
              <div className="mb-6 bg-black/30 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-serif text-white">
            {t.footer_main} <br/>
            <span className="text-oro-antiguo border-b border-oro-antiguo">{t.footer_sub}</span>
          </p>
        </div>
      </div>
    </section>
  );
}