import React from 'react';

const diferenciadores = [
  {
    titulo: "Agnósticos de Plataforma",
    descripcion: "No lo forzamos a usar una herramienta. Somos expertos en conectar cualquier fuente: Salesforce, SAP, Oracle, HubSpot, QuickBooks, Data Lakes o su SQL.",
  },
  {
    titulo: "IA Integrada y Accionable",
    descripcion: "No nos detenemos en el 'qué pasó'. Usamos IA para decirle 'qué pasará' (Mantenimiento Predictivo) y 'qué debería hacer ahora' (Venta Cruzada).",
  },
  {
    titulo: "Enfoque en el Problema de Negocio",
    descripcion: "Usted no necesita un 'Dashboard de Tableau'. Usted necesita 'reducir el tiempo extra en la Línea 2'. Entendemos la diferencia.",
  },
  {
    titulo: "Implementación Rápida (POC)",
    descripcion: "Demostramos valor rápidamente. Podemos tener un Proof of Concept (POC) funcional para Pymes en 2-4 semanas, no en 6 meses.",
  }
];

const InformesDiferenciadores = () => {
  return (
    // Estilo basado en TeamSection.tsx: Fondo blanco-pergamino
    <section className="relative bg-blanco-pergamino py-20 text-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            No solo integramos. Activamos.
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            No vendemos licencias de software. Vendemos resultados de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {diferenciadores.map((item) => (
            <div key={item.titulo} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl">✅</div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">{item.titulo}</h3>
                <p className="text-gray-700">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformesDiferenciadores;