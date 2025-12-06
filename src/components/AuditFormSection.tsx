// src/components/AuditFormSection.tsx
'use client';
import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Diagnóstico de Claridad del Ecosistema",
    desc: "Analizamos tu web y tu CRM <strong>manualmente</strong> para encontrar las \"grietas digitales\" por donde se escapan tus ingresos.",
    labels: {
      name: "Nombre",
      email: "Correo Corporativo",
      url: "URL del Sitio Web",
      crm: "¿Qué CRM utilizas?"
    },
    options: {
      salesforce: "Salesforce (El Gigante)",
      hubspot: "HubSpot (El Ágil)",
      zoho: "Zoho / Otros",
      excel: "Aún operamos con Excel (Sin juicios)"
    },
    cta: {
      default: ">> Solicitar mi Auditoría Forense Gratuita <<",
      loading: "Enviando..."
    },
    note: "⚠️ Nota: Cupos actuales disponibles: 2.",
    success: {
      title: "¡Éxito! Solicitud Enviada",
      desc: "Edgar y Abdiel han sido notificados. Analizaremos tu ecosistema y nos pondremos en contacto en menos de 24 horas. ¡Gracias por confiar en Acclaro Labs!",
      btn: "Enviar otra solicitud"
    },
    error: "Hubo un error de conexión. Intenta más tarde."
  },
  en: {
    title: "Ecosystem Clarity Diagnosis",
    desc: "We analyze your website and CRM <strong>manually</strong> to find the \"digital cracks\" where your revenue is leaking.",
    labels: {
      name: "Name",
      email: "Corporate Email",
      url: "Website URL",
      crm: "Which CRM do you use?"
    },
    options: {
      salesforce: "Salesforce (The Giant)",
      hubspot: "HubSpot (The Agile)",
      zoho: "Zoho / Others",
      excel: "We still run on Excel (No judgment)"
    },
    cta: {
      default: ">> Request my Free Forensic Audit <<",
      loading: "Sending..."
    },
    note: "⚠️ Note: Current spots available: 2.",
    success: {
      title: "Success! Request Sent",
      desc: "Edgar and Abdiel have been notified. We will analyze your ecosystem and contact you within 24 hours. Thank you for trusting Acclaro Labs!",
      btn: "Send another request"
    },
    error: "Connection error. Please try again later."
  },
  fr: {
    title: "Diagnostic de Clarté de l'Écosystème",
    desc: "Nous analysons votre site web et votre CRM <strong>manuellement</strong> pour trouver les « fissures numériques » par où s'échappent vos revenus.",
    labels: {
      name: "Nom",
      email: "Email Professionnel",
      url: "URL du Site Web",
      crm: "Quel CRM utilisez-vous ?"
    },
    options: {
      salesforce: "Salesforce (Le Géant)",
      hubspot: "HubSpot (L'Agile)",
      zoho: "Zoho / Autres",
      excel: "Nous fonctionnons encore sur Excel (Sans jugement)"
    },
    cta: {
      default: ">> Demander mon Audit Forensique Gratuit <<",
      loading: "Envoi en cours..."
    },
    note: "⚠️ Note : Places actuelles disponibles : 2.",
    success: {
      title: "Succès ! Demande Envoyée",
      desc: "Edgar et Abdiel ont été notifiés. Nous analyserons votre écosystème et vous contacterons sous 24 heures. Merci de faire confiance à Acclaro Labs !",
      btn: "Envoyer une autre demande"
    },
    error: "Erreur de connexion. Veuillez réessayer plus tard."
  }
};

// Interfaz para el manejo de tipos
interface FormData {
  name: string;
  email: string;
  url: string;
  crmType: string;
}

// Props para recibir el idioma
interface AuditFormSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function AuditFormSection({ lang = 'es' }: AuditFormSectionProps) {
  const t = CONTENT[lang]; // Seleccionamos el contenido según el idioma

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', url: '', crmType: 'Salesforce' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact-audit', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: lang }), // Enviamos también el idioma
      });

      if (!response.ok) {
        throw new Error('El servidor falló al procesar la solicitud.');
      }

      // Éxito:
      setIsSuccess(true);
      setFormData({ name: '', email: '', url: '', crmType: 'Salesforce' }); 
      
    } catch (err) {
      console.error(err);
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="auditoria" className="py-24 px-6 bg-gradient-to-b from-gris-piedra to-black border-t border-white/10">
      <div className="max-w-3xl mx-auto bg-zinc-900/80 border border-oro-antiguo/30 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Brillo de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-oro-antiguo/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: t.desc }} />
        </div>

        {/* Lógica de visualización */}
        {!isSuccess ? (
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            
            {error && <div className="p-3 bg-rojo-lacre/20 border border-rojo-lacre text-red-300 rounded text-sm">{error}</div>}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">{t.labels.name}</label>
                <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm text-oro-antiguo font-medium mb-2">{t.labels.email}</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-2">{t.labels.url}</label>
              <input required name="url" type="url" value={formData.url} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-oro-antiguo outline-none transition-all" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm text-oro-antiguo font-medium mb-3">{t.labels.crm}</label>
              <select required name="crmType" value={formData.crmType} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded p-3 focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none text-gray-300">
                <option value="Salesforce" className="bg-zinc-900">{t.options.salesforce}</option>
                <option value="HubSpot" className="bg-zinc-900">{t.options.hubspot}</option>
                <option value="Zoho/Others" className="bg-zinc-900">{t.options.zoho}</option>
                <option value="Excel" className="bg-zinc-900">{t.options.excel}</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-oro-antiguo text-gris-piedra text-lg font-bold py-4 rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-glow-blue mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" /> {t.cta.loading}
                </>
              ) : (
                t.cta.default
              )}
            </button>

            <p className="text-xs text-center text-rojo-lacre/80 mt-4 bg-rojo-lacre/10 py-2 rounded border border-rojo-lacre/20">
              {t.note}
            </p>
          </form>
        ) : (
          // --- PANTALLA DE ÉXITO ---
          <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400 w-10 h-10" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">{t.success.title}</h3>
            <p className="text-lg text-gray-300 mb-8">
              {t.success.desc}
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-oro-antiguo hover:underline text-sm"
            >
              {t.success.btn}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}