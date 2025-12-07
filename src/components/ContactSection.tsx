// src/components/ContactSection.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Agregamos el icono 'Bot' para la sección de IA
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Loader2, Bot } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    badge: "Acceso Directo",
    title: "Hablemos de <span class='text-oro-antiguo'>Unificar</span> tu Negocio.",
    desc: "Sin intermediarios. Sin filas de espera. Sin respuestas automáticas genéricas.",
    quote: "\"¿Tienes un ecosistema digital fracturado? Cuéntanos el desafío. <strong class='text-white'>Edgar o Abdiel</strong> leerán este mensaje personalmente y te responderán con una perspectiva humana y estratégica.\"",
    write_us: "Escribe Directo",
    base: "Base de Operaciones",
    location: "Monterrey, N.L., México <span class='text-gray-500 text-sm'>(Trabajando globalmente)</span>",
    // --- NUEVA SECCIÓN: AI Disclaimer ---
    ai_title: "Comunicación Sin Fronteras (AI-Powered)",
    ai_desc: "Creemos que el talento no tiene código postal. Usamos IA para comunicarnos fluidamente en tu idioma nativo. Escríbenos como prefieras: la tecnología nos conecta.",
    form: {
      name: "Nombre",
      email: "Correo Corporativo",
      email_note: "El apellido de tu empresa importa.",
      challenge: "¿Cuál es el desafío principal hoy?",
      message: "Mensaje",
      message_placeholder: "Danos contexto. Mientras más sepamos, mejor será la primera conversación.",
      btn: "Enviar Mensaje a los Fundadores",
      btn_loading: "Enviando...",
      footer: "Respetamos tu tiempo y tus datos. Recibirás una respuesta humana en menos de 24 horas hábiles. <strong>Cero spam, solo estrategia.</strong>"
    },
    options: {
      default: "Selecciona una opción...",
      salesforce: "Mis datos de Salesforce no cuadran",
      web: "Mi web es lenta / no convierte",
      content: "Necesito estrategia de contenido",
      audit: "Quiero una auditoría completa",
      other: "Otro / Colaboración"
    },
    success: {
      title: "¡Mensaje Recibido!",
      desc: "Tu mensaje ha llegado directamente a los fundadores. Te responderemos en breve.",
      btn: "Enviar otro mensaje"
    }
  },
  en: {
    badge: "Direct Access",
    title: "Let's Talk About <span class='text-oro-antiguo'>Unifying</span> Your Business.",
    desc: "No middlemen. No waiting lines. No generic auto-replies.",
    quote: "\"Do you have a fractured digital ecosystem? Tell us the challenge. <strong class='text-white'>Edgar or Abdiel</strong> will read this message personally and reply with a human and strategic perspective.\"",
    write_us: "Write Directly",
    base: "Base of Operations",
    location: "Monterrey, N.L., Mexico <span class='text-gray-500 text-sm'>(Working globally)</span>",
    // --- NUEVA SECCIÓN: AI Disclaimer ---
    ai_title: "Borderless Communication (AI-Powered)",
    ai_desc: "We believe talent has no zip code. We use AI to communicate fluently in your native language. Write to us as you prefer: technology connects us.",
    form: {
      name: "Name",
      email: "Corporate Email",
      email_note: "Your company domain matters.",
      challenge: "What is your main challenge today?",
      message: "Message",
      message_placeholder: "Give us context. The more we know, the better the first conversation.",
      btn: "Send Message to the Founders",
      btn_loading: "Sending...",
      footer: "We respect your time and data. You will receive a human response within 24 business hours. <strong>Zero spam, just strategy.</strong>"
    },
    options: {
      default: "Select an option...",
      salesforce: "My Salesforce data doesn't add up",
      web: "My website is slow / doesn't convert",
      content: "I need a content strategy",
      audit: "I want a full audit",
      other: "Other / Collaboration"
    },
    success: {
      title: "Message Received!",
      desc: "Your message has reached the founders directly. We will get back to you shortly.",
      btn: "Send another message"
    }
  },
  fr: {
    badge: "Accès Direct",
    title: "Parlons de <span class='text-oro-antiguo'>l'Unification</span> de votre Entreprise.",
    desc: "Pas d'intermédiaires. Pas de file d'attente. Pas de réponses automatiques génériques.",
    quote: "« Vous avez un écosystème numérique fracturé ? Racontez-nous votre défi. <strong class='text-white'>Edgar ou Abdiel</strong> liront ce message personnellement et vous répondront avec une perspective humaine et stratégique. »",
    write_us: "Écrivez-nous directement",
    base: "Base d'Opérations",
    location: "Monterrey, N.L., Mexique <span class='text-gray-500 text-sm'>(Opérant à l'échelle mondiale)</span>",
    // --- NUEVA SECCIÓN: AI Disclaimer ---
    ai_title: "Communication Sans Frontières (via IA)",
    ai_desc: "Nous croyons que le talent n'a pas de code postal. Nous utilisons l'IA pour communiquer couramment dans votre langue. Écrivez comme vous préférez : la technologie nous connecte.",
    form: {
      name: "Nom",
      email: "Email Professionnel",
      email_note: "Le nom de domaine de votre entreprise compte.",
      challenge: "Quel est votre principal défi aujourd'hui ?",
      message: "Message",
      message_placeholder: "Donnez-nous du contexte. Plus nous en savons, meilleure sera la première conversation.",
      btn: "Envoyer le Message aux Fondateurs",
      btn_loading: "Envoi en cours...",
      footer: "Nous respectons votre temps et vos données. Vous recevrez une réponse humaine en moins de 24 heures ouvrables. <strong>Zéro spam, que de la stratégie.</strong>"
    },
    options: {
      default: "Sélectionnez une option...",
      salesforce: "Mes données Salesforce ne sont pas cohérentes",
      web: "Mon site est lent / ne convertit pas",
      content: "J'ai besoin d'une stratégie de contenu",
      audit: "Je veux un audit complet",
      other: "Autre / Collaboration"
    },
    success: {
      title: "Message Reçu !",
      desc: "Votre message a bien été transmis aux fondateurs. Nous vous répondrons sous peu.",
      btn: "Envoyer un autre message"
    }
  }
};

// Configura aquí tu URL de Formspree (o usa la misma que en la auditoría)
const FORMSPREE_ENDPOINT = "TU_URL_DE_ENDPOINT_DE_FORMSPREE"; 

interface ContactSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContactSection({ lang = 'es' }: ContactSectionProps) {
  const t = CONTENT[lang];

  const [formData, setFormData] = useState({ name: '', email: '', challenge: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: lang, type: 'Direct Contact' }),
      });

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', challenge: '', message: '' });
      } 
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-start">
          
      {/* --- COLUMNA IZQUIERDA: El Manifiesto de Contacto --- */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 mb-6">
          <MessageSquare size={14} className="text-sky-400" />
          <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">{t.badge}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t.title }} />
        
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          {t.desc}
        </p>
        
        <p className="text-gray-400 mb-10 border-l-2 border-oro-antiguo/50 pl-4 italic" dangerouslySetInnerHTML={{ __html: t.quote }} />

        <div className="space-y-8"> {/* Aumentado espaciado vertical */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-oro-antiguo/30 transition-colors">
              <Mail className="text-oro-antiguo" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wide">{t.write_us}</h3>
              <a href="mailto:hola@acclarolabs.com" className="text-gray-300 hover:text-white transition-colors">
                hola@acclarolabs.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-400/30 transition-colors">
              <MapPin className="text-sky-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wide">{t.base}</h3>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: t.location }} />
            </div>
          </div>

          {/* --- NUEVO BLOQUE: AI Disclaimer --- */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-violet-400/30 transition-colors">
              <Bot className="text-violet-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wide">{t.ai_title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mt-1">
                {t.ai_desc}
              </p>
            </div>
          </div>
          
        </div>
      </motion.div>

      {/* --- COLUMNA DERECHA: Formulario --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
      >
          <div className="absolute top-0 right-0 w-32 h-32 bg-azul-zafiro/40 blur-[80px] rounded-full pointer-events-none"></div>

        {!isSuccess ? (
          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.name}</label>
              <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.email}</label>
              <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" />
              <p className="text-xs text-gray-600 mt-1">{t.form.email_note}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.challenge}</label>
              <select name="challenge" value={formData.challenge} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none">
                <option value="" className="bg-zinc-900">{t.options.default}</option>
                <option value="Salesforce Data" className="bg-zinc-900">{t.options.salesforce}</option>
                <option value="Web Performance" className="bg-zinc-900">{t.options.web}</option>
                <option value="Content Strategy" className="bg-zinc-900">{t.options.content}</option>
                <option value="Full Audit" className="bg-zinc-900">{t.options.audit}</option>
                <option value="Other" className="bg-zinc-900">{t.options.other}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.message}</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all resize-none" 
                placeholder={t.form.message_placeholder}
              ></textarea>
            </div>

            <button disabled={isLoading} className="w-full bg-azul-zafiro text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-glow-blue flex items-center justify-center gap-2 group disabled:opacity-70">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> {t.form.btn_loading}
                </>
              ) : (
                <>
                  <span>{t.form.btn}</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4 border-t border-white/5 pt-4" dangerouslySetInnerHTML={{ __html: t.form.footer }} />
          </form>
        ) : (
          <div className="text-center py-10 animate-in fade-in zoom-in duration-500 relative z-10">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400 w-10 h-10" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">{t.success.title}</h3>
            <p className="text-lg text-gray-300 mb-8">
              {t.success.desc}
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-sky-400 hover:underline text-sm"
            >
              {t.success.btn}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}