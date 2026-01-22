'use client';

import React, { useActionState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Bot, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { sendContactForm } from '@/app/actions'; // <--- IMPORTAMOS LA ACCIÓN

// --- DICCIONARIO MULTI-IDIOMA (Sin cambios) ---
const CONTENT = {
  es: {
    badge: "Acceso Directo",
    title_start: "Hablemos de",
    title_highlight: "optimizar",
    title_end: "tu negocio digital.",
    subtitle: "Sin intermediarios. Sin tickets eternos. Te respondemos con una perspectiva humana y accionable.",
    quote: '"Cuéntanos el contexto y comparte tu URL si puedes. Edgar o Abdiel leerán tu mensaje personalmente y te responderán con el siguiente paso más claro."',
    contact_methods: {
      email_label: "Escribe Directo",
      location_label: "Base de Operaciones",
      location_text: "Monterrey, N.L., México",
      location_sub: "(Trabajando globalmente)",
      ai_label: "Comunicación Sin Fronteras",
      ai_badge: "AI-Powered",
      ai_desc: "Usamos IA para comunicarnos con claridad en tu idioma, sin perder el criterio humano."
    },
    form: {
      name: "Nombre",
      name_ph: "Nombre y apellido",
      email: "Email Corporativo",
      email_ph: "nombre@empresa.com",
      email_note: "Preferimos email corporativo para responder más rápido.",
      outcome_label: "¿Qué quieres mejorar primero?",
      outcome_ph: "Selecciona una opción...",
      context_label: "Contexto",
      context_ph: "Comparte tu URL y 3 datos: objetivo, métricas actuales (si las tienes) y herramientas principales.",
      btn: "Solicitar diagnóstico",
      sending: "Enviando...",
      success_title: "¡Mensaje Enviado!",
      success_desc: "Hemos recibido tu solicitud. Te responderemos en breve.",
      microcopy: "Respetamos tu tiempo y tus datos. Recibirás una respuesta humana en menos de 24 horas hábiles.",
      no_spam: "Cero spam."
    },
    options: [
      "Medición y atribución (Datos no confiables)",
      "Conversión (Fuga en el funnel)",
      "Eficiencia operativa (Procesos manuales)",
      "Integración (CRM/ERP/Soporte desconectados)",
      "Automatización/IA aplicada",
      "Otro / Colaboración"
    ]
  },
  en: {
    badge: "Direct Access",
    title_start: "Let's talk about",
    title_highlight: "optimizing",
    title_end: "your digital business.",
    subtitle: "No middlemen. No endless tickets. We answer with a human and actionable perspective.",
    quote: '"Tell us the context and share your URL if you can. Edgar or Abdiel will read your message personally and respond with the clearest next step."',
    contact_methods: {
      email_label: "Write Directly",
      location_label: "Base of Operations",
      location_text: "Monterrey, N.L., Mexico",
      location_sub: "(Working globally)",
      ai_label: "Borderless Communication",
      ai_badge: "AI-Powered",
      ai_desc: "We use AI to communicate clearly in your language, without losing human judgment."
    },
    form: {
      name: "Name",
      name_ph: "Full name",
      email: "Work Email",
      email_ph: "name@company.com",
      email_note: "We prefer work email for faster response.",
      outcome_label: "What do you want to improve first?",
      outcome_ph: "Select an option...",
      context_label: "Context",
      context_ph: "Share your URL and 3 facts: objective, current metrics (if any), and main tools.",
      btn: "Request Diagnosis",
      sending: "Sending...",
      success_title: "Message Sent!",
      success_desc: "We've received your request. We'll get back to you shortly.",
      microcopy: "We respect your time and data. You will receive a human response in less than 24 business hours.",
      no_spam: "Zero spam."
    },
    options: [
      "Measurement & Attribution (Unreliable Data)",
      "Conversion (Funnel Leaks)",
      "Operational Efficiency (Manual Processes)",
      "Integration (Disconnected CRM/ERP/Support)",
      "Automation/Applied AI",
      "Other / Collaboration"
    ]
  },
  fr: {
    badge: "Accès Direct",
    title_start: "Parlons d'",
    title_highlight: "optimiser",
    title_end: "votre activité numérique.",
    subtitle: "Pas d'intermédiaires. Pas de tickets interminables. Nous répondons avec une perspective humaine et exploitable.",
    quote: '"Racontez-nous le contexte et partagez votre URL si possible. Edgar ou Abdiel liront votre message personnellement et répondront avec la prochaine étape claire."',
    contact_methods: {
      email_label: "Écrire Directement",
      location_label: "Base d'Opérations",
      location_text: "Monterrey, N.L., Mexique",
      location_sub: "(Travaillant globalement)",
      ai_label: "Communication Sans Frontières",
      ai_badge: "AI-Powered",
      ai_desc: "Nous utilisons l'IA pour communiquer clairement dans votre langue, sans perdre le jugement humain."
    },
    form: {
      name: "Nom",
      name_ph: "Nom et prénom",
      email: "Email Professionnel",
      email_ph: "nom@entreprise.com",
      email_note: "Nous préférons l'email pro pour une réponse plus rapide.",
      outcome_label: "Que voulez-vous améliorer en premier ?",
      outcome_ph: "Sélectionnez une option...",
      context_label: "Contexte",
      context_ph: "Partagez votre URL et 3 faits : objectif, métriques actuelles (si disponibles) et outils principaux.",
      btn: "Demander un diagnostic",
      sending: "Envoi en cours...",
      success_title: "Message Envoyé !",
      success_desc: "Nous avons bien reçu votre demande. Nous vous répondrons sous peu.",
      microcopy: "Nous respectons votre temps et vos données. Vous recevrez une réponse humaine en moins de 24 heures ouvrables.",
      no_spam: "Zéro spam."
    },
    options: [
      "Mesure et Attribution (Données non fiables)",
      "Conversion (Fuites dans l'entonnoir)",
      "Efficacité Opérationnelle (Processus manuels)",
      "Intégration (CRM/ERP/Support déconnectés)",
      "Automatisation/IA Appliquée",
      "Autre / Collaboration"
    ]
  }
};

interface ContactSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

const initialState = {
  success: false,
  message: '',
};

export default function ContactSection({ lang = 'es' }: ContactSectionProps) {
  const t = CONTENT[lang];
  
  // --- HOOK DE SERVER ACTION ---
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);

  return (
    <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
      {/* --- COLUMNA IZQUIERDA (Igual que antes) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-4 lg:sticky lg:top-32"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azul-zafiro/10 border border-azul-zafiro/30 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">{t.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight text-white">
          {t.title_start} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-oro-antiguo to-amber-300">
            {t.title_highlight}
          </span> {t.title_end}
        </h1>
        
        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
          {t.subtitle}
        </p>
        
        <blockquote className="relative p-6 mb-12 bg-white/5 rounded-r-xl border-l-4 border-oro-antiguo backdrop-blur-sm">
          <p className="text-slate-300 italic text-lg leading-relaxed">
            {t.quote}
          </p>
        </blockquote>

        <div className="space-y-8">
          <div className="flex items-start gap-5 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-oro-antiguo group-hover:border-oro-antiguo/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-1">{t.contact_methods.email_label}</h3>
              <a href="mailto:hello@acclaroflow.com" className="text-lg text-slate-300 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-0.5">
                hello@acclaroflow.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-1">{t.contact_methods.location_label}</h3>
              <p className="text-slate-300">
                {t.contact_methods.location_text} <br/>
                <span className="text-slate-500 text-sm">{t.contact_methods.location_sub}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-violet-400 group-hover:border-violet-400/50 group-hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-all duration-300">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
                {t.contact_methods.ai_label}
                <span className="bg-violet-500/20 text-violet-300 text-[10px] px-1.5 py-0.5 rounded">{t.contact_methods.ai_badge}</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-1 max-w-sm">
                {t.contact_methods.ai_desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- COLUMNA DERECHA: El Formulario Funcional --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-b from-azul-zafiro/20 to-purple-600/20 rounded-2xl blur-xl opacity-50" />

        <div className="relative bg-slate-950/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* ESTADO DE ÉXITO */}
          {state.success ? (
            <div className="flex flex-col items-center justify-center text-center py-12 h-full min-h-[400px]">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-400 animate-in zoom-in duration-300">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{t.form.success_title}</h3>
              <p className="text-slate-400 max-w-xs">{t.form.success_desc}</p>
            </div>
          ) : (
            /* FORMULARIO ACTIVO */
            <form action={formAction} className="space-y-6">
              
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-oro-antiguo transition-colors">{t.form.name}</label>
                <input 
                  type="text" 
                  name="name" // IMPORTANTE: name attribute
                  id="name"
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white placeholder-slate-600 focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all disabled:opacity-50" 
                  placeholder={t.form.name_ph}
                  disabled={isPending}
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-oro-antiguo transition-colors">{t.form.email}</label>
                <input 
                  type="email" 
                  name="email" // IMPORTANTE
                  id="email"
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white placeholder-slate-600 focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all disabled:opacity-50" 
                  placeholder={t.form.email_ph}
                  disabled={isPending}
                />
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <span className="text-oro-antiguo">*</span> {t.form.email_note}
                </p>
              </div>

              <div className="group">
                <label htmlFor="outcome" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-oro-antiguo transition-colors">{t.form.outcome_label}</label>
                <div className="relative">
                  <select 
                    name="outcome" // IMPORTANTE
                    id="outcome"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none cursor-pointer hover:bg-slate-900 disabled:opacity-50"
                    disabled={isPending}
                  >
                    <option value="" className="bg-slate-950 text-gray-500">{t.form.outcome_ph}</option>
                    {t.options.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-950">{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="context" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-oro-antiguo transition-colors">{t.form.context_label}</label>
                <textarea 
                  name="context" // IMPORTANTE
                  id="context"
                  rows={4} 
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white placeholder-slate-600 focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all resize-none disabled:opacity-50" 
                  placeholder={t.form.context_ph}
                  disabled={isPending}
                ></textarea>
              </div>

              <button 
                type="submit" // AHORA SÍ ES SUBMIT
                disabled={isPending}
                className="w-full bg-azul-zafiro hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 group relative overflow-hidden disabled:bg-slate-800 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span className="relative z-10">{t.form.sending}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t.form.btn}</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {!isPending && <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />}
              </button>

              <p className="text-[10px] text-center text-slate-500 mt-6 border-t border-white/5 pt-4">
                {t.form.microcopy} <br/>
                <span className="text-slate-400">{t.form.no_spam}</span>
              </p>

            </form>
          )}
        </div>
      </motion.div>

    </div>
  );
}