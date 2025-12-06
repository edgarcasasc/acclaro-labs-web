'use client';
import React from 'react';

const CONTENT = {
  es: {
    title: "De Datos Dispersos a Decisiones Inteligentes",
    desc: "No creamos dashboards \"bonitos\". Creamos motores de decisión. Activamos sus datos conectándolos a Tableau, Power BI y modelos de IA.",
    objs: [
      { title: "Objetivo 1: Bajar Costos Operativos", text: "Convertimos sus registros de gastos, nóminas y logística en un mapa claro para encontrar ahorros.", points: ["Dashboard de Control de OPEX", "Análisis de Cadena de Suministro", "Optimización de Recursos"] },
      { title: "Objetivo 2: Acelerar su Embudo de Ventas", text: "Conectamos su CRM (Salesforce, HubSpot) con sus anuncios para cerrar ventas más rápido.", points: ["Dashboard de Velocidad del Funnel", "Análisis de Atribución (CAC y ROI)", "IA de Venta Cruzada (Cross-Sell)"] },
      { title: "Objetivo 3: Optimizar Producción y Eficiencia", text: "Le damos la visibilidad para eliminar la fricción desde el almacén hasta la maquinaria.", points: ["Dashboard de Tiempos de Ciclo", "Análisis de Cuellos de Botella (OEE)", "Mantenimiento Predictivo con IA"] }
    ]
  },
  en: {
    title: "From Scattered Data to Smart Decisions",
    desc: "We don't build \"pretty\" dashboards. We build decision engines. We activate your data by connecting it to Tableau, Power BI, and AI models.",
    objs: [
      { title: "Objective 1: Cut Operating Costs", text: "We turn your expense, payroll, and logistics records into a clear map to find savings.", points: ["OPEX Control Dashboard", "Supply Chain Analysis", "Resource Optimization"] },
      { title: "Objective 2: Accelerate Your Sales Funnel", text: "We connect your CRM (Salesforce, HubSpot) with your ads to close sales faster.", points: ["Funnel Velocity Dashboard", "Attribution Analysis (CAC & ROI)", "Cross-Sell AI"] },
      { title: "Objective 3: Optimize Production & Efficiency", text: "We give you the visibility to eliminate friction from the warehouse to the machinery.", points: ["Order Cycle Time Dashboard", "Bottleneck Analysis (OEE)", "Predictive Maintenance with AI"] }
    ]
  },
  fr: {
    title: "De Données Dispersées à des Décisions Intelligentes",
    desc: "Nous ne créons pas de « jolis » tableaux de bord. Nous créons des moteurs de décision. Nous activons vos données en les connectant à Tableau, Power BI et des modèles d'IA.",
    objs: [
      { title: "Objectif 1 : Réduire les Coûts Opérationnels", text: "Nous convertissons vos registres de dépenses, paies et logistique en une carte claire pour trouver des économies.", points: ["Tableau de Bord de Contrôle OPEX", "Analyse de la Chaîne d'Approvisionnement", "Optimisation des Ressources"] },
      { title: "Objectif 2 : Accélérer votre Entonnoir de Vente", text: "Nous connectons votre CRM (Salesforce, HubSpot) à vos publicités pour conclure des ventes plus rapidement.", points: ["Tableau de Bord de Vélocité du Funnel", "Analyse d'Attribution (CAC et ROI)", "IA de Vente Croisée (Cross-Sell)"] },
      { title: "Objectif 3 : Optimiser la Production et l'Efficacité", text: "Nous vous donnons la visibilité pour éliminer la friction de l'entrepôt jusqu'aux machines.", points: ["Tableau de Bord Temps de Cycle", "Analyse des Goulots d'Étranglement", "Maintenance Prédictive par IA"] }
    ]
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesSolution({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative bg-gris-piedra py-20 text-blanco-pergamino">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-xl text-blanco-pergamino/80">{t.desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.objs.map((obj, i) => (
            <div key={i} className="rounded-lg border border-azul-zafiro/50 bg-gray-800/20 p-6 shadow-lg hover:shadow-azul-zafiro/30">
              <h3 className="mb-4 font-serif text-2xl font-bold text-blanco-pergamino">{obj.title}</h3>
              <hr className="border-white/10 mb-4"/>
              <p className="mb-4 text-blanco-pergamino/80">{obj.text}</p>
              <ul className="list-inside list-disc space-y-2 text-blanco-pergamino/90 text-sm">
                {obj.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}