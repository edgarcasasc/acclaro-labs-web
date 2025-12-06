// src/components/AuditFormSection.tsx
'use client';
import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

// Interfaz para el manejo de tipos (Buenas prácticas)
interface FormData {
  name: string;
  email: string;
  url: string;
  crmType: string;
}

export default function AuditFormSection() {
  // Estados para el manejo de UI/feedback
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', url: '', crmType: 'Salesforce' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manejo de cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact-audit', { // <-- Llama a la nueva ruta de API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('El servidor falló al procesar la solicitud.');
      }

      // Éxito:
      setIsSuccess(true);
      setFormData({ name: '', email: '', url: '', crmType: 'Salesforce' }); // Limpia formulario
      
    } catch (err) {
      console.error(err);
      setError('Hubo un error de conexión. Intenta más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="auditoria" className="py-24 px-6 bg-gradient-to-b from-gris-piedra to-black border-t border-white/10">
      <div className="max-w-3xl mx-auto bg-zinc-900/80 border border-oro-antiguo/30 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* ... (Brillos de fondo y encabezados) ... */}
        
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Diagnóstico de Claridad del Ecosistema
          </h2>
          <p className="text-gray-300">
            Analizamos tu web y tu CRM <strong>manualmente</strong> para encontrar las "grietas digitales" por donde se escapan tus ingresos.
          </p>
        </div>

        {/* Lógica de visualización: Formulario vs Mensaje de Éxito */}
        {!isSuccess ? (
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            
            {error && <div className="p-3 bg-rojo-lacre/20 border border-rojo-lacre text-red-300 rounded text-sm">{error}</div>}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">Nombre</label>
                <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">Correo Corporativo</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-2">URL del Sitio Web</label>
              <input required name="url" type="url" value={formData.url} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo outline-none transition-all" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-3">¿Qué CRM utilizas?</label>
              <select required name="crmType" value={formData.crmType} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded p-3 focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none text-gray-300">
                <option value="Salesforce" className="bg-zinc-900">Salesforce (El Gigante)</option>
                <option value="HubSpot" className="bg-zinc-900">HubSpot (El Ágil)</option>
                <option value="Zoho/Others" className="bg-zinc-900">Zoho / Otros</option>
                <option value="Excel" className="bg-zinc-900">Aún operamos con Excel (Sin juicios)</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-oro-antiguo text-gris-piedra text-lg font-bold py-4 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-glow-blue mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" /> Enviando...
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
            <h3 className="text-3xl font-serif font-bold text-white mb-4">¡Éxito! Solicitud Enviada</h3>
            <p className="text-lg text-gray-300 mb-8">
              Edgar y Abdiel han sido notificados. Analizaremos tu ecosistema y nos pondremos en contacto en menos de 24 horas. ¡Gracias por confiar en Acclaro Labs!
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