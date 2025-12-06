'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Unplug, Layers } from 'lucide-react';

const problems = [
  {
    icon: <Timer className="w-10 h-10 text-rojo-lacre" />,
    stat: "53%",
    title: "Pérdida de Visitas",
    desc: "Si tu web tarda más de 3 segundos en cargar, has perdido a la mitad de tu audiencia antes de que vean tu logo."
  },
  {
    icon: <Unplug className="w-10 h-10 text-rojo-lacre" />,
    stat: "Datos Perdidos",
    title: "La Web Isla",
    desc: "Si los datos de tus formularios no llegan a tu CRM en tiempo real, estás quemando oportunidades de venta cada hora."
  },
  {
    icon: <Layers className="w-10 h-10 text-rojo-lacre" />,
    stat: "Lentitud",
    title: "Fricción Operativa",
    desc: "Si cada cambio de diseño es un dolor de cabeza de programación, tu equipo de marketing se mueve más lento que el mercado."
  }
];

export default function WebDevProblem() {
  return (
    <section className="py-20 px-6 bg-black/60 backdrop-blur-md border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            La estética sin estrategia es solo <span className="text-rojo-lacre">decoración.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            El mundo está lleno de webs preciosas que no venden nada. Tu web no debería ser una isla aislada; debería ser la puerta de entrada a tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
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
                  {prob.icon}
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