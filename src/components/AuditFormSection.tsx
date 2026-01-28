'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, FileSearch, Figma, BarChart, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

// --- PEGA AQUÍ EL MISMO DICCIONARIO 'CONTENT' QUE YA TIENES ---
// (Lo he omitido aquí para ahorrar espacio, pero asegúrate de mantenerlo)
const CONTENT = {
  es: {
    // ... Tu contenido original ...
    deliverables_title: "No entregamos opiniones. Entregamos activos.",
    cards: [
      { title: "Reporte de Fricción", desc: "Auditoría heurística documentando dónde y por qué pierdes clientes.", icon: FileSearch, color: "text-emerald-400" },
      { title: "Wireframes de Conversión", desc: "Pantallas de alta fidelidad con la nueva arquitectura.", icon: Figma, color: "text-purple-400" },
      { title: "Proyección de Impacto", desc: "Estimación de recuperación de ingresos.", icon: BarChart, color: "text-blue-400" }
    ],
    form_title: "Diagnóstico de Claridad del Ecosistema",
    form_desc: "Analizamos tu web y tu CRM <strong class='text-oro-antiguo'>manualmente</strong> para encontrar las 'grietas digitales'.",
    labels: { name: "Nombre", email: "Correo Corporativo", url: "URL del Sitio Web", crm: "¿Qué CRM utilizas?" },
    options: { salesforce: "Salesforce", hubspot: "HubSpot", zoho: "Zoho", pipedrive: "Pipedrive", other: "Otro", excel: "Aún no usamos CRM (Excel)" },
    cta: { default: ">> Solicitar mi Auditoría Forense Gratuita <<", loading: "Procesando..." },
    note: "Nota: Cupos actuales disponibles: 2.",
    success: { title: "Solicitud Recibida", desc: "Edgar y Abdiel han sido notificados. Analizaremos tu ecosistema.", btn: "Volver al inicio" },
    error: "Error de conexión. Intenta de nuevo."
  },
  en: { 
     // ... (Mantén tu versión en inglés) ...
     cta: { default: "Request Audit", loading: "Processing..." },
     // ...
  }, 
  fr: { 
     // ... (Mantén tu versión en francés) ...
     cta: { default: "Demander Audit", loading: "Envoi..." },
     // ...
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function AuditFormSection({ lang = 'es' }: Props) {
  // @ts-ignore
  const t = CONTENT[lang] || CONTENT['es'];
  const [formData, setFormData] = useState({ name: '', email: '', url: '', crmType: 'Salesforce' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // --- AQUÍ ESTÁ EL CAMBIO CLAVE ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
        // Enviar datos reales al Backend
        const response = await fetch('/api/capture-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                website: formData.url,     // Mapeamos 'url' a 'website' que espera la API
                crm: formData.crmType,     // Enviamos el CRM
                source: 'audit_form'       // <--- ETIQUETA DE ORIGEN
            })
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', url: '', crmType: 'Salesforce' });
        } else {
            setStatus('error');
        }
    } catch (error) {
        console.error(error);
        setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="auditoria" className="relative py-24 px-6 bg-slate-950 border-t border-white/5 overflow-hidden">
      
      {/* Fondo Técnico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* BLOCK 1: ENTREGABLES */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white text-center mb-12">
            {t.deliverables_title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.cards && t.cards.map((card: any, i: number) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-600 transition-all duration-300"
                >
                  <div className={`mb-4 p-3 rounded-lg bg-slate-950 border border-slate-800 w-fit ${card.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BLOCK 2: FORMULARIO REAL */}
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-x-0 h-[2px] bg-emerald-500/50 shadow-[0_0_20px_#10b981] animate-scan pointer-events-none z-20" />
            
            <div className="p-8 md:p-10 relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 mb-4">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Acceso Seguro</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.form_title}</h2>
                <p className="text-slate-400 text-sm" dangerouslySetInnerHTML={{ __html: t.form_desc }} />
              </div>

              {status === 'success' ? (
                <div className="text-center py-10 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/50">
                    <CheckCircle className="text-emerald-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.success.title}</h3>
                  <p className="text-slate-400 mb-6">{t.success.desc}</p>
                  <button onClick={() => setStatus('idle')} className="text-oro-antiguo text-sm font-bold hover:underline">
                    {t.success.btn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.labels.name}</label>
                      <input required name="name" value={formData.name} onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all placeholder-slate-700"
                        placeholder="Nombre completo" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.labels.email}</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all placeholder-slate-700"
                        placeholder="nombre@empresa.com" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.labels.url}</label>
                    <input type="url" name="url" value={formData.url} onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all placeholder-slate-700"
                      placeholder="https://" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.labels.crm}</label>
                    <div className="relative">
                      <select name="crmType" value={formData.crmType} onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none cursor-pointer hover:bg-slate-900">
                        <option value="Salesforce">{t.options.salesforce}</option>
                        <option value="HubSpot">{t.options.hubspot}</option>
                        <option value="Zoho">{t.options.zoho}</option>
                        <option value="Pipedrive">{t.options.pipedrive}</option>
                        <option value="Other">{t.options.other}</option>
                        <option value="Excel">{t.options.excel}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full bg-oro-antiguo hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 group mt-2">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : (
                      <>{t.cta.default}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                  {status === 'error' && <p className="text-red-400 text-xs text-center mt-2">{t.error}</p>}
                </form>
              )}
            </div>

            <div className="bg-red-950/30 border-t border-red-900/30 py-3 px-6 flex items-center justify-center gap-2">
              <AlertTriangle size={14} className="text-red-400" />
              <p className="text-[10px] font-mono text-red-300 uppercase tracking-wide">{t.note}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}