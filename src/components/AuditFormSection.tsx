// src/components/AuditFormSection.tsx
'use client';
import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function AuditFormSection() {
  // Estados para controlar la interfaz
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Función que simula el envío
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setIsLoading(true);

    // Simulamos un retraso de red (como si fuera a Salesforce)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Aquí iría la conexión real a Salesforce en la Fase 2
    }, 1500);
  };

  return (
    <section id="auditoria" className="py-24 px-6 bg-gradient-to-b from-gris-piedra to-black border-t border-white/10">
      <div className="max-w-3xl mx-auto bg-zinc-900/80 border border-oro-antiguo/30 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-oro-antiguo/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Diagnóstico de Claridad del Ecosistema
          </h2>
          <p className="text-gray-300">
            No te daremos un reporte genérico. Analizamos tu web y tu CRM <strong>manualmente</strong> para encontrar las "grietas digitales".
          </p>
        </div>

        {/* Lógica de visualización: Formulario vs Mensaje de Éxito */}
        {!isSuccess ? (
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">Nombre</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">Correo Corporativo</label>
                <input required type="email" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-2">URL del Sitio Web</label>
              <input required type="url" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo outline-none transition-all" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-3">¿Qué CRM utilizas?</label>
              <div className="space-y-3">
                {/* Inputs radio nativos para simplicidad */}
                <label className="flex items-center gap-3 p-3 border border-white/5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                  <input type="radio" name="crm" value="Salesforce" className="accent-oro-antiguo" />
                  <span className="text-gray-300">Salesforce</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-white/5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                  <input type="radio" name="crm" value="HubSpot" className="accent-oro-antiguo" />
                  <span className="text-gray-300">HubSpot</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-white/5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                  <input type="radio" name="crm" value="Excel" className="accent-oro-antiguo" />
                  <span className="text-gray-300">Aún operamos con Excel (Sin juicios)</span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-oro-antiguo text-gris-piedra text-lg font-bold py-4 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-glow-blue mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" /> Procesando...
                </>
              ) : (
                ">> Solicitar mi Auditoría Forense Gratuita <<"
              )}
            </button>

            <p className="text-xs text-center text-rojo-lacre/80 mt-4 bg-rojo-lacre/10 py-2 rounded border border-rojo-lacre/20">
              ⚠️ <strong>Nota:</strong> Cupos actuales disponibles: 2.
            </p>
          </form>
        ) : (
          // --- PANTALLA DE ÉXITO ---
          <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400 w-10 h-10" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">¡Solicitud Recibida!</h3>
            <p className="text-lg text-gray-300 mb-8">
              Edgar y Abdiel han recibido tu solicitud. Analizaremos tu ecosistema y te contactaremos en menos de 24 horas.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-oro-antiguo hover:underline text-sm"
            >
              Enviar otra solicitud
            </button>
          </div>
        )}
      </div>
    </section>
  );
}