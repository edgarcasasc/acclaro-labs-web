'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Clock, Activity, AlertCircle, ShieldCheck, Zap, Lock, Cpu, Database, LayoutTemplate } from 'lucide-react';

// --- DICCIONARIO DE CONTENIDO MULTI-IDIOMA ---
const CONTENT = {
  es: {
    header: {
      label: "System Logs // Portfolio",
      title: "Bitácora de Ingeniería",
      subtitle_start: "Explorando la intersección entre",
      subtitle_highlight: "IA aplicada, datos y operación",
      subtitle_end: "en entornos reales.",
      nda_note: "Nota: Algunos casos se presentan de forma anónima por NDA; detallamos método, guardrails y supuestos técnicos sin comprometer datos sensibles."
    },
    categories: ["Todos", "Fintech", "Retail", "SaaS", "IA"],
    posts: [
      {
        slug: "escalar-cobranza-ia",
        date: "2026-01-15",
        category: "Fintech",
        tag: "Fintech :: IA :: Compliance",
        readTime: "8 min",
        title: "Escalar cobranza 5X sin escalar headcount: arquitectura cognitiva y cumplimiento",
        excerpt: "Diseñamos una arquitectura autónoma y gobernada para multiplicar capacidad sin multiplicar carga operativa, cuidando trazabilidad.",
        specs: [
          { label: "Problema", val: "Capacidad limitada + riesgo regulatorio", icon: AlertCircle },
          { label: "Enfoque", val: "Automatización + gobernanza + trazabilidad", icon: ShieldCheck },
          { label: "Impacto", val: "Escalamiento con control total", icon: Activity }
        ],
        status: "published"
      },
      {
        slug: "sprint-optimizacion",
        date: "PRÓXIMAMENTE",
        category: "Retail",
        tag: "Retail :: Conversión :: UX",
        readTime: "Coming Soon",
        title: "Sprint de Optimización: De tráfico a pipeline en 2 semanas",
        excerpt: "Metodología de intervención rápida para desbloquear conversiones en un funnel B2B complejo mediante experimentación y datos.",
        specs: [
          { label: "Problema", val: "Alto tráfico, baja conversión", icon: AlertCircle },
          { label: "Enfoque", val: "Diagnóstico UX + Instrumentación", icon: Zap },
          { label: "Impacto", val: "(En proceso de medición)", icon: Activity }
        ],
        status: "coming_soon"
      },
      {
        slug: "modernizacion-legacy",
        date: "EN PROCESO",
        category: "SaaS",
        tag: "SaaS :: Performance :: PWA",
        readTime: "In Dev",
        title: "Modernización de Legacy: De WordPress monolítico a Arquitectura Composable",
        excerpt: "Desacoplando el frontend para ganar velocidad, seguridad y escalabilidad sin perder la gestión de contenido del equipo de marketing.",
        specs: [
          { label: "Problema", val: "Deuda técnica y lentitud", icon: Database },
          { label: "Enfoque", val: "Next.js + Headless CMS", icon: LayoutTemplate },
          { label: "Impacto", val: "(En desarrollo)", icon: Cpu }
        ],
        status: "in_progress"
      }
    ],
    ui: {
      read_case: "LEER_CASO",
      secondary_cta_pre: "¿Buscas esto?",
      secondary_cta_link: "Solicitar diagnóstico",
      coming_soon_text: "Publicamos 1-2 casos por mes.",
      footer_title: "¿Quieres resultados similares?",
      footer_button: "SOLICITAR_DIAGNOSTICO()"
    }
  },
  en: {
    header: {
      label: "System Logs // Portfolio",
      title: "Engineering Log",
      subtitle_start: "Exploring the intersection of",
      subtitle_highlight: "applied IA, data, and operations",
      subtitle_end: "in real-world environments.",
      nda_note: "Note: Some cases are presented anonymously due to NDA; we detail method, guardrails, and technical assumptions without compromising sensitive data."
    },
    categories: ["All", "Fintech", "Retail", "SaaS", "AI"],
    posts: [
      {
        slug: "escalar-cobranza-ia",
        date: "2026-01-15",
        category: "Fintech",
        tag: "Fintech :: AI :: Compliance",
        readTime: "8 min",
        title: "Scaling Collections 5X Without Scaling Headcount: Cognitive Architecture & Compliance",
        excerpt: "We designed an autonomous and governed architecture to multiply capacity without multiplying operational load, ensuring traceability.",
        specs: [
          { label: "Problem", val: "Limited capacity + regulatory risk", icon: AlertCircle },
          { label: "Approach", val: "Automation + governance + traceability", icon: ShieldCheck },
          { label: "Impact", val: "Scaling with total control", icon: Activity }
        ],
        status: "published"
      },
      {
        slug: "sprint-optimizacion",
        date: "COMING SOON",
        category: "Retail",
        tag: "Retail :: Conversion :: UX",
        readTime: "Coming Soon",
        title: "Optimization Sprint: From Traffic to Pipeline in 2 Weeks",
        excerpt: "Rapid intervention methodology to unlock conversions in a complex B2B funnel through experimentation and data.",
        specs: [
          { label: "Problem", val: "High traffic, low conversion", icon: AlertCircle },
          { label: "Approach", val: "UX Diagnosis + Instrumentation", icon: Zap },
          { label: "Impact", val: "(Measurement in progress)", icon: Activity }
        ],
        status: "coming_soon"
      },
      {
        slug: "modernizacion-legacy",
        date: "IN PROGRESS",
        category: "SaaS",
        tag: "SaaS :: Performance :: PWA",
        readTime: "In Dev",
        title: "Legacy Modernization: From Monolithic WordPress to Composable Architecture",
        excerpt: "Decoupling the frontend to gain speed, security, and scalability without losing content management for the marketing team.",
        specs: [
          { label: "Problem", val: "Technical debt and slowness", icon: Database },
          { label: "Approach", val: "Next.js + Headless CMS", icon: LayoutTemplate },
          { label: "Impact", val: "(In development)", icon: Cpu }
        ],
        status: "in_progress"
      }
    ],
    ui: {
      read_case: "READ_CASE",
      secondary_cta_pre: "Looking for this?",
      secondary_cta_link: "Request diagnosis",
      coming_soon_text: "We publish 1-2 cases per month.",
      footer_title: "Want similar results?",
      footer_button: "REQUEST_DIAGNOSIS()"
    }
  },
  fr: {
    header: {
      label: "Logs Système // Portfolio",
      title: "Registre d'Ingénierie",
      subtitle_start: "Exploration de l'intersection entre",
      subtitle_highlight: "IA appliquée, données et opérations",
      subtitle_end: "en environnements réels.",
      nda_note: "Note : Certains cas sont présentés de manière anonyme pour cause de NDA ; nous détaillons la méthode, les garde-fous et les hypothèses techniques sans compromettre les données sensibles."
    },
    categories: ["Tous", "Fintech", "Retail", "SaaS", "IA"],
    posts: [
      {
        slug: "escalar-cobranza-ia",
        date: "15 JAN 2026",
        category: "Fintech",
        tag: "Fintech :: IA :: Conformité",
        readTime: "8 min",
        title: "Mise à l'échelle du recouvrement 5X sans augmenter les effectifs : architecture cognitive et conformité",
        excerpt: "Nous avons conçu une architecture autonome et gouvernée pour multiplier la capacité sans multiplier la charge opérationnelle, tout en assurant la traçabilité.",
        specs: [
          { label: "Problème", val: "Capacité limitée + risque réglementaire", icon: AlertCircle },
          { label: "Approche", val: "Automatisation + gouvernance + traçabilité", icon: ShieldCheck },
          { label: "Impact", val: "Mise à l'échelle avec contrôle total", icon: Activity }
        ],
        status: "published"
      },
      {
        slug: "sprint-optimizacion",
        date: "BIENTÔT",
        category: "Retail",
        tag: "Retail :: Conversion :: UX",
        readTime: "Bientôt",
        title: "Sprint d'Optimisation : Du trafic au pipeline en 2 semaines",
        excerpt: "Méthodologie d'intervention rapide pour débloquer les conversions dans un entonnoir B2B complexe grâce à l'expérimentation et aux données.",
        specs: [
          { label: "Problème", val: "Trafic élevé, faible conversion", icon: AlertCircle },
          { label: "Approche", val: "Diagnostic UX + Instrumentation", icon: Zap },
          { label: "Impact", val: "(Mesure en cours)", icon: Activity }
        ],
        status: "coming_soon"
      },
      {
        slug: "modernizacion-legacy",
        date: "EN COURS",
        category: "SaaS",
        tag: "SaaS :: Performance :: PWA",
        readTime: "En Dev",
        title: "Modernisation Legacy : De WordPress monolithique à Architecture Composable",
        excerpt: "Découplage du frontend pour gagner en vitesse, sécurité et scalabilité sans perdre la gestion de contenu pour l'équipe marketing.",
        specs: [
          { label: "Problème", val: "Dette technique et lenteur", icon: Database },
          { label: "Approche", val: "Next.js + Headless CMS", icon: LayoutTemplate },
          { label: "Impact", val: "(En développement)", icon: Cpu }
        ],
        status: "in_progress"
      }
    ],
    ui: {
      read_case: "LIRE_CAS",
      secondary_cta_pre: "Intéressé ?",
      secondary_cta_link: "Demander un diagnostic",
      coming_soon_text: "Nous publions 1-2 cas par mois.",
      footer_title: "Vous voulez des résultats similaires ?",
      footer_button: "DEMANDER_DIAGNOSTIC()"
    }
  }
};

interface BlogIndexProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function BlogIndex({ lang = 'es' }: BlogIndexProps) {
  const t = CONTENT[lang];
  // Estado para filtros, inicializado con la primera categoría (Todos/All/Tous)
  const [activeFilter, setActiveFilter] = useState(t.categories[0]);

  // Lógica de filtrado
  const filteredPosts = activeFilter === t.categories[0] 
    ? t.posts 
    : t.posts.filter(post => post.category === activeFilter || post.tag.includes(activeFilter));

  return (
    <section className="relative py-24 px-6 bg-[#0B0F19] min-h-screen overflow-hidden">
      
      {/* Fondo Técnico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 pl-6 border-l-2 border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Terminal size={16} className="text-emerald-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-500/80 uppercase font-mono">
              {t.header.label}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 tracking-tight">
            {t.header.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light mb-4">
            {t.header.subtitle_start} <span className="text-slate-200 font-medium">{t.header.subtitle_highlight}</span> {t.header.subtitle_end}
          </p>
          
          {/* Microcopy de Confianza (NDA) */}
          <div className="flex items-start gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 p-3 rounded border border-slate-800/50 inline-block max-w-2xl">
            <Lock size={12} className="mt-0.5 shrink-0" />
            <span>
              {t.header.nda_note}
            </span>
          </div>
        </div>

        {/* --- FILTROS (CHIPS) --- */}
        <div className="flex flex-wrap gap-2 mb-16 ml-6 md:ml-0">
          {t.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all border ${
                activeFilter === cat
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  : "bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- LISTA DE CASOS --- */}
        <div className="space-y-12">
          <AnimatePresence mode='wait'>
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <Link 
                  href={post.status === 'published' ? `/blog/${post.slug}` : '#'}
                  className={`block relative p-6 md:p-10 rounded-2xl border border-slate-800 bg-[#0F121C] hover:bg-[#131620] transition-all duration-300 hover:border-slate-600 ${post.status !== 'published' ? 'cursor-default opacity-80 grayscale-[0.3]' : 'cursor-pointer shadow-lg hover:shadow-2xl'}`}
                >
                  <div className="grid md:grid-cols-[1.8fr_1fr] gap-10 relative z-10">
                    
                    {/* COLUMNA 1: Narrativa */}
                    <div className="flex flex-col h-full">
                      {/* Meta Data */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-5">
                        <span className={`px-2 py-0.5 rounded border ${
                          post.status === 'published' 
                            ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400' 
                            : (post.status === 'in_progress' ? 'bg-blue-900/20 border-blue-500/30 text-blue-400' : 'bg-amber-900/20 border-amber-500/30 text-amber-500')
                        }`}>
                          {post.date}
                        </span>
                        <span className="text-slate-600">//</span>
                        <span className="text-slate-400 tracking-wide uppercase">{post.tag}</span>
                      </div>

                      <h2 className={`text-2xl md:text-3xl font-bold font-serif mb-4 leading-tight ${
                        post.status === 'published' ? 'text-white group-hover:text-emerald-400' : 'text-slate-400'
                      } transition-colors`}>
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light flex-grow">
                        {post.excerpt}
                      </p>

                      {/* CTAs AREA */}
                      <div className="mt-auto pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                        {post.status === 'published' ? (
                          <>
                            {/* CTA Editorial */}
                            <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-bold font-mono group-hover:translate-x-2 transition-transform">
                              <span>{t.ui.read_case}</span> <ArrowRight size={14} />
                            </div>
                            
                            {/* CTA Negocio (Secundario) */}
                            <span className="text-xs text-slate-500 font-mono hover:text-slate-300 transition-colors hidden sm:block">
                              {t.ui.secondary_cta_pre} <span className="underline decoration-slate-700 underline-offset-4 hover:decoration-slate-400">{t.ui.secondary_cta_link}</span>
                            </span>
                          </>
                        ) : (
                          <div className={`text-xs font-mono flex items-center gap-2 ${post.status === 'in_progress' ? 'text-blue-500/70' : 'text-amber-500/70'}`}>
                             <Clock size={12} /> {t.ui.coming_soon_text}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* COLUMNA 2: Specs Box (HUD Style) */}
                    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden group-hover:border-slate-700 transition-colors">
                      {/* Grid sutil interna */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:10px_10px] opacity-20" />
                      
                      <div className="relative z-10 space-y-5">
                        {post.specs.map((spec, j) => {
                          const Icon = spec.icon;
                          return (
                            <div key={j} className="border-b border-slate-800 last:border-0 pb-4 last:pb-0">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Icon size={12} className="text-slate-500" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                                  {spec.label}
                                </span>
                              </div>
                              <span className="text-sm text-slate-200 font-medium leading-tight block">
                                {spec.val}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- FOOTER GLOBAL DE SECCIÓN --- */}
        <div className="mt-24 text-center border-t border-slate-800 pt-12">
            <h3 className="text-2xl font-serif text-white mb-6">{t.ui.footer_title}</h3>
            <Link href="/contacto">
              <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] font-mono flex items-center gap-3 mx-auto">
                <Terminal size={18} />
                <span>{t.ui.footer_button}</span>
              </button>
            </Link>
        </div>

      </div>
    </section>
  );
}