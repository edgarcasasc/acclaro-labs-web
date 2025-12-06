'use client';
import React from 'react';
import { ShieldCheck, Database, Zap, Link as LinkIcon } from 'lucide-react';

const solutions = [
  {
    icon: <ShieldCheck />,
    title: "Auditoría de Salud (Health Check)",
    desc: "No adivinamos dónde duele. Realizamos un diagnóstico forense de tu instancia para identificar duplicados, procesos rotos y fugas de eficiencia."
  },
  {
    icon: <Database />,
    title: "Higiene de Datos Radical",
    desc: "Limpiamos y deduplicamos tu base de datos. Porque una estrategia brillante basada en datos sucios sigue siendo un fracaso."
  },
  {
    icon: <Zap />,
    title: "Automatización (Apex & Flows)",
    desc: "Eliminamos el trabajo manual repetitivo. Si un robot puede hacerlo, tu equipo de ventas no debería estar perdiendo el tiempo en ello."
  },
  {
    icon: <LinkIcon />,
    title: "Conexión del Ecosistema",
    desc: "Integramos Salesforce con Marketing Cloud, HubSpot y tu web. Rompemos los silos para que Marketing y Ventas hablen el mismo idioma."
  }
];

export default function CrmSolution() {
  return (
    <section className="py-24 px-6 bg-gris-piedra relative overflow-hidden">
      {/* Fondo sutil de cuadrícula tecnológica */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-azul-zafiro/100 md:text-left text-center">
            <span className="text-white">Dejamos de adivinar.</span> <br/>
            Empezamos a unificar.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed md:text-left text-center">
            En Acclaro Labs, no ponemos parches. Construimos puentes. Fusionamos la inteligencia de negocio con la ejecución técnica para que tus datos fluyan sin fricción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-oro-antiguo/30">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-oro-antiguo/20 flex items-center justify-center text-oro-antiguo">
               {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 24 })}
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