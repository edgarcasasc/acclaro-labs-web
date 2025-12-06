'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Unplug, Layers } from 'lucide-react';

const CONTENT = {
  es: {
    title: "La estética sin estrategia es solo",
    highlight: "decoración.",
    intro: "El mundo está lleno de webs preciosas que no venden nada. Tu web no debería ser una isla aislada; debería ser la puerta de entrada a tu negocio.",
    cards: [
      { stat: "53%", title: "Pérdida de Visitas", desc: "Si tu web tarda más de 3 segundos en cargar, has perdido a la mitad de tu audiencia antes de que vean tu logo." },
      { stat: "Datos Perdidos", title: "La Web Isla", desc: "Si los datos de tus formularios no llegan a tu CRM en tiempo real, estás quemando oportunidades de venta cada hora." },
      { stat: "Lentitud", title: "Fricción Operativa", desc: "Si cada cambio de diseño es un dolor de cabeza de programación, tu equipo de marketing se mueve más lento que el mercado." }
    ]
  },
  en: {
    title: "Aesthetics without strategy is just",
    highlight: "decoration.",
    intro: "The world is full of beautiful websites that sell nothing. Your website shouldn't be an isolated island; it should be the gateway to your business.",
    cards: [
      { stat: "53%", title: "Visit Loss", desc: "If your site takes more than 3 seconds to load, you've lost half your audience before they even see your logo." },
      { stat: "Lost Data", title: "The Island Web", desc: "If your form data doesn't hit your CRM in real-time, you are burning sales opportunities every hour." },
      { stat: "Slowness", title: "Operational Friction", desc: "If every design change is a coding headache, your marketing team moves slower than the market." }
    ]
  },
  fr: {
    title: "L'esthétique sans stratégie n'est que de la",
    highlight: "décoration.",
    intro: "Le monde est plein de sites magnifiques qui ne vendent rien. Votre site ne devrait pas être une île isolée ; il devrait être la porte d'entrée de votre entreprise.",
    cards: [
      { stat: "53 %", title: "Perte de Visites", desc: "Si votre site met plus de 3 secondes à charger, vous avez perdu la moitié de votre audience avant même qu'elle ne voie votre logo." },
      { stat: "Données Perdues", title: "Le Web Île", desc: "Si les données de vos formulaires n'arrivent pas à votre CRM en temps réel, vous brûlez des opportunités de vente chaque heure." },
      { stat: "Lenteur", title: "Friction Opérationnelle", desc: "Si chaque changement de design est un casse-tête de programmation, votre équipe marketing avance plus lentement que le marché." }
    ]
  }
};

interface WebDevProblemProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevProblem({ lang = 'es' }: WebDevProblemProps) {
  const t = CONTENT[lang];
  const icons = [<Timer key={1} className="w-10 h-10 text-rojo-lacre" />, <Unplug key={2} className="w-10 h-10 text-rojo-lacre" />, <Layers key={3} className="w-10 h-10 text-rojo-lacre" />];

  return (
    <section className="py-20 px-6 bg-black/60 backdrop-blur-md border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            {t.title} <span className="text-rojo-lacre">{t.highlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gris-piedra/80 p-8 rounded-xl border border-rojo-lacre/20 hover:border-rojo-lacre/60 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-black/40 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">{prob.stat}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}