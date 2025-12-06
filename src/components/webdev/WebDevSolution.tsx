'use client';
import React from 'react';
import { Rocket, Network, Component, Search } from 'lucide-react';

const pillars = [
  {
    icon: <Rocket />,
    title: "Velocidad Supersónica (Core Vitals)",
    desc: "Optimizamos cada milisegundo con Next.js. A Google le obsesiona la velocidad; a tus clientes, la inmediatez. Una web rápida es respeto por el tiempo de tu usuario."
  },
  {
    icon: <Network />,
    title: "Conexión Radical (API First)",
    desc: "Tu web deja de ser una isla. La conectamos nativamente a Salesforce, Stripe o HubSpot. ¿Inventario real? Hecho. ¿Leads al flujo de ventas? Automático."
  },
  {
    icon: <Component />,
    title: "Diseño Atómico y Escalable",
    desc: "Creamos Sistemas de Diseño. Si cambias la estética de un botón, se replica en todo el ecosistema. Coherencia de marca y agilidad para lanzar landing pages en minutos."
  },
  {
    icon: <Search />,
    title: "SEO Técnico Impecable",
    desc: "Más que palabras clave. Es arquitectura de información, schema markup y código limpio para que los motores de búsqueda prioricen tu contenido desde el día 1."
  }
];

export default function WebDevSolution() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-left text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Ingeniería de Precisión para la <span className="text-oro-antiguo">Era de la Atención.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            En Acclaro Labs, no usamos plantillas genéricas. Desarrollamos arquitecturas a medida diseñadas para Google (SEO) y para Humanos (UX).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((item, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-gris-piedra to-black border border-white/10 hover:border-azul-zafiro/50 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-azul-zafiro/20 flex items-center justify-center text-azul-zafiro group-hover:text-white group-hover:bg-azul-zafiro transition-colors">
               {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
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