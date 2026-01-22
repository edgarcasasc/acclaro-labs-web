import React from 'react';

const GraficaBarras = () => {
  // Datos simulados para las barras
  const heights = [40, 65, 45, 80, 55, 90, 70];

  return (
    <div className="w-full pt-2">
      <div className="flex items-end justify-between gap-2 h-24 w-full">
        {heights.map((h, i) => (
          <div key={i} className="group relative w-full flex flex-col justify-end h-full">
             {/* Tooltip simulado al hover */}
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-[9px] text-white px-1.5 py-0.5 rounded border border-slate-600 pointer-events-none whitespace-nowrap z-10">
                {h}k reqs
             </div>
             
             {/* La Barra */}
            <div 
              className="w-full rounded-t-sm bg-slate-700 group-hover:bg-blue-500 transition-all duration-300 relative overflow-hidden"
              style={{ height: `${h}%` }}
            >
                {/* Efecto gradiente sutil dentro de la barra */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Eje X */}
      <div className="h-px w-full bg-slate-700 mt-0"></div>
      
      {/* Etiquetas Eje X */}
      <div className="flex justify-between mt-2 text-[9px] text-slate-500 font-mono uppercase">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

export default GraficaBarras;