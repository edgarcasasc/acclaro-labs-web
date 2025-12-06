import { color } from 'framer-motion';
import React from 'react';

// Estos objetivos se basan en tu componente 'SolutionSection.tsx'
const Objetivo1 = () => (
  <div className="rounded-lg border border-azul-zafiro/50 bg-gray-800/20 p-6 shadow-lg hover:shadow-azul-zafiro/30">
    <h3 className="mb-4 font-display text-2xl font-bold text-blanco-pergamino">
      🎯 Objetivo 1: Bajar Costos Operativos
    </h3><hr></hr><br></br>
    <p className="mb-4 text-blanco-pergamino/80">
      Convertimos sus registros de gastos, nóminas y logística en un mapa claro para encontrar ahorros.
    </p>
    <ul className="list-inside list-disc space-y-2 text-blanco-pergamino/90">
      <li><strong>Dashboard de Control de OPEX:</strong> Unificamos sus gastos (QuickBooks, SAP) para comparar presupuesto vs. gasto real.</li>
      <li><strong>Análisis de Cadena de Suministro:</strong> Integramos su ERP y WMS para optimizar rutas y costos de almacén.</li>
      <li><strong>Optimización de Recursos:</strong> Identificamos licencias de software (Salesforce, Adobe) sin usar y redundancias de personal.</li>
    </ul>
  </div>
);

const Objetivo2 = () => (
  <div className="rounded-lg border border-azul-zafiro/50 bg-gray-800/20 p-6 shadow-lg hover:shadow-azul-zafiro/30">
    <h3 className="mb-4 font-display text-2xl font-bold text-blanco-pergamino">
      🎯 Objetivo 2: Acelerar su Embudo de Ventas
    </h3><hr></hr><br></br>
    <p className="mb-4 text-blanco-pergamino/80">
      Conectamos su CRM (Salesforce, HubSpot) con sus anuncios para cerrar ventas más rápido.
    </p>
    <ul className="list-inside list-disc space-y-2 text-blanco-pergamino/90">
      <li><strong>Dashboard de Velocidad del Funnel (MQL a SQL):</strong> Detectamos dónde se "enfrían" las oportunidades para actuar a tiempo.</li>
      <li><strong>Análisis de Atribución (CAC y ROI):</strong> Conectamos Google Ads y su CRM para mostrarle qué canal genera ventas reales.</li>
      <li><strong>IA de Venta Cruzada (Cross-Sell):</strong> Analizamos historiales de compra para predecir la siguiente mejor oferta (ej. "85% de probabilidad de comprar B").</li>
    </ul>
  </div>
);

const Objetivo3 = () => (
  <div className="rounded-lg border border-azul-zafiro/50 bg-gray-800/20 p-6 shadow-lg hover:shadow-azul-zafiro/30">
    <h3 className="mb-4 font-display text-2xl font-bold text-pergamino">
      🎯 Objetivo 3: Optimizar Producción y Eficiencia
    </h3>
    <hr></hr><br></br>
    <p className="mb-4 text-blanco-pergamino/80">
      Le damos la visibilidad para eliminar la fricción desde el almacén hasta la maquinaria.
    </p>
    <ul className="list-inside list-disc space-y-2 text-blanco-pergamino/90">
      <li><strong>Dashboard de Tiempos de Ciclo de Pedido:</strong> Identificamos exactamente en qué etapa (picking, packing) se atoran sus entregas.</li>
      <li><strong>Análisis de Cuellos de Botella (OEE):</strong> Conectamos datos de máquinas (MES, SCADA) para encontrar la estación que frena su línea.</li>
      <li><strong>Mantenimiento Predictivo con IA:</strong> Predecimos fallos en maquinaria crítica con días de anticipación usando datos de sensores (IoT).</li>
      <li><strong>Eficiencia de Soporte al Cliente:</strong> Analizamos datos (Zendesk, Service Cloud) para optimizar su Tiempo de Primera Respuesta (FRT).</li>
    </ul>
  </div>
);


const InformesSolution = () => {
  return (
    // Estilo basado en SolutionSection.tsx: Fondo gris-piedra, acentos Azul Zafiro
    <section className="relative bg-gris-piedra py-20 text-blanco-pergamino">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            De Datos Dispersos a Decisiones Inteligentes
          </h2>
          <p className="mt-4 text-xl text-blanco-pergamino/80">
            No creamos dashboards "bonitos". Creamos motores de decisión. Activamos sus datos conectándolos a Tableau, Power BI y modelos de IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Objetivo1 />
          <Objetivo2 />
          <Objetivo3 />
        </div>
      </div>
    </section>
  );
};

export default InformesSolution;