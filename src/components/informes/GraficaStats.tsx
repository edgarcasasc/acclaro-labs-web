import React from 'react';

const GraficaStats = () => {
  return (
    <div className="flex items-center gap-4 py-2">
      {/* Gráfico de Dona SVG */}
      <div className="relative h-20 w-20 shrink-0">
        <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
          {/* Fondo del anillo */}
          <path
            className="text-slate-800"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Segmento 1 (Azul) */}
          <path
            className="text-sky-500"
            strokeDasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Segmento 2 (Amber) - Offset manual simple */}
          <path
            className="text-amber-500"
            strokeDasharray="25, 100"
            strokeDashoffset="-65" /* Empieza donde termina el azul */
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
        {/* Texto central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">85%</span>
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span className="text-slate-300">New Users</span>
          </div>
          <span className="font-mono text-sky-400">60%</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-slate-300">Returning</span>
          </div>
          <span className="font-mono text-amber-400">25%</span>
        </div>
        <div className="h-1 w-full rounded-full bg-slate-800 mt-1 overflow-hidden">
             <div className="h-full bg-slate-600 w-[15%]"></div>
        </div>
      </div>
    </div>
  );
};

export default GraficaStats;