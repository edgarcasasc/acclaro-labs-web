import React from 'react';

const GraficaLinea = () => {
  return (
    <div className="w-full h-32 relative">
      <svg
        viewBox="0 0 300 100"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradientLinea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Área bajo la curva */}
        <path
          d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,60 C250,50 250,10 300,10 V100 H0 Z"
          fill="url(#gradientLinea)"
        />
        
        {/* Línea principal */}
        <path
          d="M0,80 C50,80 50,40 100,40 C150,40 150,70 200,60 C250,50 250,10 300,10"
          fill="none"
          stroke="#10b981" // Emerald
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Puntos destacados */}
        <circle cx="100" cy="40" r="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        <circle cx="200" cy="60" r="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        <circle cx="300" cy="10" r="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
      </svg>
      
      {/* Etiqueta flotante simulada */}
      <div className="absolute top-0 right-0 bg-slate-800/80 px-2 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
        +24.5%
      </div>
    </div>
  );
};

export default GraficaLinea;