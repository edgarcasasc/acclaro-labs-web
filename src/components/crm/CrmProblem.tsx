'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileSpreadsheet, EyeOff, BarChart4 } from 'lucide-react';

const painPoints = [
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-rojo-lacre" />,
    title: "Excel Hell",
    desc: "Tu equipo de ventas pierde horas limpiando hojas de cálculo porque no confían en los datos del CRM."
  },
  {
    icon: <EyeOff className="w-8 h-8 text-rojo-lacre" />,
    title: "Marketing a Ciegas",
    desc: "Disparas campañas sin ver qué leads se convirtieron realmente en ventas. El ROI es un misterio."
  },
  {
    icon: <BarChart4 className="w-8 h-8 text-rojo-lacre" />,
    title: "Reportes de Fe",
    desc: "Tus dashboards muestran números que nadie sabe de dónde vienen. Tomas decisiones basadas en intuición, no en datos."
  }
];

export default function CrmProblem() {
  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rojo-lacre/10 border border-rojo-lacre/30 mb-6">
            <AlertTriangle size={16} className="text-rojo-lacre" />
            <span className="text-rojo-lacre text-sm font-bold uppercase tracking-wider">La Realidad</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            El dato más caro no es el que compras.<br/>
            <span className="text-gray-400">Es el que tienes y no usas.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sabemos lo que se siente. Invertiste una fortuna en licencias, pero la realidad operativa es distinta:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gris-piedra p-8 rounded-xl border border-white/10 hover:border-rojo-lacre/50 transition-colors group"
            >
              <div className="mb-6 bg-black/30 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-serif text-white">
            No tienes un problema de software. <br/>
            Tienes un problema de <span className="text-oro-antiguo border-b border-oro-antiguo">arquitectura de la verdad</span>.
          </p>
        </div>
      </div>
    </section>
  );
}